
import { RegionData, CraftsmanData, TeamData, ProjectData, TechniqueData } from './types';

// Page 1 Data: Regions
export const REGIONS_DB: RegionData[] = [
  {
    id: "GS-01",
    name: "陇东黄土高原区",
    location: "位于甘肃省东部，中心坐标约 107.5° E，35.5° N，东接陕西，北靠宁夏，属黄土高原沟壑区。",
    climate: "暖温带半干旱-半湿润特征，年均温8-10℃，年降水量400-600毫米。",
    terrain: "地形以塬、梁、峁、沟为主，水土流失显著，形成千沟万壑的典型黄土地貌。",
    specialties: "特色物产以小麥、荞麦、胡麻及白萝卜加工品（如粉条）为传统支柱。",
    history: "聚落历史沿革可追溯至周先祖农耕文明发祥地，秦置北地郡，汉设安定郡。",
    constructionEvents: "营造事迹突出下沉式窑洞与靠崖窑，利用黄土垂直节理挖掘，辅以砖石拱券加固，兼具冬暖夏凉功能。",
    customs: "民族信仰以汉族为主，民间信仰融合祖先崇拜与自然神祇，春节“社火”祭祀。",
    livelihood: "生活习俗年中，年俗以冬闲备年货、秋收储粮为特色，社火表演蕴含农耕祈愿。",
    production: "生产特征为旱作农业主导，依赖梯田蓄水保墒，庄浪梯田工程为生态农业典范。",
    transport: "交通特征自古为陇蜀道节点，今有青兰高速贯通，但地形崎岖制约路网密度。",
    trade: "商贸特征以农产品集市贸易为主，静宁苹果、秦安花椒为外销主力。",
    notes: "窑洞建筑面临现代转型，部分改造为生态民宿，但传统营造技艺传承式微。",
    // Image: Loess Plateau / Ravines / Cave Dwellings context
    imageUrl: "https://images.unsplash.com/photo-1627572763262-42173167b79d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "GS-02",
    name: "陇南山地",
    location: "地处甘肃东南部，秦岭西延与岷山交接带。",
    climate: "北亚热带湿润气候，年均温12-14℃，降水量500-800mm。",
    terrain: "重峦叠嶂、河谷深切，嘉陵江、白龙江流域形成狭窄冲积盆地。",
    specialties: "油橄榄、中药材（当归、黄芪），兼有水稻种植。",
    history: "秦人发祥地，三国阴平古道战略要冲。",
    constructionEvents: "民居代表为板屋土墙，穿斗式构架适应陡坡地形。",
    customs: "藏、羌遗风犹存，崇尚“万物有灵”。",
    livelihood: "饮食偏好腊肉、酸菜，善酿酒。",
    production: "立体农业模式，低山茶园、中山林果、高山药材。",
    transport: "受制于秦巴山地，古为蜀道险阻，今兰海高速贯通。",
    trade: "以药材、茶叶交易较大，武都花椒市场辐射全国。",
    notes: "传统干栏式建筑存留较少。",
    // Image: Misty Mountains / Greenery / Longnan vibe
    imageUrl: "https://images.unsplash.com/photo-1510526543133-c59807577884?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "GS-03",
    name: "河西走廊区",
    location: "甘肃省西北部，东起乌鞘岭，西至敦煌。",
    climate: "典型温带干旱气候，年均温6-10℃，日照超3000小时。",
    terrain: "南依祁连山，北主要为荒漠戈壁，中有绿洲。",
    specialties: "小麦、玉米、瓜果（民勤蜜瓜、敦煌葡萄）。",
    history: "汉武帝列四郡，丝绸之路咽喉，明长城与屯堡体系标志军事营建高峰。",
    constructionEvents: "夯土技术发达，长城、坞堡林立。现代融合混凝土与现代灌溉技术。",
    customs: "汉族信仰多元，回族与藏族、裕固族交汇。佛教石窟艺术（莫高窟、榆林窟）。",
    livelihood: "饮食重面食，喜饮茶。居住模式为“庄窝子”。",
    production: "绿洲灌溉农业，引用“坎儿井”式地下渠（当地称“暗渠”）。",
    transport: "丝路交通要道，连霍高速、兰新高铁穿全线。",
    trade: "历史上为欧亚贸易中转站，今以制种业、新能源装备出口为主导。",
    notes: "传统夯土堡寨因移民搬迁空置率高。",
    // Image: Desert / Fortification / Great Wall / Dunhuang style
    imageUrl: "https://images.unsplash.com/photo-1542385437-02ac85d9d73d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "GS-04",
    name: "甘南高原区",
    location: "甘肃西南部，青藏高原东北缘。",
    climate: "高寒湿润，年均温1-4℃，无霜期短。",
    terrain: "山原、峡谷、草甸，黄河首曲湿地。",
    specialties: "牦牛、藏羊、青稞及冬虫夏草。",
    history: "羌、吐谷浑、吐蕃古道，藏传佛教寺院聚落。",
    constructionEvents: "藏式碉房，塌板房，寺院金顶红墙，技艺精湛。",
    customs: "全民信教，藏传佛教格鲁派为主。节日有“插箭节”、“晒佛节”。",
    livelihood: "牧民居帐篷，农区住碉房。喜饮酥油茶，食糌粑。",
    production: "畜牧业为主导，转场放牧。",
    transport: "受制于高海拔，G213国道为主要干线，冬季多雪封闭。",
    trade: "以畜产品交易为主，夏河拉卜楞寺周边形成宗教艺术品市场。",
    notes: "石砌碉房技艺面临现代建材冲击。",
    // Image: Tibetan Monastery / Labrang style
    imageUrl: "https://images.unsplash.com/photo-1558296245-728b5e679a95?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "GS-05",
    name: "中部河谷区",
    location: "以兰州为中心，黄河穿城而过。",
    climate: "中温带半干旱，年均温8-10℃。",
    terrain: "黄土丘陵与河谷盆地相间，两山夹一河。",
    specialties: "白兰瓜、百合、玫瑰，城郊型农业。",
    history: "秦汉设郡，明代设卫，兰州为西北商贸中心。",
    constructionEvents: "黄河水车为代表，明代段续创制。三合院民居。",
    customs: "民族融合区，回、东乡族聚居。黄河母亲塑像为地标。",
    livelihood: "饮食“牛肉面”文化。社火、太平鼓。",
    production: "工商业为主，兰州为石油化工、装备制造基地。",
    transport: "西北综合交通枢纽，铁路、航空枢纽。",
    trade: "依托兰州新区综合保税区，面向中亚出口。",
    notes: "传统水车提灌技艺为动态遗产。",
    // Image: Lanzhou City / Yellow River
    imageUrl: "https://images.unsplash.com/photo-1616422703816-03c734005118?q=80&w=1200&auto=format&fit=crop"
  }
];

