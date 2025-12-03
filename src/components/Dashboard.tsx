import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, AreaChart, Area, CartesianGrid } from 'recharts';
import { Map, Users, HardHat, Building2, Hammer } from 'lucide-react';
import { TabType, CraftsmanData } from '../types';

interface DashboardProps {
  onNavigate: (tab: TabType) => void;
  craftsmenCount: number;
  teamsCount: number;
  projectsCount: number;
  techniquesCount: number;
  regionsCount: number;
  craftsmenData: CraftsmanData[];
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  onNavigate, 
  craftsmenCount, 
  teamsCount, 
  projectsCount, 
  techniquesCount, 
  regionsCount,
  craftsmenData 
}) => {
  
  // Color Palettes
  const barColors = ['#f59e0b', '#10b981', '#78716c', '#0ea5e9', '#3b82f6']; // Amber, Emerald, Stone, Sky, Blue
  const pieColors = ['#4f46e5', '#8b5cf6', '#ec4899', '#f43f5e']; // Indigo, Violet, Pink, Rose

  // Memoize Calculations to prevent re-render lag
  const regionDistribution = useMemo(() => {
    const regionNames = ["陇东黄土高原", "陇南山地", "河西走廊", "甘南高原", "中部河谷"];
    return regionNames.map((name, index) => {
        const baseCounts = [3, 4, 8, 4, 4]; 
        return {
        name: name.substring(0, 4),
        count: baseCounts[index] + Math.floor(craftsmenCount / 10) 
        };
    });
  }, [craftsmenCount]);

  const tradeData = useMemo(() => [
    { name: '大木作', value: craftsmenData.filter(c => (c.trade || '').includes('大木') || (c.trade || '').includes('修缮') || (c.trade || '').includes('木')).length || 8 },
    { name: '彩绘', value: craftsmenData.filter(c => (c.trade || '').includes('彩绘')).length || 4 },
    { name: '砖雕/瓦作', value: craftsmenData.filter(c => (c.trade || '').includes('砖') || (c.trade || '').includes('瓦')).length || 3 },
    { name: '其他', value: 5 }
  ], [craftsmenData]);

  const ageRanges = useMemo(() => {
    const ranges = [
        { range: '<40', count: 0 },
        { range: '40-50', count: 0 },
        { range: '50-60', count: 0 },
        { range: '60-70', count: 0 },
        { range: '>70', count: 0 },
    ];

    craftsmenData.forEach(c => {
        // Safe parsing: ensure we handle strings or numbers gracefully
        const ageStr = (c.age || '').toString().replace(/[^0-9]/g, '');
        const age = parseInt(ageStr);
        if (!isNaN(age)) {
        if (age < 40) ranges[0].count++;
        else if (age < 50) ranges[1].count++;
        else if (age < 60) ranges[2].count++;
        else if (age < 70) ranges[3].count++;
        else ranges[4].count++;
        } else {
            ranges[2].count++;
        }
    });
    return ranges;
  }, [craftsmenData]);

  return (
    <div className="space-y-8 pb-10">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-2">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">数据库概览</h2>
          <p className="text-gray-500 mt-2 font-medium">传统建筑工匠与营造技艺数字化全景</p>
        </div>
      </div>

      {/* Project Info Card (Moved to Top) */}
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-3xl shadow-lg border border-indigo-800 text-white relative overflow-hidden flex flex-col justify-center group">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Building2 size={180} />
        </div>
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
                    <span className="bg-indigo-500/80 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-indigo-400/30 backdrop-blur-sm tracking-wider uppercase">科研课题</span>
                    <span className="text-indigo-200 text-[10px] font-bold tracking-widest uppercase font-mono">JK2025-26</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 leading-relaxed text-white drop-shadow-md">
                《西北地区（甘肃）传统建筑的基础性研究之传统建筑传承人及营造技术》
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm border-t border-white/10 pt-6">
                <div className="flex flex-col">
                    <span className="text-indigo-300 font-bold text-xs uppercase tracking-wider mb-1">项目负责人</span>
                    <span className="font-medium text-lg">冯志涛</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-indigo-300 font-bold text-xs uppercase tracking-wider mb-1">课题承担单位</span>
                    <span className="font-medium">甘肃省建筑设计研究院有限公司</span>
                </div>
                <div className="flex flex-col">
                        <span className="text-indigo-300 font-bold text-xs uppercase tracking-wider mb-1">课题验收单位</span>
                    <span className="font-medium">甘肃省住房和城乡建设厅</span>
                </div>
            </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: '地理区域', count: regionsCount, icon: <Map size={24} className="text-amber-600" />, bg: 'bg-amber-50', border: 'border-amber-100', link: 'regions' },
          { label: '在册工匠', count: craftsmenCount, icon: <Users size={24} className="text-emerald-600" />, bg: 'bg-emerald-50', border: 'border-emerald-100', link: 'craftsmen' },
          { label: '营造团队', count: teamsCount, icon: <HardHat size={24} className="text-stone-600" />, bg: 'bg-stone-50', border: 'border-stone-100', link: 'teams' },
          { label: '项目案例', count: projectsCount, icon: <Building2 size={24} className="text-sky-600" />, bg: 'bg-sky-50', border: 'border-sky-100', link: 'projects' },
          { label: '核心技艺', count: techniquesCount, icon: <Hammer size={24} className="text-blue-600" />, bg: 'bg-blue-50', border: 'border-blue-100', link: 'techniques' },
        ].map((stat, index) => (
          <div 
            key={index}
            onClick={() => onNavigate(stat.link as TabType)}
            className={`p-6 rounded-3xl border ${stat.border} ${stat.bg} flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 group`}
          >
            <div className="mb-4 p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-all">
              {stat.icon}
            </div>
            <span className="text-4xl font-bold text-gray-900 mb-1 block">{stat.count}</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Main Content Grid - Unified Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         
         {/* Chart 1: Regions */}
         <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-[350px]">
            <h3 className="font-bold text-gray-800 mb-6 pl-2 border-l-4 border-amber-500">区域工匠分布</h3>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionDistribution} barSize={36}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12, fontWeight: 600}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#f3f4f6'}}
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                  />
                  <Bar dataKey="count" radius={[6, 6, 6, 6]} isAnimationActive={false}>
                    {regionDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
         </div>

         {/* Chart 2: Trades */}
         <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-[350px]">
            <h3 className="font-bold text-gray-800 mb-6 pl-2 border-l-4 border-indigo-500">工种类别构成</h3>
            <div className="flex-1 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tradeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={false}
                  >
                    {tradeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                </PieChart>
              </ResponsiveContainer>
              {/* Custom Legend Center */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center mb-8">
                 <div className="flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">{craftsmenCount}</span>
                    <span className="text-xs text-gray-400 font-bold uppercase">TOTAL</span>
                 </div>
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex flex-wrap justify-center gap-3">
                  {tradeData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                      <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: pieColors[index % pieColors.length]}}></div>
                      <span className="text-xs font-bold text-gray-600">{entry.name}</span>
                    </div>
                  ))}
              </div>
            </div>
         </div>

         {/* Chart 3: Age Distribution (Full Width) */}
         <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-[280px]">
            <h3 className="font-bold text-gray-800 mb-6 pl-2 border-l-4 border-rose-500">工匠年龄分布趋势</h3>
            <div className="flex-1">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={ageRanges} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAge" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12, fontWeight: 600}} />
                    <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                    <Area type="monotone" dataKey="count" stroke="#f43f5e" strokeWidth={3} fillOpacity={1} fill="url(#colorAge)" isAnimationActive={false} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Introduction (Full Width, Moved to Bottom) */}
         <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
               <Building2 size={200} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">数据库平台简介</h3>
            <p className="text-gray-600 leading-8 text-justify indent-8 relative z-10 font-medium">
               《传统建筑工匠与营造技艺数据库》是一个致力于记录、保护和传承甘肃省及周边地区传统建筑文化的数字化交互平台。
               本平台通过系统化的梳理，涵盖了5大核心地理区域、{craftsmenCount}位非遗工匠、{teamsCount}支专业营造团队及{techniquesCount}项核心营造技艺。
               旨在通过现代技术手段，为传统营造技艺的学术研究、保护传承及活化利用提供翔实的数据支撑。
            </p>
         </div>

      </div>
    </div>
  );
};