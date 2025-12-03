import React, { useState, useEffect, useCallback } from 'react';
import { LayoutDashboard, Map, Users, HardHat, Building2, Hammer, Menu, X, Award, BookOpen, Briefcase, MapPin, Clock, ArrowRight, Mountain, Trees, Cloud, Wind, Waves, User, Layers, PenTool, LayoutTemplate, PlusCircle, Trash2, Pencil } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { DataView, SectionCard, DetailRow, InfoBadge } from './components/DataView';
import { AddDataModal } from './components/AddDataModal';
import { REGIONS_DB, CRAFTSMEN_DB, TEAMS_DB, PROJECTS_DB, TECHNIQUES_DB } from './constants';
import { TabType, RegionData, CraftsmanData, TeamData, ProjectData, TechniqueData } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sessionStartTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sessionDuration, setSessionDuration] = useState('00:00:00');
  
  // Helper to load state from localStorage or fallback to default DB
  const loadState = <T,>(key: string, defaultData: T[]): T[] => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(`Failed to load ${key} from localStorage`, e);
    }
    return defaultData;
  };

  // Data State - managing local state to allow additions
  const [craftsmen, setCraftsmen] = useState<CraftsmanData[]>(() => loadState('db_craftsmen', CRAFTSMEN_DB));
  const [teams, setTeams] = useState<TeamData[]>(() => loadState('db_teams', TEAMS_DB));
  const [projects, setProjects] = useState<ProjectData[]>(() => loadState('db_projects', PROJECTS_DB));
  const [techniques, setTechniques] = useState<TechniqueData[]>(() => loadState('db_techniques', TECHNIQUES_DB));

  // Selection State
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [selectedTechnique, setSelectedTechnique] = useState<TechniqueData | null>(null);

  // Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null); // Track item being edited

  // Persist State Changes
  useEffect(() => localStorage.setItem('db_craftsmen', JSON.stringify(craftsmen)), [craftsmen]);
  useEffect(() => localStorage.setItem('db_teams', JSON.stringify(teams)), [teams]);
  useEffect(() => localStorage.setItem('db_projects', JSON.stringify(projects)), [projects]);
  useEffect(() => localStorage.setItem('db_techniques', JSON.stringify(techniques)), [techniques]);

  // Time & Session Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const diff = now.getTime() - sessionStartTime.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setSessionDuration(
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [sessionStartTime]);

  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: '总览', icon: <LayoutDashboard size={20} /> },
    { id: 'regions', label: '地理区域', icon: <Map size={20} /> },
    { id: 'craftsmen', label: '工匠名录', icon: <Users size={20} /> },
    { id: 'teams', label: '营造团队', icon: <HardHat size={20} /> },
    { id: 'projects', label: '项目案例', icon: <Building2 size={20} /> },
    { id: 'techniques', label: '营造技艺', icon: <Hammer size={20} /> },
  ];

  const handleNavigate = useCallback((tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Safe Accessor Helper to prevent crashes on undefined data
  const safeStr = (val: any) => (val || '').toString();

  // Logic to handle saving data (both Add and Edit) - Memoized
  const handleSaveData = useCallback((data: any) => {
    const updateList = (prevList: any[]) => {
      // Use string comparison for robust ID matching
      const exists = prevList.some(item => String(item.id) === String(data.id));
      if (exists) {
        // Update existing
        return prevList.map(item => String(item.id) === String(data.id) ? data : item);
      } else {
        // Add new
        return [data, ...prevList];
      }
    };

    switch (activeTab) {
      case 'craftsmen':
        setCraftsmen(prev => updateList(prev));
        break;
      case 'teams':
        setTeams(prev => updateList(prev));
        break;
      case 'projects':
        setProjects(prev => updateList(prev));
        break;
      case 'techniques':
        setTechniques(prev => updateList(prev));
        break;
    }
  }, [activeTab]);

  // Logic to open Edit Modal - Memoized
  const handleEdit = useCallback((item: any) => {
    setEditingItem(item);
    setIsAddModalOpen(true);
  }, []);

  // Logic to Delete Data - Memoized
  // Updated signature to accept string or number and perform type-safe string comparison
  const handleDelete = useCallback((id: string | number) => {
    if (!window.confirm("确定要删除这条数据吗？此操作无法撤销。")) return;

    // Use String() comparison to ensure ID types (number vs string) don't fail deletion
    switch (activeTab) {
      case 'craftsmen':
        setCraftsmen(prev => prev.filter(item => String(item.id) !== String(id)));
        break;
      case 'teams':
        setTeams(prev => prev.filter(item => String(item.id) !== String(id)));
        break;
      case 'projects':
        setProjects(prev => prev.filter(item => String(item.id) !== String(id)));
        break;
      case 'techniques':
        setTechniques(prev => prev.filter(item => String(item.id) !== String(id)));
        break;
    }
  }, [activeTab]);

  const getRegionIcon = (id: string) => {
    switch (id) {
        case "GS-01": return <Mountain size={100} className="text-amber-100 opacity-90" />;
        case "GS-02": return <Trees size={100} className="text-emerald-100 opacity-90" />;
        case "GS-03": return <Wind size={100} className="text-stone-100 opacity-90" />;
        case "GS-04": return <Cloud size={100} className="text-sky-100 opacity-90" />;
        case "GS-05": return <Waves size={100} className="text-blue-100 opacity-90" />;
        default: return <Map size={100} className="text-gray-100 opacity-90" />;
    }
  };

  const getRegionColor = (id: string) => {
     switch (id) {
        case "GS-01": return "bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-200/50";
        case "GS-02": return "bg-gradient-to-br from-emerald-500 to-green-600 shadow-emerald-200/50";
        case "GS-03": return "bg-gradient-to-br from-stone-500 to-stone-600 shadow-stone-200/50";
        case "GS-04": return "bg-gradient-to-br from-sky-500 to-indigo-600 shadow-sky-200/50";
        case "GS-05": return "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/50";
        default: return "bg-gray-500";
     }
  };

  const getTechniqueGradient = (id: number) => {
    const gradients = [
      "from-rose-500 to-pink-600",
      "from-violet-500 to-purple-600",
      "from-cyan-500 to-blue-600",
      "from-amber-500 to-orange-600",
      "from-emerald-500 to-teal-600",
      "from-indigo-500 to-blue-600",
      "from-fuchsia-500 to-pink-600",
    ];
    return gradients[id % gradients.length];
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard 
          onNavigate={handleNavigate} 
          craftsmenCount={craftsmen.length}
          teamsCount={teams.length}
          projectsCount={projects.length}
          techniquesCount={techniques.length}
          regionsCount={REGIONS_DB.length}
          craftsmenData={craftsmen}
        />;
      case 'regions':
        return (
          <div className="space-y-8 pb-10">
            <div className="flex items-center gap-4 mb-6 px-2 border-l-4 border-indigo-600 pl-4">
               <div>
                 <h2 className="text-4xl font-bold text-gray-900 tracking-tight">地理人文环境</h2>
                 <p className="text-gray-500 mt-1 font-medium">甘肃五大特色地域自然与人文全景</p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
               {REGIONS_DB.map((region) => (
                 <div 
                   key={region.id}
                   onClick={() => setSelectedRegion(region)}
                   className={`group relative h-[320px] rounded-3xl cursor-pointer shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col overflow-hidden text-white ${getRegionColor(region.id)}`}
                 >
                    <div className="absolute top-[-20px] right-[-20px] opacity-20 group-hover:opacity-30 transition-opacity transform rotate-12 scale-125">
                       {getRegionIcon(region.id)}
                    </div>
                    
                    <div className="flex-1 p-8 flex flex-col justify-between relative z-10">
                       <div className="flex justify-between items-start">
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-lg text-xs font-mono font-bold border border-white/30 shadow-sm">{region.id}</span>
                       </div>
                       
                       <div>
                         <h3 className="text-3xl font-bold mb-3 drop-shadow-sm">{region.name}</h3>
                         <p className="text-white/90 line-clamp-3 font-medium text-sm leading-relaxed mb-6 bg-black/5 p-3 rounded-lg backdrop-blur-sm border border-white/10">{region.location}</p>
                         
                         <div className="flex items-center text-xs font-bold tracking-widest uppercase bg-white/20 w-fit px-4 py-2 rounded-full backdrop-blur hover:bg-white hover:text-gray-900 transition-colors">
                            <span>探索详情</span>
                            <ArrowRight size={14} className="ml-2" />
                         </div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            {/* Region Detail Modal */}
            {selectedRegion && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                <div 
                  className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" 
                  onClick={() => setSelectedRegion(null)}
                ></div>
                <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col overflow-hidden border border-white">
                  
                  <div className={`relative h-56 flex-shrink-0 flex items-center px-12 ${getRegionColor(selectedRegion.id)}`}>
                     <div className="flex-1 z-10 text-white">
                        <span className="font-mono mb-2 block tracking-wider text-sm opacity-80 border border-white/30 w-fit px-2 rounded">{selectedRegion.id}</span>
                        <h2 className="text-5xl font-bold tracking-tight drop-shadow-md">{selectedRegion.name}</h2>
                     </div>
                     <div className="opacity-20 transform scale-150 text-white">
                        {getRegionIcon(selectedRegion.id)}
                     </div>
                     <button 
                        onClick={() => setSelectedRegion(null)}
                        className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors backdrop-blur-md"
                      >
                        <X size={24} />
                      </button>
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar p-10 bg-gray-50/50">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <SectionCard title="自然环境" icon={<Map className="text-emerald-600" />} color="emerald">
                         <DetailRow label="地理位置" value={selectedRegion.location} />
                         <DetailRow label="气候条件" value={selectedRegion.climate} />
                         <DetailRow label="地形特点" value={selectedRegion.terrain} />
                         <DetailRow label="特色物产" value={selectedRegion.specialties} />
                       </SectionCard>
                       
                       <SectionCard title="人文历史" icon={<BookOpen className="text-amber-600" />} color="amber">
                          <DetailRow label="历史沿革" value={selectedRegion.history} />
                          <DetailRow label="营造事迹" value={selectedRegion.constructionEvents} />
                          <DetailRow label="民族信仰" value={selectedRegion.customs} />
                       </SectionCard>
                       
                       <SectionCard title="社会经济" icon={<Users className="text-blue-600" />} color="blue">
                          <DetailRow label="生活习俗" value={selectedRegion.livelihood} />
                          <DetailRow label="生产特征" value={selectedRegion.production} />
                          <DetailRow label="交通特征" value={selectedRegion.transport} />
                          <DetailRow label="商贸特征" value={selectedRegion.trade} />
                       </SectionCard>

                       <SectionCard title="备注与现状" icon={<Briefcase className="text-purple-600" />} color="purple">
                          <DetailRow label="备注" value={selectedRegion.notes} />
                       </SectionCard>
                     </div>
                     <div className="h-10"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case 'craftsmen':
        return (
          <DataView<CraftsmanData>
            title="传统建筑工匠名录"
            data={craftsmen}
            onAdd={() => { setEditingItem(null); setIsAddModalOpen(true); }}
            onEdit={handleEdit}
            onDelete={handleDelete}
            protectSystemData={true} // Protect system data (ID <= 100), allow user data (ID > 100) deletion
            searchKeys={['name', 'trade', 'location', 'level']}
            columns={[
              { header: '序号', accessor: 'id', width: 'w-20 text-gray-400 font-mono' },
              { header: '工匠姓名', accessor: 'name', width: 'w-32 font-bold text-gray-900 text-lg' },
              { header: '工种类别', accessor: (item) => <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold border border-indigo-100">{item.trade || '未分类'}</span>, width: 'w-40' },
              { header: '传承级别', accessor: (item) => <span className={`text-sm font-bold px-2 py-1 rounded ${item.level && item.level.includes('国家') ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>{item.level ? (item.level.split ? item.level.split('传承人')[0] + '传承人' : item.level) : '无'}</span> },
              { header: '所在地', accessor: 'location' },
            ]}
            renderDetail={(item) => (
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-200 pb-8">
                  <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                    <User size={64} className="text-indigo-400" />
                  </div>
                  <div className="flex-1 space-y-4">
                     <div>
                       <div className="flex items-center gap-4 mb-2">
                         <h1 className="text-5xl font-bold text-gray-900">{item.name}</h1>
                         <span className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">{item.trade}</span>
                       </div>
                       <p className="text-2xl text-indigo-600 font-bold">{item.level}</p>
                     </div>
                     
                     <div className="flex flex-wrap gap-3">
                        {safeStr(item.specialty).split('、').map((s, i) => (
                          <span key={i} className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-bold border border-gray-200 shadow-sm">{s}</span>
                        ))}
                     </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 flex items-center justify-between group hover:shadow-lg transition-all">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-sm text-blue-600">
                           <MapPin size={32} />
                        </div>
                        <div>
                           <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">日常工作地点</p>
                           <p className="text-2xl font-bold text-gray-900">{item.location}</p>
                           <p className="text-base text-gray-500 font-medium">{item.nativePlace} (籍贯)</p>
                        </div>
                    </div>
                    <div className="hidden sm:block text-right pr-6">
                       <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">从业时长</p>
                       <p className="text-4xl font-bold text-blue-900">{item.experience}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <InfoBadge label="性别" value={item.gender} icon={<User size={16} />} />
                    <InfoBadge label="年龄" value={item.age} icon={<Clock size={16} />} />
                    <InfoBadge label="出生年月" value={item.birthDate} icon={<Briefcase size={16} />} />
                    <InfoBadge label="授徒数量" value={item.apprentices} icon={<Users size={16} />} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                   <SectionCard title="传承信息" icon={<BookOpen className="text-purple-600" />} color="purple">
                      <DetailRow label="非遗项目" value={item.heritageProject} />
                      <DetailRow label="传承人称号" value={item.title} />
                      <DetailRow label="学习方式" value={item.learningMethod} />
                      <DetailRow label="书籍文献" value={item.education} />
                   </SectionCard>
                   
                   <SectionCard title="主要成就" icon={<Award className="text-amber-600" />} color="amber">
                      <DetailRow label="成立公司" value={item.companyName} />
                      <DetailRow label="代表作品" value={item.works} />
                      <DetailRow label="个人业绩" value={item.achievements} />
                      <div className="pt-4 mt-4 border-t border-amber-100">
                         <DetailRow label="备注" value={item.notes} />
                      </div>
                   </SectionCard>
                </div>
              </div>
            )}
          />
        );
      case 'teams':
         return (
          <DataView<TeamData>
            title="传统建筑工匠营建队伍"
            data={teams}
            onAdd={() => { setEditingItem(null); setIsAddModalOpen(true); }}
            onEdit={handleEdit}
            onDelete={handleDelete}
            protectSystemData={true} // Protect system data (ID <= 100), allow user data (ID > 100) deletion
            searchKeys={['name', 'location', 'specialty']}
            columns={[
              { header: '序号', accessor: 'id', width: 'w-20 font-mono text-gray-400' },
              { header: '组织名称', accessor: 'name', width: 'w-48 font-bold text-gray-900 text-lg' },
              { header: '性质', accessor: (item) => <span className="text-gray-600 font-medium">{item.type}</span> },
              { header: '所在地', accessor: 'location' },
            ]}
            renderDetail={(item) => (
              <div className="space-y-8">
                 <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                       <HardHat size={200} />
                    </div>
                    <div className="relative z-10">
                      <h1 className="text-4xl font-bold text-white mb-6 tracking-wide shadow-black drop-shadow-lg">{item.name}</h1>
                      <div className="flex flex-wrap gap-4 text-sm font-bold text-white">
                        <span className="bg-white/20 px-5 py-2 rounded-full backdrop-blur border border-white/30 flex items-center gap-2"><Briefcase size={16}/> {item.type}</span>
                        <span className="bg-white/20 px-5 py-2 rounded-full backdrop-blur border border-white/30 flex items-center gap-2"><MapPin size={16}/> {item.location}</span>
                        <span className="bg-white/20 px-5 py-2 rounded-full backdrop-blur border border-white/30 flex items-center gap-2"><Clock size={16}/> 成立于 {item.established}</span>
                      </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SectionCard title="基本信息" icon={<Users className="text-blue-600" />} color="blue">
                       <DetailRow label="员工规模" value={item.size} />
                       <DetailRow label="工匠构成" value={item.trades} />
                       <DetailRow label="专长" value={item.specialty} />
                       <DetailRow label="师傅数量" value={item.masters} />
                    </SectionCard>
                    
                    <SectionCard title="资质与荣誉" icon={<Award className="text-rose-600" />} color="rose">
                       <DetailRow label="主要荣誉" value={item.awards} />
                       <DetailRow label="技术创新" value={item.techInnovation} />
                       <DetailRow label="培训基地" value={item.heritageBase} />
                    </SectionCard>
                 </div>
                 
                 <SectionCard title="业绩成果" icon={<Building2 className="text-emerald-600" />} color="emerald">
                    <DetailRow label="企业业绩" value={item.achievements} />
                 </SectionCard>
              </div>
            )}
          />
         );
      case 'projects':
        return (
          <DataView<ProjectData>
            title="经典项目案例"
            data={projects}
            onAdd={() => { setEditingItem(null); setIsAddModalOpen(true); }}
            onEdit={handleEdit}
            onDelete={handleDelete}
            protectSystemData={true} // Protect system data (ID <= 100), allow user data (ID > 100) deletion
            searchKeys={['name', 'mainCraft', 'features']}
            columns={[
              { header: '序号', accessor: 'id', width: 'w-20 font-mono text-gray-400' },
              { header: '项目名称', accessor: 'name', width: 'font-bold text-gray-900 text-lg w-1/3' },
              { header: '完成时间', accessor: 'completionTime' },
              { header: '技艺种类', accessor: (item) => <span className="font-medium text-indigo-700">{item.mainCraft}</span> },
              { header: '关键特征', accessor: 'features' },
            ]}
            renderDetail={(item) => (
              <div className="space-y-8">
                <div className="w-full bg-gradient-to-br from-indigo-600 to-blue-700 p-12 rounded-3xl shadow-xl border border-indigo-500 relative overflow-hidden text-white">
                    <div className="absolute -bottom-10 -right-10 p-10 opacity-20 text-white transform rotate-[-15deg]">
                        <Building2 size={300} />
                    </div>
                    <div className="relative z-10">
                        <span className="bg-white/20 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 inline-block backdrop-blur-sm border border-white/20">Project Case Study</span>
                        <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
                        <p className="text-indigo-100 font-medium text-lg flex items-center gap-3">
                           <Clock size={20} /> {item.completionTime} 
                           <span className="w-1.5 h-1.5 bg-white rounded-full opacity-50"></span>
                           <LayoutTemplate size={20} /> {item.scale}
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                   <SectionCard title="项目概况" icon={<LayoutTemplate className="text-indigo-600" />} color="indigo">
                      <DetailRow label="完成时间" value={item.completionTime} />
                      <DetailRow label="项目规模" value={item.scale} />
                      <DetailRow label="营造技艺" value={item.mainCraft} />
                   </SectionCard>
                   
                   <SectionCard title="工艺细节" icon={<Hammer className="text-amber-600" />} color="amber">
                      <DetailRow label="工艺流程" value={item.process} />
                      <DetailRow label="关键特征" value={item.features} />
                      <DetailRow label="口述记录" value={item.oralRecord} />
                   </SectionCard>
                </div>
              </div>
            )}
          />
        );
      case 'techniques':
        return (
          <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 px-2 mb-4 border-l-4 border-rose-500 pl-4">
               <div>
                  <h2 className="text-4xl font-bold text-gray-900 tracking-tight">营造技艺</h2>
                  <p className="text-gray-500 mt-2 max-w-2xl font-medium">
                     收录了甘肃地区核心的传统建筑营造技艺，从选材、工具到制作流程的完整记录。
                  </p>
               </div>
               <div className="flex items-center gap-4">
                  <div className="bg-white px-5 py-2.5 rounded-full border border-gray-200 text-sm font-bold text-gray-600 shadow-sm">
                     收录 {techniques.length} 项技艺
                  </div>
                  <button 
                     onClick={() => { setEditingItem(null); setIsAddModalOpen(true); }}
                     className="px-5 py-2.5 bg-rose-600 text-white rounded-full text-sm font-bold shadow-lg shadow-rose-200 hover:bg-rose-700 transition-all flex items-center gap-2"
                  >
                     <PlusCircle size={18} />
                     补充技艺
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {techniques.map((tech) => (
                  <div key={tech.id} className="group relative h-64 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden bg-white border border-gray-100">
                     {/* Gradient Background */}
                     <div 
                        className={`absolute inset-0 bg-gradient-to-br ${getTechniqueGradient(tech.id)} opacity-90 transition-opacity group-hover:opacity-100 cursor-pointer`}
                        onClick={() => setSelectedTechnique(tech)}
                      ></div>
                     
                     {/* Watermark Icon */}
                     <div className="absolute -right-6 -bottom-6 text-white opacity-20 transform rotate-12 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                        <Hammer size={120} />
                     </div>

                     {/* Action Buttons for Techniques */}
                     <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleEdit(tech); }} 
                          className="p-2 bg-white/20 hover:bg-white text-white hover:text-blue-600 rounded-full backdrop-blur-sm transition-all shadow-sm"
                          title="修改"
                        >
                          <Pencil size={14} />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleDelete(tech.id); }} 
                          className="p-2 bg-white/20 hover:bg-red-500 text-white rounded-full backdrop-blur-sm transition-all shadow-sm"
                          title="删除"
                        >
                          <Trash2 size={14} />
                        </button>
                     </div>

                     {/* Content */}
                     <div 
                        className="relative z-10 h-full p-6 flex flex-col justify-between text-white cursor-pointer"
                        onClick={() => setSelectedTechnique(tech)}
                      >
                        <div className="flex justify-between items-start">
                           <span className="font-mono text-xs opacity-70 border border-white/30 px-2 py-0.5 rounded">TECH-{tech.id}</span>
                           <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-white group-hover:text-rose-600 transition-all">
                              <ArrowRight size={16} />
                           </div>
                        </div>

                        <div>
                           <h3 className="text-3xl font-bold mb-2 drop-shadow-md leading-tight">{tech.name}</h3>
                           <div className="h-1 w-12 bg-white/60 rounded-full mb-3"></div>
                           <p className="text-white/80 text-sm line-clamp-2 font-medium">
                              {(tech.materials || '').substring(0, 30) + '...'}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Technique Detail Modal */}
            {selectedTechnique && (
               <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                  <div 
                    className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" 
                    onClick={() => setSelectedTechnique(null)}
                  ></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden border border-white">
                     
                     <div className="flex justify-between items-center px-8 py-5 border-b border-gray-100 bg-white z-20 sticky top-0">
                        <h3 className="text-xl font-bold text-gray-900">技艺详解</h3>
                        <button 
                           onClick={() => setSelectedTechnique(null)}
                           className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900"
                        >
                           <X size={24} />
                        </button>
                     </div>

                     <div className="flex-1 overflow-y-auto custom-scrollbar p-8 sm:p-12">
                        {/* Hero Section */}
                        <div className="mb-10 flex flex-col items-start gap-6">
                           <div className={`w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg bg-gradient-to-br ${getTechniqueGradient(selectedTechnique.id)} text-white`}>
                              <Hammer size={48} />
                           </div>
                           <div>
                             <h1 className="text-5xl font-bold text-gray-900 mb-2">{selectedTechnique.name}</h1>
                             <p className="text-gray-500 font-mono text-sm font-bold tracking-wider">TECHNIQUE ID: {selectedTechnique.id}</p>
                           </div>

                           {selectedTechnique.rhyme && selectedTechnique.rhyme !== "无" && (
                              <div className="w-full bg-amber-50 p-8 rounded-2xl border border-amber-100 relative overflow-hidden shadow-sm">
                                 <h4 className="font-bold text-amber-800/60 text-xs uppercase tracking-widest mb-3">匠人口诀</h4>
                                 <p className="italic text-amber-900 text-2xl leading-relaxed">“{selectedTechnique.rhyme}”</p>
                              </div>
                           )}
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 gap-8">
                           <SectionCard title="材料与工具" icon={<PenTool className="text-purple-600" />} color="purple">
                              <div className="grid md:grid-cols-2 gap-8">
                                 <DetailRow label="选材讲究" value={selectedTechnique.materials} />
                                 <DetailRow label="使用工具" value={selectedTechnique.tools} />
                              </div>
                           </SectionCard>
                           
                           <SectionCard title="制作技艺" icon={<Layers className="text-indigo-600" />} color="indigo">
                              <DetailRow label="制作流程" value={selectedTechnique.process} />
                              <div className="mt-4 pt-4 border-t border-indigo-50">
                                 <DetailRow label="核心方法" value={selectedTechnique.method} />
                              </div>
                           </SectionCard>
                           
                           <SectionCard title="艺术特征" icon={<Award className="text-rose-600" />} color="rose">
                              <DetailRow label="表现题材" value={selectedTechnique.characteristics} />
                              <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                 <DetailRow label="最终成果" value={selectedTechnique.results} />
                              </div>
                           </SectionCard>
                        </div>
                        
                        <div className="h-10"></div>
                     </div>
                  </div>
               </div>
            )}
          </div>
        );
      default:
        return <Dashboard 
          onNavigate={handleNavigate} 
          craftsmenCount={craftsmen.length}
          teamsCount={teams.length}
          projectsCount={projects.length}
          techniquesCount={techniques.length}
          regionsCount={REGIONS_DB.length}
          craftsmenData={craftsmen}
        />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f3f4f6] font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background - Static Gradient Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-gray-50 to-gray-100">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-rose-100/40 via-transparent to-transparent"></div>
      </div>

      {/* Real-time Clock Widget */}
      <div className="fixed top-6 right-8 z-40 hidden lg:flex flex-col items-end pointer-events-none select-none">
         <div className="text-4xl font-bold text-gray-400 tracking-tighter">
            {currentTime.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
         </div>
         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
            {currentTime.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
         </div>
         <div className="mt-2 flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <Clock size={12} className="text-gray-500" />
            <span className="text-[10px] font-mono font-bold text-gray-600">
               {sessionDuration}
            </span>
         </div>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-80 h-full bg-white/90 backdrop-blur-2xl border-r border-gray-200 shadow-2xl z-20 relative">
        <div className="p-8 pb-6">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 text-white transform rotate-3">
               <Building2 size={22} />
             </div>
             <div className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full tracking-wider">DATABASE v5.0</div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight">
            传统建筑工匠<br/>与营造技艺数据库
          </h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 group border ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-200 border-transparent transform scale-[1.02]' 
                  : 'text-gray-500 hover:bg-white hover:text-indigo-600 hover:shadow-md border-transparent hover:border-gray-100'
              }`}
            >
              <div className={activeTab === item.id ? 'text-white' : 'text-gray-400 group-hover:text-indigo-500 transition-colors'}>
                {item.icon}
              </div>
              <span className="font-bold tracking-wide text-sm">{item.label}</span>
              {activeTab === item.id && <ArrowRight size={16} className="ml-auto opacity-50" />}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-gray-100 bg-gray-50/50">
           {/* Engineer Info moved here */}
           <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200/60">
             <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden border border-indigo-200 text-indigo-600">
                <User size={16} />
             </div>
             <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Full Stack Engineer</p>
                <p className="text-sm font-bold text-gray-800">Kong Lingchao</p>
             </div>
           </div>

           <div className="flex flex-col gap-1 text-[10px] font-medium text-gray-400">
             <p>© 2025 Traditional Architecture & Craftsmanship Database.</p>
             <p>Designed & Developed by Kong Lingchao.</p>
             <p>All Rights Reserved.</p>
             <div className="flex justify-between mt-2 pt-2 border-t border-gray-200/60">
               <span>Version</span>
               <span className="font-mono text-gray-600">v5.0</span>
             </div>
           </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-30 bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 py-3 flex justify-between items-center shadow-sm">
         <h1 className="text-lg font-bold text-gray-900">营造技艺数据库</h1>
         <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600 bg-gray-50 rounded-lg">
           {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
         </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-white pt-20 px-6 transition-opacity">
           <nav className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-lg font-medium shadow-sm border ${
                  activeTab === item.id 
                    ? 'bg-indigo-600 text-white border-transparent' 
                    : 'text-gray-600 bg-gray-50 border-gray-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
           </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 h-full overflow-hidden relative pt-16 md:pt-0 z-10">
        <div className="relative h-full overflow-y-auto p-4 md:p-10 lg:p-12 xl:p-16 custom-scrollbar scroll-smooth">
           <div className="max-w-[1800px] mx-auto min-h-full pb-20">
             {renderContent()}
           </div>
        </div>
      </main>

      {/* Add Data Modal - Placed at Root Level */}
      {isAddModalOpen && (
        <AddDataModal 
          type={activeTab as 'craftsmen' | 'teams' | 'projects' | 'techniques'} 
          initialData={editingItem}
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleSaveData}
        />
      )}
    </div>
  );
}

export default App;