// Page 2 & 3 Data: Craftsmen (Full 23 entries)
export const CRAFTSMEN_DB: CraftsmanData[] = [
  { 
    id: 1, name: "牛宝林", gender: "男", birthDate: "1963年5月", age: 61, experience: "44年", 
    trade: "大木梁架", specialty: "古建修复", nativePlace: "张掖市", location: "张掖市甘州区", 
    level: "省级非遗代表性传承人", heritageProject: "张掖大佛寺修缮", title: "参与张掖大佛寺修缮指导", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "17", 
    companyName: "张掖古建园林公司(已注销)", works: "张掖土塔维修(2012)，张掖大佛寺修缮(1983-2015)", 
    achievements: "甘肃省文物局古建专家库成员", notes: "技术精湛，经验丰富", imageUrl: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 2, name: "甄曦", gender: "男", birthDate: "1950年10月", age: 74, experience: "37年", 
    trade: "彩绘", specialty: "传统彩绘", nativePlace: "张掖市", location: "张掖市甘州区", 
    level: "张掖市级非遗代表性传承人", heritageProject: "张掖彩绘", title: "张掖彩绘非遗传承人，关于书画艺术研究员", 
    learningMethod: "家族传承", education: "《法罗寺唵》、《金刚经》等", hasApprentices: "是", apprentices: "16", 
    companyName: "张掖宇源古建筑装饰有限责任公司", works: "张掖黑河大桥彩绘设计，明粮仓彩绘", 
    achievements: "多次参与国保单位彩绘修复，建设单位获鲁班奖", notes: "世家传承", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 3, name: "甄晓东", gender: "男", birthDate: "1973年8月", age: 51, experience: "29年", 
    trade: "彩绘", specialty: "彩画设计", nativePlace: "张掖市", location: "张掖市甘州区", 
    level: "市级非遗传承人", heritageProject: "张掖彩绘", title: "市级传承人", 
    learningMethod: "家族传承", education: "无", hasApprentices: "是", apprentices: "4", 
    companyName: "张掖宇源古建筑装饰有限责任公司", works: "张掖木塔寺彩绘，武威海藏寺彩绘", 
    achievements: "参与多项省级文物修复", notes: "", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 4, name: "强宝兴", gender: "男", birthDate: "1984年12月", age: 40, experience: "19年", 
    trade: "金砖制作", specialty: "青砖青瓦制作", nativePlace: "张掖市", location: "张掖市甘州区", 
    level: "市级非遗传承人", heritageProject: "金砖制作", title: "市级非遗传承人(第三代)", 
    learningMethod: "师徒传承", education: "青砖青瓦制作技艺", hasApprentices: "是", apprentices: "2", 
    companyName: "甘肃强龙古建文物保护材料有限公司", works: "09年开始与张掖古建院合作", 
    achievements: "恢复传统青砖烧制技艺，产品远销西北", notes: "", imageUrl: "https://images.unsplash.com/photo-1596547610738-952467ca7854?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 5, name: "薛永发", gender: "男", birthDate: "1970年", age: 54, experience: "33年", 
    trade: "大木建筑", specialty: "古建施工", nativePlace: "甘肃省", location: "临夏回族自治州", 
    level: "省级非遗传承人", heritageProject: "古建筑修复", title: "甘肃省非遗代表性传承人", 
    learningMethod: "师徒传承", education: "古建筑修复技艺", hasApprentices: "是", apprentices: "30余", 
    companyName: "甘肃古典集团直属二分公司", works: "青海乐都古建修复，兰州白塔山修复", 
    achievements: "临夏能工巧匠", notes: "技艺全面", imageUrl: "https://images.unsplash.com/photo-1545167622-3a6ac156a649?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 6, name: "茅元明", gender: "男", birthDate: "1957年", age: 68, experience: "40余年", 
    trade: "大木建筑", specialty: "木作、修复", nativePlace: "甘肃省", location: "临夏州", 
    level: "国家级非遗传承人", heritageProject: "古建筑修复技艺", title: "国家级非遗代表性传承人，中国古建筑工匠名师", 
    learningMethod: "家族/师徒", education: "古建筑修复技艺", hasApprentices: "是", apprentices: "40", 
    companyName: "甘肃古典建设集团有限公司", works: "参与过故宫木结构维护，夏河拉卜楞寺修复", 
    achievements: "享受国务院特殊津贴，高级古建筑工程师", notes: "权威专家", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 7, name: "刘才发", gender: "男", birthDate: "1963年", age: 61, experience: "40年", 
    trade: "大木建筑", specialty: "木工", nativePlace: "永靖县", location: "永靖县", 
    level: "省级非遗传承人", heritageProject: "古建筑修复技艺", title: "省级非遗传承人，古建筑修复技艺(永靖县)代表性传承人", 
    learningMethod: "师徒传承", education: "刘才发的文章《永靖古建筑修复技艺》", hasApprentices: "是", apprentices: "70余", 
    companyName: "永靖县昌宇古建筑劳务队", works: "代表作有清理宁凤山抗日将领墓地；炳灵寺...", 
    achievements: "2021年入选甘肃省非遗工匠年度人物", notes: "", imageUrl: "https://images.unsplash.com/photo-1559526324-c1f296c02153?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 8, name: "维杰布", gender: "男", birthDate: "1952年", age: 72, experience: "54年", 
    trade: "砖雕制作", specialty: "砖雕", nativePlace: "临夏市", location: "临夏市", 
    level: "国家级传承人", heritageProject: "临夏砖雕", title: "国家级非遗传承人", 
    learningMethod: "家族传承", education: "临夏砖雕", hasApprentices: "是", apprentices: "30", 
    companyName: "临夏州神韵砖雕有限公司", works: "临夏回族自治州大门，砖雕", 
    achievements: "“白玉兰”奖，流派代表，省级非遗项目保护单位", notes: "", imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 9, name: "沈占伟", gender: "男", birthDate: "1967年", age: 57, experience: "43年", 
    trade: "砖雕制作", specialty: "砖雕艺术", nativePlace: "临夏市", location: "临夏市", 
    level: "省级非遗传承人", heritageProject: "临夏砖雕", title: "省级非遗传承人", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "10", 
    companyName: "临夏市永峰砖雕工程有限责任公司", works: "临夏红园砖雕", 
    achievements: "临夏州级工艺美术大师，临夏砖雕工匠", notes: "", imageUrl: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 10, name: "张江中", gender: "男", birthDate: "1957年", age: 67, experience: "50年", 
    trade: "脊兽制作", specialty: "脊兽、水泥雕", nativePlace: "永登县", location: "永登县", 
    level: "省级非遗传承人", heritageProject: "脊兽制作技艺", title: "省级非遗传承人", 
    learningMethod: "家族传承", education: "无", hasApprentices: "是", apprentices: "5", 
    companyName: "甘肃省临夏州神韵砖雕有限公司", works: "《五百罗汉》，《飞天》", 
    achievements: "甘肃省二级工艺美术民间艺术师", notes: "", imageUrl: "https://images.unsplash.com/photo-1569466896818-3353d14adeb7?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 11, name: "李茂改", gender: "男", birthDate: "1950年", age: 74, experience: "55年", 
    trade: "土作/窗洞", specialty: "园林建筑、仿古", nativePlace: "兰州市", location: "兰州市西固区", 
    level: "国家级非遗传承人", heritageProject: "窗洞营造技艺", title: "国家级非遗传承人", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "5", 
    companyName: "古建筑工业(巴思镇)", works: "主要从事民居挂落、栏杆、格扇窗制作", 
    achievements: "2013年获兰州市民间艺术及非遗保护工作先进个人", notes: "", imageUrl: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 12, name: "李世荣", gender: "男", birthDate: "1957年", age: 67, experience: "52年", 
    trade: "土作", specialty: "窗洞", nativePlace: "兰州市", location: "兰州市西固区", 
    level: "省级非遗传承人", heritageProject: "窗洞营造技艺", title: "省级非遗传承人", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "2", 
    companyName: "张掖市宇源古建筑装饰有限责任公司", works: "西部民居挂落及花格窗制作", 
    achievements: "2013年被评为兰州市民间艺术及非遗保护工作先进个人", notes: "", imageUrl: "https://images.unsplash.com/photo-1492462543947-040389c4a632?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 13, name: "祁国忠", gender: "男", birthDate: "1960年", age: 64, experience: "43年", 
    trade: "土作", specialty: "窗洞", nativePlace: "兰州市", location: "兰州市西固区", 
    level: "市级非遗传承人", heritageProject: "窗洞营造技艺", title: "市级非遗传承人", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "2", 
    companyName: "-", works: "现任西固区陈官营村上社社长，参与修复金城公园古建群", 
    achievements: "作品《窗格》获第五届兰州市民间艺术作品展三等奖", notes: "", imageUrl: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 14, name: "田巨峰", gender: "男", birthDate: "1968年", age: 56, experience: "42年", 
    trade: "土作", specialty: "窗洞", nativePlace: "兰州市", location: "兰州市西固区", 
    level: "市级非遗传承人", heritageProject: "窗洞营造技艺", title: "市级非遗传承人", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "2", 
    companyName: "-", works: "先后参与维修和新建庭院200多处，代表作有榆中县兴隆山修缮", 
    achievements: "致力于传统窗洞技艺的收集整理", notes: "", imageUrl: "https://images.unsplash.com/photo-1537047902294-62286416950e?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 15, name: "杨万年", gender: "男", birthDate: "1950年", age: 74, experience: "52年", 
    trade: "古建筑修缮", specialty: "古建筑修缮、瓦作、屋顶复称", nativePlace: "甘肃省天水市", location: "甘肃省天水市武山县", 
    level: "省级非遗代表性传承人", heritageProject: "古建筑营造技艺", title: "省级非遗代表性传承人，金瓦步—功勋高级古建营造师", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "少1", 
    companyName: "天水文润古建修缮营造技艺非遗工坊", works: "主持修复天水市麦积山石窟、北道区玉泉观、伏羲庙", 
    achievements: "国家卓越工程师团队成员", notes: "技艺高超", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 16, name: "杨永杰", gender: "男", birthDate: "1960年代", age: 50, experience: "30年以上", 
    trade: "木雕、古建筑修缮", specialty: "木作、雕刻、彩绘、泥塑", nativePlace: "甘肃省天水市", location: "甘肃省天水市武山县", 
    level: "省级非遗代表性传承人", heritageProject: "木品古建筑修缮技艺", title: "省级非遗代表性传承人", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "1", 
    companyName: "平川区文化馆仿古建筑木作营造技艺团队", works: "与父合作修复木质古建筑模型，代表作《天水古民居》", 
    achievements: "平川区文化馆古建筑木作营造技艺团队带头人", notes: "", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 17, name: "曹廷祯", gender: "男", birthDate: "/", age: "60+", experience: "30余年", 
    trade: "传统建筑工艺", specialty: "古建泥塑造型、修补技艺", nativePlace: "甘肃省陇南市", location: "甘肃省陇南市武都区", 
    level: "市级非遗代表性传承人", heritageProject: "东路古建筑营造技艺", title: "可担任古不确定的（六代传人，初时随父辈人）", 
    learningMethod: "家族传承", education: "无", hasApprentices: "否", apprentices: "0", 
    companyName: "东路古建筑营造技艺非遗工坊", works: "清洁和修补古建壁画，临夏大拱北、兰州西关十字亭", 
    achievements: "“陇南工匠”提名", notes: "擅长泥塑", imageUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 18, name: "张德祥", gender: "男", birthDate: "/", age: "/", experience: "/", 
    trade: "木、瓦工/建筑设计", specialty: "古建筑设计施工", nativePlace: "甘肃省陇南市", location: "甘肃省陇南市礼县", 
    level: "市级非遗代表性传承人", heritageProject: "传统建筑营造技艺", title: "市级非遗代表性传承人", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "否", apprentices: "0", 
    companyName: "单巴藏式建筑技艺团队", works: "作品远销云南大理（设计并施工），甘肃礼县《大观园》", 
    achievements: "参与设计的“二龙戏珠”获全国古建筑优质工程", notes: "", imageUrl: "https://images.unsplash.com/photo-1544168190-79c11e66b380?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 19, name: "安红兵", gender: "男", birthDate: "/", age: "/", experience: "/", 
    trade: "传统建筑工艺", specialty: "藏式建筑（模型）", nativePlace: "甘肃省甘南州", location: "甘肃省甘南藏族自治州", 
    level: "市级非遗代表性传承人", heritageProject: "藏式建筑技艺(模型)", title: "市级非遗代表性传承人", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "1", 
    companyName: "天水市博物馆文物保护修复中心", works: "制作拉卜楞寺大经堂模型", 
    achievements: "高级技师1人、文博馆员6人", notes: "与赵杰共同传承", imageUrl: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 20, name: "赵杰", gender: "男", birthDate: "/", age: "/", experience: "/", 
    trade: "传统建筑工艺", specialty: "藏式建筑（模型）", nativePlace: "甘肃省甘南州", location: "甘肃省甘南藏族自治州", 
    level: "市级非遗代表性传承人", heritageProject: "藏式建筑技艺(模型)", title: "市级非遗代表性传承人", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "1", 
    companyName: "天水市博物馆文物保护修复中心", works: "制作拉卜楞寺大经堂模型", 
    achievements: "致力于藏式建筑模型的数字化保护", notes: "与安红兵共同传承", imageUrl: "https://images.unsplash.com/photo-1545167622-3a6ac156a649?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 21, name: "朱海峰", gender: "男", birthDate: "/", age: "/", experience: "/", 
    trade: "传统建筑工艺", specialty: "港务/寺院建筑/松木/彩绘", nativePlace: "甘肃省甘南州", location: "甘肃省甘南藏族自治州夏河县", 
    level: "省级非遗代表性传承人", heritageProject: "拉卜楞寺古建筑营造技艺", title: "省级非遗代表性传承人", 
    learningMethod: "家族传承", education: "无", hasApprentices: "否", apprentices: "/", 
    companyName: "寓莫里工匠村", works: "长期拉卜楞寺大经堂维护（用几十年岁月，把青春奉献给拉卜楞寺）", 
    achievements: "拉卜楞寺古建筑营造技艺代表性传承人", notes: "", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 22, name: "朱有明", gender: "男", birthDate: "/", age: "/", experience: "/", 
    trade: "传统建筑工艺", specialty: "寺院建筑", nativePlace: "甘肃省甘南州", location: "甘肃省甘南藏族自治州夏河县", 
    level: "省级非遗代表性传承人", heritageProject: "拉卜楞寺古建筑营造技艺", title: "省级非遗代表性传承人", 
    learningMethod: "家族传承", education: "无", hasApprentices: "否", apprentices: "/", 
    companyName: "-", works: "与朱海峰同修拉卜楞寺二十多年", 
    achievements: "代表作“飞云阁”", notes: "", imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    id: 23, name: "吴本坏", gender: "男", birthDate: "1955年", age: 69, experience: "40年", 
    trade: "寺院建筑", specialty: "古建修缮", nativePlace: "民乐县", location: "民乐县", 
    level: "省级非遗传承人", heritageProject: "东灰山寺庙修缮", title: "省级非遗代表性传承人", 
    learningMethod: "师徒传承", education: "无", hasApprentices: "是", apprentices: "10", 
    companyName: "-", works: "参与民乐县圣天寺修缮，代表作《飞云阁》", 
    achievements: "技艺精湛", notes: "", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" 
  }
];

