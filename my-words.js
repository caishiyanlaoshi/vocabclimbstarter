/* ==========================================================================
   ↓↓↓  老师们，只需要改这个文件。别的文件都不用动。  ↓↓↓
   TEACHERS: this is the only file you need to edit. Leave everything else alone.
   ========================================================================== */


// 显示在开始画面上的单元名称 · unit name shown on the start screen
const UNIT_NAME = "中一 词语总复习";

// 每一局的时间，单位是秒 · seconds per run
const SECONDS = 90;

// 你的词语。
//   word     词语
//   pinyin   拼音（会显示在每个选项底下）
//   sentence 例句，用三个底线 ___ 标出要挖空的地方
//   def      释义（登顶画面用来提醒学生复习哪些词语的意思）
//
// 四条规则 · four rules:
//   1. 每一行都要有 { word, pinyin, sentence, def }，前后的大括号别删
//   2. sentence 里一定要有 ___（三个底线），代表挖空的位置
//   3. 每一行的结尾都要有一个逗号 ,
//   4. 至少 8 个词语（最少 4 个才跑得起来），越多越好
//
const VOCAB = [
  { word: "锻炼",     pinyin: "duàn liàn",
    sentence: "妈妈早上喜欢去公园___身体。",
    def: "通过健身活动，使身体健壮或恢复健康" },

  { word: "推荐",     pinyin: "tuī jiàn",
    sentence: "这部电影非常好看，值得___给朋友。",
    def: "把认为合适的人或事物介绍给别人，希望被接受或采用" },

  { word: "小心翼翼", pinyin: "xiǎo xīn yì yì",
    sentence: "我们行动要___，才不会打草惊蛇。",
    def: "形容举动小心谨慎，丝毫不敢疏忽" },

  { word: "安慰",     pinyin: "ān wèi",
    sentence: "她这几天心情很不好，你要好好___她一下。",
    def: "安抚劝慰，使别人心里好受一些" },

  { word: "培养",     pinyin: "péi yǎng",
    sentence: "妈妈经常让我做家务，___我独立生活的能力。",
    def: "按照一定的目标进行教育和训练，使成为合格的人才" },

  { word: "究竟",     pinyin: "jiū jìng",
    sentence: "听到外面有声音，我们出去看看___是谁。",
    def: "表示追究原因；毕竟、到底" },

  { word: "辞旧迎新", pinyin: "cí jiù yíng xīn",
    sentence: "人人都把除夕当作___的时刻来庆祝。",
    def: "辞别旧的一年，迎接新的一年" },

  { word: "忙碌",     pinyin: "máng lù",
    sentence: "他每天早出晚归，工作十分___。",
    def: "忙着做事，没有空闲" },

  { word: "象征",     pinyin: "xiàng zhēng",
    sentence: "红色在中国文化里常常___喜庆。",
    def: "用具体的事物表现某种特殊的意义" },

  { word: "感激",     pinyin: "gǎn jī",
    sentence: "大家十分___冲进火场救人的消防员。",
    def: "因得到帮助或好处而对人产生感谢的心情" },

  { word: "疑惑",     pinyin: "yí huò",
    sentence: "成绩一向很好的丽华这次考试居然不及格，大家都感到___。",
    def: "心里不明白，感到困惑" },

  { word: "魅力",     pinyin: "mèi lì",
    sentence: "有些人觉得他很有___，有些却不以为然。",
    def: "很能吸引人、打动人的力量" },

  { word: "流连忘返", pinyin: "liú lián wàng fǎn",
    sentence: "公园里的花儿五彩缤纷，使人___。",
    def: "玩乐时舍不得离开，忘了要回去" },

  { word: "娱乐",     pinyin: "yú lè",
    sentence: "下棋是他最喜欢的一项___活动。",
    def: "使人感到轻松愉快的活动" },

  { word: "覆盖",     pinyin: "fù gài",
    sentence: "厚重的积雪___了大片的土地。",
    def: "遮盖在物体表面上" },

  { word: "甚至",     pinyin: "shèn zhì",
    sentence: "他欺负了同学，___还威胁同学，真是太过分了！",
    def: "用来提出更进一步、更突出的例子" },

  { word: "陌生",     pinyin: "mò shēng",
    sentence: "我们虽然是第一次见面，但是交谈甚欢，一点没有___的感觉。",
    def: "不熟悉，没有见过或接触过" },

  { word: "宁静",     pinyin: "níng jìng",
    sentence: "一些树叶漂在___的湖面上。",
    def: "环境或心情平静、安静" },

  { word: "属于",     pinyin: "shǔ yú",
    sentence: "丽明终于拥有了___自己的电脑，心里特别开心。",
    def: "归某一方或某人所有" },

  { word: "坚持不懈", pinyin: "jiān chí bù xiè",
    sentence: "只有___地练习，才能成为出色的音乐家。",
    def: "一直坚持下去，一点也不松懈" },

  { word: "有效",     pinyin: "yǒu xiào",
    sentence: "戴口罩和勤洗手都是___防止传染的方法。",
    def: "能达到预期的效果" },

  { word: "一帆风顺", pinyin: "yī fān fēng shùn",
    sentence: "人生的道路不可能___，只要我们勇于面对，就能克服重重的困难。",
    def: "比喻事情非常顺利，没有阻碍" },

  { word: "策略",     pinyin: "cè lüè",
    sentence: "在这次围棋比赛中，他以稳扎稳打的___赢得了胜利。",
    def: "为达到目标而定下的计划或方法" },

  { word: "滋味",     pinyin: "zī wèi",
    sentence: "听到了爸爸的批评，明伟心里不是___。",
    def: "心里的感受" },

  { word: "哀求",     pinyin: "āi qiú",
    sentence: "经不住我的苦苦___，妈妈终于答应给我买一艘模型船。",
    def: "苦苦地请求别人" },

  { word: "硬着头皮", pinyin: "yìng zhe tóu pí",
    sentence: "我被老师选中上台演讲，虽然十分紧张，也只好___走上讲台。",
    def: "勉强去做自己不愿意或没把握的事" },

  { word: "催促",     pinyin: "cuī cù",
    sentence: "一吃完早饭，妈妈就___孩子们赶紧去上学。",
    def: "叫人赶快去做某件事" },

  { word: "允许",     pinyin: "yǔn xǔ",
    sentence: "妈妈___我和朋友一起出去玩，我好开心！",
    def: "答应、同意别人的请求" },

  { word: "相貌",     pinyin: "xiàng mào",
    sentence: "妹妹___清秀，干净勤快，是个人见人爱的孩子。",
    def: "人脸部的样子，容貌" },

  { word: "亏",       pinyin: "kuī",
    sentence: "连续几天停电，小贩中心不能做生意，___了不少钱。",
    def: "在钱财上受到损失" },

  { word: "警惕",     pinyin: "jǐng tì",
    sentence: "在陌生环境中要保持___，也应避免独自行动。",
    def: "对可能发生的危险保持敏锐的注意" },

  { word: "一旦",     pinyin: "yí dàn",
    sentence: "你___完成了功课，就能跟弟弟出去打篮球了。",
    def: "表示不确定的将来某一天，一旦发生就……" },

  { word: "失误",     pinyin: "shī wù",
    sentence: "他在比赛中犯了一个致命的___，才让对方得分。",
    def: "因疏忽而造成的错误" },

  { word: "不堪设想", pinyin: "bù kān shè xiǎng",
    sentence: "如果我没有阻止他跟这些损友交往，后果真是___。",
    def: "事情的后果坏到无法想象" },

  { word: "裂痕",     pinyin: "liè hén",
    sentence: "地震导致建筑物出现了许多___。",
    def: "物体表面出现的裂缝" },

  { word: "故障",     pinyin: "gù zhàng",
    sentence: "由于电力___，我们的电脑无法正常工作。",
    def: "机器或设备发生的毛病，不能正常运作" },

  { word: "顺畅",     pinyin: "shùn chàng",
    sentence: "今天交通很___，不到20分钟就到达学校了。",
    def: "进行得很顺利，没有阻碍" },

  { word: "全力以赴", pinyin: "quán lì yǐ fù",
    sentence: "为了赢得冠军，球员们都___。",
    def: "用尽全部力量去做一件事" },

  { word: "稳定",     pinyin: "wěn dìng",
    sentence: "经过一天一夜的抢救，她的情况终于___下来了。",
    def: "没有大的变动，保持平稳的状态" },

  { word: "悠闲",     pinyin: "yōu xián",
    sentence: "吃过饭后，他和母亲在外面的草坪上___地散步。",
    def: "从容自在，没有什么牵挂" },

  { word: "光芒",     pinyin: "guāng máng",
    sentence: "阳光洒在湖面上，散发着金色的___。",
    def: "发出的光亮、光彩" },
  // ↑ 照上面的格式往下加就行。别忘了行尾的逗号，也别忘了句子里的 ___。
  // ↑ Add more in the same format. Don't forget the trailing comma or the ___ blank.
];


/* ==========================================================================
   ↑↑↑  改到这里为止。END OF THE PART YOU EDIT.  ↑↑↑
   ========================================================================== */
