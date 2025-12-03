
// Table 1: Regional Environment & History
export interface RegionData {
  id: string; // e.g., GS-01
  name: string; // 地区名称
  location: string; // 地理位置
  climate: string; // 气候条件
  terrain: string; // 地形特点
  specialties: string; // 特色物产
  history: string; // 聚落历史沿革
  constructionEvents: string; // 营造事迹
  customs: string; // 民族信仰
  livelihood: string; // 生活习俗
  production: string; // 生产特征
  transport: string; // 交通特征
  trade: string; // 商贸特征
  notes: string; // 备注
  imageUrl?: string; // Added for visual layout
}

// Table 2: Craftsmen Basic Info
export interface CraftsmanData {
  id: number;
  name: string;
  gender: string;
  birthDate: string; // 出生年月
  age: number | string; // 年龄
  experience: string; // 从业时长
  trade: string; // 工种类别 (e.g., 木工, 彩绘)
  specialty: string; // 专长 (Added)
  nativePlace: string; // 籍贯 (Added)
  location: string; // 日常工作地点 (City/County)
  level: string; // 级别/称号
  heritageProject: string; // 非遗项目名称
  title: string; // 传承人称号/荣誉
  learningMethod: string; // 学习方式 (Added)
  education: string; // 书籍/文献
  hasApprentices: string; // 是否收徒 (Added)
  apprentices: string; // 授徒数量
  companyName: string; // 成立公司名称 (Added)
  works: string; // 代表作品
  achievements: string; // 个人业绩/荣誉/成果
  notes: string;
  imageUrl?: string;
}

// Table 3: Construction Teams
export interface TeamData {
  id: number;
  name: string;
  type: string; // 组织性质
  size: string; // 员工规模
  established: string; // 成立时间
  trades: string; // 工匠类别构成
  specialty: string; // 专长
  location: string; // 工作地点
  awards: string; // 主要荣誉
  techInnovation: string; // 团队技术
  heritageBase: string; // 是否有培训基地
  masters: number | string; // 师傅数量
  achievements: string; // 企业业绩成果
  corporateImage: string; // 企业从业图像 (Description or URL)
}

// Table 4: Project Info
export interface ProjectData {
  id: number;
  name: string;
  completionTime: string;
  scale: string; // 项目规模
  mainCraft: string; // 营造技艺种类
  process: string; // 加工工艺流程
  features: string; // 关键工艺特征
  images: string; // 过程图像
  oralRecord: string; // 口述记录
  notes: string;
}

// Table 5: Craft Techniques
export interface TechniqueData {
  id: number;
  name: string;
  materials: string; // 选材讲究
  tools: string; // 使用工具
  process: string; // 制作流程
  method: string; // 制作方法
  rhyme: string; // 制作口诀
  characteristics: string; // 表现题材
  results: string; // 成果特征
  imageUrl?: string; // 图像
  oral: string; // 口述
  notes: string;
}

export type TabType = 'dashboard' | 'regions' | 'craftsmen' | 'teams' | 'projects' | 'techniques';