// Page 3 Data: Teams (URLs updated)
export const TEAMS_DB: TeamData[] = [
  {
    id: 1,
    name: "张掖古建园林公司 (巴思镇)",
    type: "有限责任公司",
    size: "一百余人",
    established: "1995年-2008年",
    trades: "木工、彩绘、砖瓦工",
    specialty: "彩绘",
    location: "张掖",
    awards: "无",
    techInnovation: "无",
    heritageBase: "无",
    masters: 0,
    achievements: "现公司注销",
    corporateImage: ""
  },
  {
    id: 2,
    name: "张掖宇源古建筑装饰有限责任公司 (巴思镇)",
    type: "有限责任公司",
    size: "12人",
    established: "2001年-2014年",
    trades: "彩绘、木工、瓦工",
    specialty: "彩绘",
    location: "张掖、武威",
    awards: "省级传承人",
    techInnovation: "无",
    heritageBase: "无",
    masters: 0,
    achievements: "建设单位获鲁班奖，荣誉证书十五",
    corporateImage: ""
  },
  {
    id: 3,
    name: "甘肃林海建设工程有限公司",
    type: "有限责任公司",
    size: "500余人",
    established: "2013年",
    trades: "木工、彩绘、雕刻、砌筑",
    specialty: "木作",
    location: "西北五省",
    awards: "省级传承人",
    techInnovation: "有",
    heritageBase: "无",
    masters: 25,
    achievements: "临夏县双城恒基春晖苑度假山庄（一期）工程",
    corporateImage: ""
  },
  {
    id: 4,
    name: "甘肃强龙古建文物保护材料有限公司",
    type: "有限责任公司",
    size: "二十",
    established: "2018年",
    trades: "砖瓦工",
    specialty: "金砖制作",
    location: "产品覆盖西北五省及北方市场",
    awards: "市级传承人",
    techInnovation: "有",
    heritageBase: "有",
    masters: 0,
    achievements: "金砖制作，敦煌花砖制作，城墙砖制作",
    corporateImage: "https://images.unsplash.com/photo-1590740008805-3e28c460d3d5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "甘肃古典集团直属二分公司",
    type: "内资分公司",
    size: "20",
    established: "2020年",
    trades: "木工",
    specialty: "掌尺营造师、木雕师、彩绘师、砖瓦",
    location: "甘肃、青海地区",
    awards: "国家级传承人",
    techInnovation: "无",
    heritageBase: "无",
    masters: 0,
    achievements: "先后取得飞天金奖1项，飞天奖8项",
    corporateImage: ""
  },
  {
    id: 6,
    name: "甘肃古典建设集团有限公司",
    type: "古建筑修缮保护公司",
    size: "200+",
    established: "1980年代",
    trades: "掌尺营造师、木雕师、彩绘师、砖瓦匠",
    specialty: "古建整体顶升、抽梁换柱、藏汉结合式修复",
    location: "西北全域",
    awards: "国家级非遗传承人1名，中国古建筑保护优质工程3项",
    techInnovation: "是(开发三种施工方法：整体抬升、古建筑屋面楼层修复、局部构件纠偏)",
    heritageBase: "是(通过工业园支持培训)",
    masters: 40,
    achievements: "完成100多个古建筑修复项目，包括嘉峪关古建筑群",
    corporateImage: ""
  },
  {
    id: 7,
    name: "永靖县昊宇古建劳务有限公司",
    type: "劳务承包/非遗传承团队",
    size: "100+",
    established: "2015年",
    trades: "掌尺营造师12名、雕刻师20名",
    specialty: "佛阁制作、木构工厂化生产、寺庙修复",
    location: "甘青宁三省6处加工基地",
    awards: "“白塔木匠”流派代表，西北名刹首选营造团队",
    techInnovation: "无",
    heritageBase: "无",
    masters: 32,
    achievements: "修建西北宗教建筑5000+座",
    corporateImage: ""
  },
  {
    id: 8,
    name: "临夏州祥泰古建园林公司",
    type: "古建园林企业",
    size: "380人",
    established: "未公开",
    trades: "雕刻师63名、彩绘师30名",
    specialty: "砖木石雕、伊斯兰风格建筑装饰",
    location: "临夏州",
    awards: "省级砖雕协会副会长单位",
    techInnovation: "无",
    heritageBase: "无",
    masters: 93,
    achievements: "西宁丹噶尔古城、回乡风情园等地标项目",
    corporateImage: ""
  },
  {
    id: 9,
    name: "临夏市永禄砖雕工程有限责任公司",
    type: "家族式砖雕企业",
    size: "2008年",
    established: "2008年",
    trades: "砖雕师、水泥雕刻师",
    specialty: "大型砖雕总体设计安装、微型艺术砖雕",
    location: "临夏市",
    awards: "临夏砖雕非遗工坊",
    techInnovation: "无",
    heritageBase: "无",
    masters: 4,
    achievements: "完成多座清真寺砖雕影壁工程",
    corporateImage: ""
  },
  {
    id: 10,
    name: "甘肃省临夏神韵砖雕有限公司",
    type: "非遗保护企业",
    size: "40-100人",
    established: "2006年",
    trades: "砖雕艺术师、微雕匠人",
    specialty: "古建砖雕装饰、微雕艺术品",
    location: "临夏市",
    awards: "国家级非遗“临夏砖雕”代表单位",
    techInnovation: "无",
    heritageBase: "无",
    masters: 40,
    achievements: "第100届广交会甘肃省代表展品",
    corporateImage: ""
  },
  {
    id: 11,
    name: "张掖市大兴古建园林建筑有限责任公司",
    type: "古建施工企业(已吊销未注销)",
    size: "",
    established: "1997年",
    trades: "园林建筑师、仿古建筑施工员",
    specialty: "仿古园林建筑、低层民用古建",
    location: "张掖市",
    awards: "/",
    techInnovation: "无",
    heritageBase: "无",
    masters: 4,
    achievements: "90年代参与张掖仿古街区建设",
    corporateImage: ""
  },
  {
    id: 12,
    name: "张掖市子源古典艺术装饰有限责任公司",
    type: "艺术装饰企业(已吊销未注销)",
    size: "",
    established: "2011年",
    trades: "装饰设计师、传统彩绘师",
    specialty: "建筑彩绘",
    location: "张掖市",
    awards: "/",
    techInnovation: "无",
    heritageBase: "无",
    masters: 2,
    achievements: "武威恒河寺、文庙（2017），武威鸠摩罗什寺",
    corporateImage: ""
  },
  {
    id: 13,
    name: "敦煌研究院文物保护团队",
    type: "文物保护研究机构团队",
    size: "1944年(敦煌研究院成立)",
    established: "1944年",
    trades: "文物保护专家、修复工匠、科研人员",
    specialty: "石窟寺保护、壁画修复、古建筑保护",
    location: "敦煌市",
    awards: "国家卓越工程师团队；时代楷模；感动甘肃·陇人骄子",
    techInnovation: "是(开展研究和国际合作培训)",
    heritageBase: "是",
    achievements: "莫高窟等世界遗产保护工程；防治沙害、洞窟微环境研究",
    masters: 0,
    corporateImage: ""
  },
  {
    id: 14,
    name: "甘肃天筑建设工程有限公司",
    type: "古建筑保护施工公司",
    size: "",
    established: "",
    trades: "古建筑保护工匠",
    specialty: "古文化遗址、古墓葬、古建筑、石窟寺保护",
    location: "兰州市",
    awards: "施工二级资质(古建筑保护)",
    techInnovation: "/",
    heritageBase: "/",
    masters: 0,
    achievements: "文物保护工程勘察设计、施工",
    corporateImage: ""
  },
  {
    id: 15,
    name: "天水文润古建修缮营造技艺非遗工坊",
    type: "非遗工坊",
    size: "2022年(省级非遗工坊认定)",
    established: "2022年",
    trades: "古建筑修缮工匠",
    specialty: "古建筑修缮营造技艺",
    location: "天水市",
    awards: "省级非遗工坊",
    techInnovation: "/",
    heritageBase: "是(非遗工坊性质包括培训)",
    masters: 0,
    achievements: "非遗项目保护与传承",
    corporateImage: ""
  },
  {
    id: 16,
    name: "平川区文化馆仿古建筑木作营造技艺团队",
    type: "文化馆下属非遗项目团队",
    size: "",
    established: "",
    trades: "木作工匠",
    specialty: "仿古建筑木作营造技艺",
    location: "白银市平川区",
    awards: "省级非遗代表性项目",
    techInnovation: "是(文化馆开展培训)",
    heritageBase: "/",
    masters: 0,
    achievements: "非遗项目传承",
    corporateImage: ""
  },
  {
    id: 17,
    name: "永昌古建筑营造技艺团队",
    type: "非遗项目团队",
    size: "",
    established: "",
    trades: "古建筑工匠",
    specialty: "永昌古建筑营造技艺",
    location: "金昌市永昌县",
    awards: "第五批省级非遗代表性项目",
    techInnovation: "/",
    heritageBase: "/",
    masters: 0,
    achievements: "非遗技艺传承",
    corporateImage: ""
  },
  {
    id: 18,
    name: "卓尼县藏式建筑技艺团队",
    type: "非遗传承人团队",
    size: "",
    established: "",
    trades: "藏式建筑工匠",
    specialty: "藏式建筑技艺(碉房)",
    location: "甘南藏族自治州卓尼县",
    awards: "省级非遗代表性传承人安旦知旺杰",
    techInnovation: "/",
    heritageBase: "1(安旦知旺杰)",
    masters: 0,
    achievements: "非遗技艺保护",
    corporateImage: ""
  },
  {
    id: 19,
    name: "天水市博物馆文物保护修复中心",
    type: "博物馆文物保护中心",
    size: "13人(专业技术人员)",
    established: "约1980年代(40年发展)",
    trades: "文物修复工匠、技术人员",
    specialty: "文物修复、古建筑相关保护",
    location: "天水市",
    awards: "高级技师1人、文博馆员6人",
    techInnovation: "是(专业团队培训)",
    heritageBase: "13",
    masters: 0,
    achievements: "文物保护修复工程",
    corporateImage: ""
  },
  {
    id: 20,
    name: "莫高里工匠村",
    type: "文化体验工匠村",
    size: "",
    established: "",
    trades: "传统工匠、体验师",
    specialty: "敦煌文化传统建筑体验、木简制作",
    location: "敦煌市",
    awards: "",
    techInnovation: "是(手作课程培训)",
    heritageBase: "",
    masters: 0,
    achievements: "敦煌文化活化利用、游客体验项目",
    corporateImage: ""
  }
];

