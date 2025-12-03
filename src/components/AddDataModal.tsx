
import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

interface AddDataModalProps {
  type: 'craftsmen' | 'teams' | 'projects' | 'techniques';
  initialData?: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

export const AddDataModal: React.FC<AddDataModalProps> = ({ type, initialData, onClose, onSave }) => {
  const [formData, setFormData] = useState<any>({});

  // Initialize defaults to avoid undefined values which crash rendering
  const initializeDefaults = (currentType: string) => {
      const defaults: any = {};
      const fields = getFields(currentType);
      fields.forEach(f => defaults[f.key] = '');
      return defaults;
  }

  // Populate form if editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      // Reset with empty strings
      setFormData(initializeDefaults(type));
    }
  }, [initialData, type]);

  const getFields = (currentType: string) => {
    switch (currentType) {
      case 'craftsmen':
        return [
          { key: 'name', label: '姓名', type: 'text', width: 'w-1/3' },
          { key: 'gender', label: '性别', type: 'select', options: ['男', '女'], width: 'w-1/3' },
          { key: 'age', label: '年龄', type: 'number', width: 'w-1/3' },
          { key: 'birthDate', label: '出生年月', type: 'text', width: 'w-1/2' },
          { key: 'nativePlace', label: '籍贯', type: 'text', width: 'w-1/2' },
          { key: 'location', label: '日常工作地点', type: 'text', width: 'w-1/2' },
          { key: 'trade', label: '工匠类别', type: 'text', width: 'w-1/2' },
          { key: 'experience', label: '从业时间', type: 'text', width: 'w-1/2' },
          { key: 'level', label: '传承级别', type: 'select', options: ['国家级非遗传承人', '省级非遗传承人', '市级非遗传承人', '县级非遗传承人', '无'], width: 'w-1/2' },
          { key: 'title', label: '荣誉称号', type: 'text', width: 'w-full' },
          { key: 'heritageProject', label: '非遗传承项目名称', type: 'text', width: 'w-full' },
          { key: 'specialty', label: '专长', type: 'textarea', width: 'w-full' },
          { key: 'learningMethod', label: '学习方式', type: 'text', width: 'w-1/2' },
          { key: 'education', label: '书籍文献', type: 'text', width: 'w-1/2' },
          { key: 'hasApprentices', label: '是否收徒', type: 'select', options: ['是', '否'], width: 'w-1/2' },
          { key: 'apprentices', label: '徒弟数量', type: 'text', width: 'w-1/2' },
          { key: 'companyName', label: '成立公司名称', type: 'text', width: 'w-full' },
          { key: 'achievements', label: '个人成果', type: 'textarea', width: 'w-full' },
          { key: 'works', label: '代表作品', type: 'textarea', width: 'w-full' },
          { key: 'notes', label: '备注', type: 'textarea', width: 'w-full' },
        ];
      case 'teams':
        return [
          { key: 'name', label: '工匠组织名称', type: 'text', width: 'w-full' },
          { key: 'type', label: '组织性质', type: 'text', width: 'w-1/2' },
          { key: 'size', label: '员工规模', type: 'text', width: 'w-1/2' },
          { key: 'established', label: '成立时间', type: 'text', width: 'w-1/2' },
          { key: 'location', label: '日常工作地点', type: 'text', width: 'w-1/2' },
          { key: 'trades', label: '工匠类别构成', type: 'text', width: 'w-full' },
          { key: 'specialty', label: '专长', type: 'textarea', width: 'w-full' },
          { key: 'awards', label: '主要荣誉级别', type: 'text', width: 'w-full' },
          { key: 'techInnovation', label: '团队技术创新', type: 'textarea', width: 'w-full' },
          { key: 'heritageBase', label: '是否有培训组织', type: 'text', width: 'w-1/2' },
          { key: 'masters', label: '匠师数量', type: 'number', width: 'w-1/2' },
          { key: 'achievements', label: '企业业绩成果', type: 'textarea', width: 'w-full' },
        ];
      case 'projects':
        return [
          { key: 'name', label: '项目名称', type: 'text', width: 'w-full' },
          { key: 'completionTime', label: '完成时间', type: 'text', width: 'w-1/2' },
          { key: 'scale', label: '项目规模', type: 'text', width: 'w-1/2' },
          { key: 'mainCraft', label: '项目主要工匠营造技艺种类', type: 'text', width: 'w-full' },
          { key: 'process', label: '加工工艺流程', type: 'textarea', width: 'w-full' },
          { key: 'features', label: '关键工艺特征', type: 'textarea', width: 'w-full' },
          { key: 'oralRecord', label: '口述记录', type: 'text', width: 'w-full' },
          { key: 'notes', label: '备注', type: 'textarea', width: 'w-full' },
        ];
      case 'techniques':
        return [
          { key: 'name', label: '技艺名称', type: 'text', width: 'w-full' },
          { key: 'materials', label: '选材讲究', type: 'textarea', width: 'w-full' },
          { key: 'tools', label: '使用工具', type: 'text', width: 'w-full' },
          { key: 'process', label: '制作流程', type: 'textarea', width: 'w-full' },
          { key: 'method', label: '制作方法', type: 'textarea', width: 'w-full' },
          { key: 'rhyme', label: '制作口诀', type: 'textarea', width: 'w-full' },
          { key: 'characteristics', label: '表现题材', type: 'text', width: 'w-full' },
          { key: 'results', label: '成果特征', type: 'textarea', width: 'w-full' },
          { key: 'oral', label: '口述', type: 'text', width: 'w-full' },
          { key: 'notes', label: '备注', type: 'textarea', width: 'w-full' },
        ];
      default:
        return [];
    }
  };

  const getTitle = () => {
    const action = initialData ? '修改' : '新增';
    switch(type) {
      case 'craftsmen': return `${action}工匠档案`;
      case 'teams': return `${action}营造团队`;
      case 'projects': return `${action}项目案例`;
      case 'techniques': return `${action}营造技艺`;
      default: return `${action}数据`;
    }
  };

  const handleChange = (key: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // If editing, preserve ID. If adding, generate new ID.
    // Ensure we merge with defaults so no field is undefined
    const defaults = initializeDefaults(type);
    const mergedData = { ...defaults, ...formData };
    
    const newItem = {
      ...mergedData,
      id: initialData ? initialData.id : Date.now()
    };
    onSave(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center px-8 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <h3 className="text-xl font-serif font-bold text-gray-900">{getTitle()}</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 overflow-y-auto custom-scrollbar flex-1">
          <div className="flex flex-wrap -mx-3">
            {getFields(type).map((field) => (
              <div key={field.key} className={`px-3 mb-6 ${field.width || 'w-full'}`}>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 h-24 resize-none transition-all"
                    placeholder={`请输入${field.label}`}
                    value={formData[field.key] || ''}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                  />
                ) : field.type === 'select' ? (
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 transition-all"
                      value={formData[field.key] || ''}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                    >
                      <option value="">请选择</option>
                      {field.options?.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                ) : (
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 transition-all"
                    type={field.type}
                    placeholder={`请输入${field.label}`}
                    value={formData[field.key] || ''}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </form>

        <div className="px-8 py-5 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
          <button 
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg text-gray-600 font-medium hover:bg-gray-200 transition-colors"
          >
            取消
          </button>
          <button 
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all flex items-center gap-2"
          >
            <Save size={18} />
            保存档案
          </button>
        </div>
      </div>
    </div>
  );
};
