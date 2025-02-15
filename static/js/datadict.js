const DATA_DICT = {
    // 'SERVER_ADDRESS': "http://127.0.0.1:8000", 
    'SERVER_ADDRESS': "http://43.138.42.59:32588/",
    'DICT_PIC_URL': {
        "余":"https://media.prts.wiki/7/73/半身像_余_1.png",
        "烛煌":"https://media.prts.wiki/8/89/半身像_烛煌_1.png",
        "引星棘刺": "https://media.prts.wiki/d/d7/半身像_引星棘刺_1.png",
        "荒芜拉普兰德": "https://media.prts.wiki/a/ac/半身像_荒芜拉普兰德_1.png",
        "忍冬": "https://media.prts.wiki/b/b5/半身像_忍冬_1.png",
        "弑君者": "https://media.prts.wiki/e/e9/半身像_弑君者_1.png",
        "维娜·维多利亚": "https://media.prts.wiki/1/16/半身像_维娜·维多利亚_1.png",
        "玛露西尔": "https://media.prts.wiki/1/13/半身像_玛露西尔_1.png",
        "佩佩": "https://media.prts.wiki/2/24/半身像_佩佩_1.png",
        "娜仁图亚": "https://media.prts.wiki/3/3c/半身像_娜仁图亚_1.png",
        "妮芙": "https://media.prts.wiki/4/49/半身像_妮芙_1.png",
        "乌尔比安": "https://media.prts.wiki/2/20/半身像_乌尔比安_1.png",
        "维什戴尔": "https://media.prts.wiki/5/5a/半身像_维什戴尔_1.png",
        "逻各斯": "https://media.prts.wiki/0/0a/半身像_逻各斯_1.png",
        "魔王": "https://media.prts.wiki/8/8c/半身像_魔王_1.png",
        "阿斯卡纶": "https://media.prts.wiki/0/08/半身像_阿斯卡纶_1.png",
        "艾拉": "https://media.prts.wiki/1/12/半身像_艾拉_1.png",
        "黍": "https://media.prts.wiki/5/52/半身像_黍_1.png",
        "左乐": "https://media.prts.wiki/9/93/半身像_左乐_1.png",
        "莱伊": "https://media.prts.wiki/c/c8/半身像_莱伊_1.png",
        "锏": "https://media.prts.wiki/7/72/半身像_锏_1.png",
        "塑心": "https://media.prts.wiki/7/7e/半身像_塑心_1.png",
        "薇薇安娜": "https://media.prts.wiki/5/5d/半身像_薇薇安娜_1.png",
        "止颂": "https://media.prts.wiki/4/49/半身像_止颂_1.png",
        "赫德雷": "https://media.prts.wiki/b/b4/半身像_赫德雷_1.png",
        "涤火杰西卡": "https://media.prts.wiki/1/1e/半身像_涤火杰西卡_1.png",
        "纯烬艾雅法拉": "https://media.prts.wiki/b/bd/半身像_纯烬艾雅法拉_1.png",
        "琳琅诗怀雅": "https://media.prts.wiki/9/99/半身像_琳琅诗怀雅_1.png",
        "提丰": "https://media.prts.wiki/5/51/半身像_提丰_1.png",
        "圣约送葬人": "https://media.prts.wiki/7/71/半身像_圣约送葬人_1.png",
        "缪尔赛思": "https://media.prts.wiki/4/4a/半身像_缪尔赛思_1.png",
        "霍尔海雅": "https://media.prts.wiki/5/5a/半身像_霍尔海雅_1.png",
        "淬羽赫默": "https://media.prts.wiki/5/54/半身像_淬羽赫默_1.png",
        "伊内丝": "https://media.prts.wiki/5/59/半身像_伊内丝_1.png",
        "麒麟R夜刀": "https://media.prts.wiki/1/16/半身像_麒麟R夜刀_1.png",
        "仇白": "https://media.prts.wiki/4/40/半身像_仇白_1.png",
        "重岳": "https://media.prts.wiki/e/e5/半身像_重岳_1.png",
        "林": "https://media.prts.wiki/7/75/半身像_林_1.png",
        "焰影苇草": "https://media.prts.wiki/a/ae/半身像_焰影苇草_1.png",
        "缄默德克萨斯": "https://media.prts.wiki/0/0d/半身像_缄默德克萨斯_1.png",
        "斥罪": "https://media.prts.wiki/e/e7/半身像_斥罪_1.png",
        "伺夜": "https://media.prts.wiki/f/fc/半身像_伺夜_1.png",
        "白铁": "https://media.prts.wiki/e/e5/半身像_白铁_1.png",
        "玛恩纳": "https://media.prts.wiki/b/b1/半身像_玛恩纳_1.png",
        "百炼嘉维尔": "https://media.prts.wiki/e/ed/半身像_百炼嘉维尔_1.png",
        "鸿雪": "https://media.prts.wiki/4/4d/半身像_鸿雪_1.png",
        "多萝西": "https://media.prts.wiki/0/04/半身像_多萝西_1.png",
        "黑键": "https://media.prts.wiki/e/e6/半身像_黑键_1.png",
        "归溟幽灵鲨": "https://media.prts.wiki/f/f7/半身像_归溟幽灵鲨_1.png",
        "艾丽妮": "https://media.prts.wiki/b/bd/半身像_艾丽妮_1.png",
        "流明": "https://media.prts.wiki/9/9f/半身像_流明_1.png",
        "号角": "https://media.prts.wiki/8/85/半身像_号角_1.png",
        "菲亚梅塔": "https://media.prts.wiki/f/f8/半身像_菲亚梅塔_1.png",
        "澄闪": "https://media.prts.wiki/1/17/半身像_澄闪_1.png",
        "令": "https://media.prts.wiki/d/d6/半身像_令_1.png",
        "老鲤": "https://media.prts.wiki/e/e8/半身像_老鲤_1.png",
        "灵知": "https://media.prts.wiki/a/a9/半身像_灵知_1.png",
        "耀骑士临光": "https://media.prts.wiki/d/db/半身像_耀骑士临光_1.png",
        "焰尾": "https://media.prts.wiki/9/92/半身像_焰尾_1.png",
        "远牙": "https://media.prts.wiki/4/4f/半身像_远牙_1.png",
        "琴柳": "https://media.prts.wiki/2/28/半身像_琴柳_1.png",
        "假日威龙陈": "https://media.prts.wiki/5/51/半身像_假日威龙陈_1.png",
        "水月": "https://media.prts.wiki/2/22/半身像_水月_1.png",
        "帕拉斯": "https://media.prts.wiki/7/72/半身像_帕拉斯_1.png",
        "卡涅利安": "https://media.prts.wiki/3/36/半身像_卡涅利安_1.png",
        "浊心斯卡蒂": "https://media.prts.wiki/7/7f/半身像_浊心斯卡蒂_1.png",
        "凯尔希": "https://media.prts.wiki/c/c0/半身像_凯尔希_1.png",
        "歌蕾蒂娅": "https://media.prts.wiki/3/33/半身像_歌蕾蒂娅_1.png",
        "异客": "https://media.prts.wiki/d/d3/半身像_异客_1.png",
        "灰烬": "https://media.prts.wiki/f/fa/半身像_灰烬_1.png",
        "夕": "https://media.prts.wiki/f/f2/半身像_夕_1.png",
        "嵯峨": "https://media.prts.wiki/a/a4/半身像_嵯峨_1.png",
        "空弦": "https://media.prts.wiki/8/86/半身像_空弦_1.png",
        "山": "https://media.prts.wiki/7/7b/半身像_山_1.png",
        "迷迭香": "https://media.prts.wiki/9/9a/半身像_迷迭香_1.png",
        "泥岩": "https://media.prts.wiki/0/08/半身像_泥岩_1.png",
        "瑕光": "https://media.prts.wiki/a/a6/半身像_瑕光_1.png",
        "史尔特尔": "https://media.prts.wiki/5/58/半身像_史尔特尔_1.png",
        "森蚺": "https://media.prts.wiki/4/4a/半身像_森蚺_1.png",
        "棘刺": "https://media.prts.wiki/0/08/半身像_棘刺_1.png",
        "铃兰": "https://media.prts.wiki/f/fe/半身像_铃兰_1.png",
        "早露": "https://media.prts.wiki/9/92/半身像_早露_1.png",
        "W": "https://media.prts.wiki/4/45/半身像_W_1.png",
        "温蒂": "https://media.prts.wiki/5/5f/半身像_温蒂_1.png",
        "傀影": "https://media.prts.wiki/a/ad/半身像_傀影_1.png",
        "风笛": "https://media.prts.wiki/e/ea/半身像_风笛_1.png",
        "刻俄柏": "https://media.prts.wiki/6/69/半身像_刻俄柏_1.png",
        "年": "https://media.prts.wiki/4/4d/半身像_年_1.png",
        "阿": "https://media.prts.wiki/7/72/半身像_阿_1.png",
        "煌": "https://media.prts.wiki/1/1c/半身像_煌_1.png",
        "莫斯提马": "https://media.prts.wiki/f/fc/半身像_莫斯提马_1.png",
        "麦哲伦": "https://media.prts.wiki/c/c7/半身像_麦哲伦_1.png",
        "赫拉格": "https://media.prts.wiki/8/82/半身像_赫拉格_1.png",
        "黑": "https://media.prts.wiki/2/23/半身像_黑_1.png",
        "陈": "https://media.prts.wiki/e/e1/半身像_陈_1.png",
        "斯卡蒂": "https://media.prts.wiki/a/a5/半身像_斯卡蒂_1.png",
        "银灰": "https://media.prts.wiki/9/90/半身像_银灰_1.png",
        "塞雷娅": "https://media.prts.wiki/4/44/半身像_塞雷娅_1.png",
        "星熊": "https://media.prts.wiki/2/22/半身像_星熊_1.png",
        "夜莺": "https://media.prts.wiki/e/e9/半身像_夜莺_1.png",
        "闪灵": "https://media.prts.wiki/d/d6/半身像_闪灵_1.png",
        "安洁莉娜": "https://media.prts.wiki/3/30/半身像_安洁莉娜_1.png",
        "艾雅法拉": "https://media.prts.wiki/3/36/半身像_艾雅法拉_1.png",
        "伊芙利特": "https://media.prts.wiki/2/23/半身像_伊芙利特_1.png",
        "推进之王": "https://media.prts.wiki/9/98/半身像_推进之王_1.png",
        "能天使": "https://media.prts.wiki/2/2e/半身像_能天使_1.png"
    }
};