// Page 4 Data: Projects
export const PROJECTS_DB: ProjectData[] = [
  {
    id: 1,
    name: "临夏城隍庙大殿",
    completionTime: "2025年",
    scale: "600多平方米",
    mainCraft: "传统建筑营造",
    process: "基础-立架-小木作-屋面",
    features: "立架",
    images: "https://images.unsplash.com/photo-1548588681-adf41d474533?q=80&w=600&auto=format&fit=crop",
    oralRecord: "",
    notes: ""
  },
  {
    id: 2,
    name: "民和县宏善寺大经堂保护修缮工程",
    completionTime: "2019年",
    scale: "维修面积1204m²",
    mainCraft: "古建筑大木修缮",
    process: "梁架拔正复位、屋面揭顶维修、墙体裂缝灌浆",
    features: "梁架拔正复位",
    images: "https://images.unsplash.com/photo-1596484552993-9c7199971db4?q=80&w=600&auto=format&fit=crop",
    oralRecord: "",
    notes: ""
  },
  {
    id: 3,
    name: "赛康寺三世强巴殿修缮工程",
    completionTime: "2021年",
    scale: "",
    mainCraft: "古建筑大木修缮",
    process: "梁架拔正复位、屋面揭顶维修、墙体裂缝灌浆",
    features: "梁架拔正复位",
    images: "https://images.unsplash.com/photo-1583853239243-7f780879f945?q=80&w=600&auto=format&fit=crop",
    oralRecord: "",
    notes: ""
  },
  {
    id: 4,
    name: "尖扎县赛康寺塔秀活佛行宫修缮工程",
    completionTime: "2019年",
    scale: "省级文物保护单位",
    mainCraft: "古建筑大木修缮",
    process: "梁架拔正复位、屋面揭顶维修、墙体裂缝灌浆",
    features: "藏汉结合式斗拱修复",
    images: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop",
    oralRecord: "",
    notes: ""
  },
  {
    id: 5,
    name: "阿柔大寺大经堂及护法殿抢险修缮工程",
    completionTime: "2021年",
    scale: "",
    mainCraft: "古建筑大木修缮",
    process: "梁架拔正复位、屋面揭顶维修、墙体裂缝灌浆",
    features: "梁架拔正复位",
    images: "https://images.unsplash.com/photo-1528659556157-5488439e729a?q=80&w=600&auto=format&fit=crop",
    oralRecord: "",
    notes: ""
  },
  {
    id: 6,
    name: "民勤二分大庙修缮工程",
    completionTime: "2023年",
    scale: "",
    mainCraft: "古建筑大木修缮",
    process: "梁架拔正复位、屋面揭顶维修、墙体裂缝灌浆",
    features: "梁架拔正复位",
    images: "https://images.unsplash.com/photo-1598556776374-399859573887?q=80&w=600&auto=format&fit=crop",
    oralRecord: "",
    notes: ""
  },
  {
    id: 7,
    name: "民勤县东镇大庙修缮工程",
    completionTime: "2024年",
    scale: "建筑面积480m², 院落500m²",
    mainCraft: "古建筑大木修缮",
    process: "梁架拔正复位、屋面揭顶维修、墙体裂缝灌浆",
    features: "砖雕墀头修复、木构加固",
    images: "https://images.unsplash.com/photo-1627838563588-468205f23456?q=80&w=600&auto=format&fit=crop",
    oralRecord: "",
    notes: ""
  },
  {
    id: 8,
    name: "金川公园古建筑群维修改造项目",
    completionTime: "2022年",
    scale: "维修聚仙亭、碧春舫等10处建筑，总面积1600m²",
    mainCraft: "古建筑大木作修复",
    process: "梁架拔正复位、屋面揭顶维修、墙体裂缝灌浆",
    features: "木构检修加固、彩绘翻新",
    images: "https://images.unsplash.com/photo-1590766940554-634a7ed214b1?q=80&w=600&auto=format&fit=crop",
    oralRecord: "",
    notes: ""
  },
  {
    id: 9,
    name: "喇家遗址文物保护利用设施建设项目",
    completionTime: "2018年",
    scale: "",
    mainCraft: "古建筑大木作修复",
    process: "梁架拔正复位、屋面揭顶维修、墙体裂缝灌浆",
    features: "梁架拔正复位",
    images: "https://images.unsplash.com/photo-1518182170546-0766dd6f790c?q=80&w=600&auto=format&fit=crop",
    oralRecord: "",
    notes: ""
  },
  {
    id: 10,
    name: "民和县文家寺弥勒殿地震灾后抢险加固工程",
    completionTime: "2024年",
    scale: "",
    mainCraft: "古建筑大木作修复",
    process: "梁架拔正复位、屋面揭顶维修、墙体裂缝灌浆",
    features: "梁架拔正复位",
    images: "https://images.unsplash.com/photo-1634567222485-6447817452d7?q=80&w=600&auto=format&fit=crop",
    oralRecord: "",
    notes: ""
  },
  {
    id: 11,
    name: "大佛寺厢房彩绘",
    completionTime: "1983年",
    scale: "偏殿、厢房彩绘",
    mainCraft: "建筑彩绘",
    process: "刮白-样纸-拍图-装色-上矾水-上油",
    features: "地仗",
    images: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=600&auto=format&fit=crop",
    oralRecord: "工匠牛宝琳口述",
    notes: "工艺牛宝琳口述"
  },
  {
    id: 12,
    name: "民乐圣天寺大愿楼彩绘",
    completionTime: "2006年",
    scale: "主殿彩绘",
    mainCraft: "建筑彩绘",
    process: "刮白-样纸-拍图-装色-上矾水-上油",
    features: "地仗",
    images: "https://images.unsplash.com/photo-1627843562624-91361c40213d?q=80&w=600&auto=format&fit=crop",
    oralRecord: "工匠甄耀自传记录",
    notes: "工匠甄耀自传记录"
  }
];

