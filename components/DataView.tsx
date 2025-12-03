import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Plus, Pencil, Trash2 } from 'lucide-react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  width?: string;
}

interface DataViewProps<T> {
  data: T[];
  columns: Column<T>[];
  title: string;
  searchKeys: (keyof T)[];
  renderDetail: (item: T) => React.ReactNode;
  onAdd?: () => void;
  onEdit?: (item: T) => void;
  onDelete?: (id: string | number) => void;
  protectSystemData?: boolean; // New prop to restrict deletion of system data
}

// Exported Helper Components for use in App.tsx
export const SectionCard = ({ title, children, icon, color = "gray", className = "" }: any) => (
  <div className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    <div className={`flex items-center gap-3 mb-6 border-b border-gray-100 pb-4`}>
      <div className={`p-2 rounded-xl bg-${color}-50 text-${color}-600`}>
         {icon}
      </div>
      <h3 className="font-bold text-gray-900 font-serif text-xl tracking-wide">{title}</h3>
    </div>
    <div className="space-y-5">
      {children}
    </div>
  </div>
);

export const DetailRow = ({ label, value }: any) => (
  <div className="group">
    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">{label}</span>
    <div className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap font-medium">
      {value && value !== "" && value !== "/" ? value : <span className="text-gray-300 italic font-light text-sm">暂无记录</span>}
    </div>
  </div>
);

export const InfoBadge = ({ label, value, icon }: any) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
     <div className="text-gray-400 mb-2">{icon}</div>
     <span className="text-[10px] text-gray-400 mb-1 font-bold uppercase tracking-widest">{label}</span>
     <span className="font-bold text-gray-900 text-lg font-serif">{value || '-'}</span>
  </div>
);

export function DataView<T extends { id: string | number }>({ 
  data, 
  columns, 
  title,
  searchKeys,
  renderDetail,
  onAdd,
  onEdit,
  onDelete,
  protectSystemData = false
}: DataViewProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  // Performance Optimization: Memoize filtering logic
  const filteredData = useMemo(() => {
    return data.filter(item => {
      if (!searchTerm) return true;
      const lowerTerm = searchTerm.toLowerCase();
      return searchKeys.some(key => {
        const val = item[key];
        if (typeof val === 'string') return val.toLowerCase().includes(lowerTerm);
        if (typeof val === 'number') return val.toString().includes(lowerTerm);
        return false;
      });
    });
  }, [data, searchTerm, searchKeys]);

  return (
    <div className="h-full flex flex-col space-y-6">
      {/* Toolbar - Colorful & Functional */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight pl-2 border-l-4 border-indigo-600">{title}</h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all shadow-sm font-medium text-sm"
              placeholder={`搜索 ${filteredData.length} 条记录...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {onAdd && (
            <button 
              onClick={onAdd}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all active:scale-95 whitespace-nowrap"
            >
              <Plus size={18} />
              补充数据
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area - Clean Table */}
      <div className="flex-1 overflow-hidden relative rounded-3xl border border-gray-100 shadow-lg bg-white flex flex-col">
        <div className="overflow-x-auto overflow-y-auto h-full custom-scrollbar p-1">
          <table className="min-w-full divide-y divide-gray-100 border-collapse">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className={`px-8 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-widest ${col.width || ''}`}
                  >
                    {col.header}
                  </th>
                ))}
                <th className="px-8 py-5 w-64 text-center text-xs font-bold text-gray-500 uppercase tracking-widest">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-50">
              {filteredData.map((item, index) => {
                // Strict check: IDs 1-100 are system data. Anything else is user data.
                const idNum = Number(item.id);
                const isSystemData = !isNaN(idNum) && idNum <= 100;
                
                // Allow delete if protection is off OR if item is NOT system data
                const canDelete = onDelete && (!protectSystemData || !isSystemData);

                return (
                  <tr 
                    key={item.id} 
                    className={`group transition-all duration-200 hover:bg-indigo-50/50`}
                  >
                    {columns.map((col, idx) => {
                      const isNameColumn = col.header.includes('姓名') || col.header.includes('名称') || col.header.includes('项目');
                      const content = typeof col.accessor === 'function' ? col.accessor(item) : String(item[col.accessor]);
                      
                      return (
                        <td 
                          key={idx} 
                          className={`px-8 py-5 whitespace-nowrap text-sm text-gray-700 font-medium ${isNameColumn ? 'cursor-pointer' : ''}`}
                          onClick={isNameColumn ? () => setSelectedItem(item) : undefined}
                        >
                           {isNameColumn ? (
                             <span className="text-gray-900 group-hover:text-indigo-700 transition-colors pb-0.5 relative">
                               {content}
                             </span>
                           ) : content}
                        </td>
                      );
                    })}
                    <td className="px-8 py-5 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <button 
                          onClick={() => setSelectedItem(item)}
                          className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors border border-transparent shadow-sm"
                          title="查看详情"
                        >
                          <ArrowRight size={16} />
                        </button>
                        
                        {onEdit && (
                          <button 
                            onClick={() => onEdit(item)}
                            className="flex items-center gap-1 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors border border-transparent shadow-sm font-bold text-xs"
                            title="修改信息"
                          >
                            <Pencil size={14} /> 修改
                          </button>
                        )}

                        {canDelete ? (
                          <button 
                            onClick={() => onDelete(item.id)}
                            className="flex items-center gap-1 px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors border border-transparent shadow-sm font-bold text-xs"
                            title="删除数据"
                          >
                            <Trash2 size={14} /> 删除
                          </button>
                        ) : (
                          // Disabled visual state if protection is on and item is system data
                          onDelete && (
                            <span className="flex items-center gap-1 px-3 py-2 text-gray-300 cursor-not-allowed font-bold text-xs" title="系统数据不可删除">
                               <Trash2 size={14} /> 锁定
                            </span>
                          )
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={columns.length + 1} className="px-6 py-24 text-center text-gray-500">
                    <div className="flex flex-col items-center">
                      <Search size={48} className="text-gray-300 mb-4" />
                      <p className="text-lg font-medium">无匹配数据</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-md" 
            onClick={() => setSelectedItem(null)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden border border-gray-100">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-10 py-6 border-b border-gray-100 bg-white z-20 sticky top-0">
               <div className="flex items-center gap-3">
                 <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                 <h3 className="text-2xl font-serif font-bold text-gray-900 tracking-wide">档案详情</h3>
               </div>
               <button 
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-900"
              >
                <X size={28} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-white p-10 sm:p-14">
              {renderDetail(selectedItem)}
              <div className="h-16"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}