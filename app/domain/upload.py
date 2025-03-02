import hashlib
import hmac
import time

import zstd
from litestar import Request, Response, post
from msgspec import Struct
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.model import Archive


class UploadData(Struct):
    data: str
    vote_times: int
    key: str | None = None


@post("/upload")
async def upload(request: Request, data: UploadData, db_session: AsyncSession) -> Response:
    key = data.key
    result = data.data
    vote_times = data.vote_times
    host = request.client.host if request.client else "anonymous"
    identifier = request.headers.get("X-Forwarded-For") or request.headers.get("X-Real-IP") or host

    is_create = key is None
    if is_create:
        timestamp = str(time.time())
        key = hmac.new(identifier.encode(), timestamp.encode(), hashlib.sha1).hexdigest()
    result = zstd.decompress(result.encode()).decode()
    archive = Archive(key=key, data=result, ip=identifier, vote_times=vote_times)

    if is_create:
        db_session.add(archive)
    else:
        await db_session.merge(archive)

    await db_session.commit()

    return Response(
        status_code=200,
        content={"key": key, "updated_at": int(archive.updated_at.timestamp())},
    )