// Page 5 Data: Techniques (Images updated to match type)
export const TECHNIQUES_DB: TechniqueData[] = [
  {
    id: 1,
    name: "张掖古建筑彩绘",
    materials: "矿物质颜料(石青、石绿、朱砂)为主。(1)涂饰材料:传统矿石颜料、化工颜料、丙烯颜料、国画颜料；(2)胶粘剂:骨胶、桐油",
    tools: "打样工具:牛皮纸、粉袋、炭笔; 绘画工具:油画笔、毛笔、排刷",
    process: "刮白→做样纸→拍谱子→装色→上矾水→贴金/描金→上油",
    method: "以“叠晕”和“退晕”为主，突出立体感",
    rhyme: "无",
    characteristics: "佛教故事、祥瑞动物、缠枝牡丹等。大青绿、大五彩等等级较高的彩画。",
    results: "融合西夏文化与中原汉风",
    // Painting detail
    imageUrl: "https://images.unsplash.com/photo-1582560475093-5183ba486e4e?q=80&w=600&auto=format&fit=crop",
    oral: "",
    notes: ""
  },
  {
    id: 2,
    name: "白银青砖青瓦烧制技艺",
    materials: "本地黏土、朱红土、陶土混合",
    tools: "传统弓形切泥器、木制坯模、窑温监测铁钩",
    process: "选土→ 泡土去碱 → 阴干 → 制坯 → 装窑烧制 → 出窑",
    method: "把盆伏的窑顶用土覆盖严实，然后给“盆”内注入大量的水，使其慢慢渗入窑内原来被烧红的砖就变成青灰色",
    rhyme: "三烧，七分焖",
    characteristics: "烧制全砖会出现桃心十六瓣莲花纹、联珠葡萄连花纹等图案",
    results: "成品呈黛青色，抗冻、耐酸碱，吸水率≤18%",
    // Bricks / Kiln
    imageUrl: "https://images.unsplash.com/photo-1600573472591-ee6c8e695394?q=80&w=600&auto=format&fit=crop",
    oral: "",
    notes: ""
  },
  {
    id: 3,
    name: "永靖白塔乡古建筑艺术",
    materials: "优质松木，纹理直、耐腐朽",
    tools: "鲁班尺、墨斗、手工锛凿",
    process: "下料备料-稳柱顶石-木料加工-构建组装-立木",
    method: "椽花挂椽、平枋踏牵-苗檩花牵",
    rhyme: "几何算法类：“要做八角形，一寸取三分。” 营造技艺类：“举折三六九，殿堂四七尽...”",
    characteristics: "无",
    results: "吸收各民族优秀建筑文化产生了汉式、藏式、回式、藏汉结合式多种营造风格",
    // Wood structure / construction
    imageUrl: "https://images.unsplash.com/photo-1543862475-eb136770b9b7?q=80&w=600&auto=format&fit=crop",
    oral: "",
    notes: ""
  },
  {
    id: 4,
    name: "临夏砖雕",
    materials: "",
    tools: "折尺、锯子、刨子、铲、錾、刻刀",
    process: "打墨→构图→雕刻→细雕→过水→编号→拼排→修饰",
    method: "根据需要进行图案设计和手工雕饰",
    rhyme: "无",
    characteristics: "牡丹（富贵）、荷花（清廉）、博古架",
    results: "作品表现形式与创作题材不断创新发展，注重立体感",
    // Detailed Relief / Carving
    imageUrl: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=600&auto=format&fit=crop",
    oral: "",
    notes: ""
  },
  {
    id: 5,
    name: "青瓦制作技艺",
    materials: "就地取材使用当地的红壤土",
    tools: "瓦转子、瓦机子、削泥器、拍板、泥铲等",
    process: "轧罐子→制坯子→烧窑",
    method: "夹住瓦机子上的泥条一边推动瓦转子转动，边拍打使其更加严实",
    rhyme: "无",
    characteristics: "无",
    results: "传统方法制作青瓦，手工拍打修正",
    // Roof tiles
    imageUrl: "https://images.unsplash.com/photo-1517414204284-fb7e98b2e255?q=80&w=600&auto=format&fit=crop",
    oral: "",
    notes: ""
  },
  {
    id: 6,
    name: "脊兽制作技艺",
    materials: "当地优质红壤土",
    tools: "无",
    process: "选土-泡土-晒泥-制坯-捏泥-晾晒入窑",
    method: "通过捏塑、堆塑、镂、刻、绘等手法进行精细的深加工",
    rhyme: "无",
    characteristics: "无",
    results: "手工古法制作的脊兽，既有原始性，又有多元化色彩",
    // Roof Beast
    imageUrl: "https://images.unsplash.com/photo-1560931102-44df08846f7c?q=80&w=600&auto=format&fit=crop",
    oral: "",
    notes: ""
  },
  {
    id: 7,
    name: "窗洞制作技艺",
    materials: "就地取材",
    tools: "锄、橛、镐",
    process: "选址定座向——打窑、剔窑、泥窑——修窑脸——安装门窗框——加固穹顶",
    method: "掌握土质勘察、崖面坡度处理、箍窑、扎窑肩等窑洞营造技艺",
    rhyme: "无",
    characteristics: "无",
    results: "农耕文化发展中轨迹性的传统技艺",
    // Cave dwelling window
    imageUrl: "https://images.unsplash.com/photo-1496614932623-0a3a9743552e?q=80&w=600&auto=format&fit=crop",
    oral: "",
    notes: ""
  }
];
