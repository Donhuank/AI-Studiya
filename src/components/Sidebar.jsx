import React from 'react';

const Sidebar = ({ activeModule, onModuleChange }) => {
  const modules = [
    { id: 'data-collection', name: 'Новый проект' },
    { id: 'script-production', name: 'Сценарий / Продюсирование' },
    { id: 'video-generation', name: 'Генерация видео' }
  ];

  return (
    <aside className="flex flex-col w-80 h-full bg-neutral-950/80 border-r-2 border-neutral-600 shadow-[4px_0_15px_rgba(0,0,0,0.5)] p-4 gap-6">
      {/* Логотип + название + подзаголовок — всё в одной группе, без фоновых блоков */}
      <div className="flex items-center gap-[18px] w-full pl-0 pr-[20px]">
        {/* Логотип "AS" — полностью прозрачный фон */}
        <span className="text-xl font-bold relative flex-shrink-0 w-[52px] h-[52px] flex items-center justify-center" style={{
          background: 'linear-gradient(135deg, #f9a8d4 0%, #f472b6 15%, #e879f9 30%, #c084fc 45%, #a78bfa 55%, #818cf8 70%, #e879f9 85%, #f472b6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'brightness(1.3)',
          WebkitTextStroke: '2px #8b5cf6',
          textShadow: '0 0 8px rgba(99, 102, 241, 0.6), 0 0 14px rgba(168, 85, 247, 0.5)',
          border: '1.5px solid #8b5cf6',
          borderRadius: '8px',
          boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)'
        }}>AS</span>
        {/* Название + подзаголовок — вертикально, вплотную, сдвинуто влево */}
        <div className="flex flex-col">
          {/* Название "Aeon Studio" — без фона, без рамки */}
          <h2 className="relative whitespace-nowrap leading-none" style={{
            fontFamily: '"Baloo 2", "Fredoka", sans-serif',
            fontWeight: 900,
            fontSize: '2.2rem',
            letterSpacing: '0.3px',
            color: '#b300ff',
            WebkitTextStroke: '1px #b300ff',
            textShadow: '0 0 12px rgba(179, 0, 255, 0.9), 0 0 24px rgba(179, 0, 255, 0.7), 0 0 40px rgba(179, 0, 255, 0.4)'
          }}>
            Aeon Studio
          </h2>
          {/* Подзаголовок — вплотную под названием */}
          <p className="text-sm font-medium bg-gradient-to-r from-pink-400/60 via-fuchsia-400/60 to-indigo-400/60 bg-clip-text text-transparent leading-none mt-1.5">Видео-студия ai</p>
        </div>
      </div>

      <nav className="flex flex-col space-y-2 mt-4 pr-0">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => onModuleChange(module.id)}
            className={`px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
              activeModule === module.id
                ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg hover:shadow-pink-500/40'
                : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
            }`}
          >
            {module.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
