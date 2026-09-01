import React, { useState } from 'react';
import Select from '../ui/Select';

const DataCollection = () => {
  const MAX_CHARS = 2000;
  const [formData, setFormData] = useState({
    topic: '',
    format: 'Long',
    direction: 'Универсальный',
    historicalAccuracy: false,
    materialProfile: 'Выкл',
    visualStyle: 'Реализм',
    cover: 'Внешняя (без текста)',
    language: 'Русский',
    duration: '5-7 минут',
    soundtrack: '',
    channel: 'Канал 1',
    launchMode: 'Полный запуск'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Данные формы:', formData);
  };

  const charsLeft = MAX_CHARS - formData.topic.length;

  const formatOptions = [
    { value: 'Long', label: 'Long' },
    { value: 'Short', label: 'Short' }
  ];

  const directionOptions = [
    { value: 'История', label: 'История' },
    { value: 'Наука', label: 'Наука' },
    { value: 'Технологии', label: 'Технологии' },
    { value: 'Универсальный', label: 'Универсальный' }
  ];

  const materialProfileOptions = [
    { value: 'Выкл', label: 'Выкл' },
    { value: 'Включен', label: 'Включен' }
  ];

  const visualStyleOptions = [
    { value: 'Реализм', label: 'Реализм' },
    { value: 'Нуар', label: 'Нуар' },
    { value: 'Векторная', label: 'Векторная' },
    { value: '3D-анимация', label: '3D-анимация' },
    { value: 'Кинематографичный', label: 'Кинематографичный' }
  ];

  const coverOptions = [
    { value: 'Внешняя (без текста)', label: 'Внешняя (без текста)' },
    { value: 'С заголовком', label: 'С заголовком' },
    { value: 'Кастомная', label: 'Кастомная' }
  ];

  const languageOptions = [
    { value: 'Русский', label: 'Русский' },
    { value: 'Английский', label: 'Английский' },
    { value: 'Украинский', label: 'Украинский' }
  ];

  const durationOptions = [
    { value: '2 минуты', label: '2 минуты' },
    { value: '5-7 минут', label: '5-7 минут' },
    { value: '8-10 минут', label: '8-10 минут' }
  ];

  const channelOptions = [
    { value: 'Канал 1', label: 'Канал 1' },
    { value: 'Канал 2', label: 'Канал 2' },
    { value: 'Добавить канал', label: 'Добавить канал' }
  ];

  const launchModeOptions = [
    { value: 'Полный запуск', label: 'Полный запуск' },
    { value: 'Только сценарий', label: 'Только сценарий' },
    { value: 'Только видео', label: 'Только видео' }
  ];

  // Приглушённый сиренево-серый для лейблов
  const labelClass = 'block text-sm font-medium text-violet-200/70 mb-2';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Новый проект</h2>
        <p className="text-violet-200/70">Настройте параметры для генерации видео</p>
      </div>
      
      <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 space-y-5">
        <div>
          <label className={labelClass}>Тема</label>
          <div className="relative">
            <textarea
              name="topic"
              rows={4}
              maxLength={MAX_CHARS}
              placeholder="Опишите тему, ключевые факты и желаемый акцент видео"
              value={formData.topic}
              onChange={handleChange}
              className="w-full input-field px-4 py-3 resize-none"
            />
            <span className="absolute bottom-3 right-3 text-xs text-neutral-500">{charsLeft} символов осталось</span>
          </div>
        </div>

        <div>
          <label className={labelClass}>Формат</label>
          <Select
            name="format"
            value={formData.format}
            onChange={handleChange}
            options={formatOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        <div>
          <label className={labelClass}>Направление</label>
          <Select
            name="direction"
            value={formData.direction}
            onChange={handleChange}
            options={directionOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        {formData.direction === 'История' && (
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="historicalAccuracy"
              id="historicalAccuracy"
              checked={formData.historicalAccuracy}
              onChange={handleChange}
              className="w-5 h-5 rounded-xl border-neutral-600 bg-neutral-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer"
            />
            <label htmlFor="historicalAccuracy" className="text-sm font-medium text-violet-200/70 cursor-pointer">Историческая точность</label>
          </div>
        )}

        <div>
          <label className={labelClass}>Профиль материалов</label>
          <Select
            name="materialProfile"
            value={formData.materialProfile}
            onChange={handleChange}
            options={materialProfileOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        <div>
          <label className={labelClass}>Визуальный стиль</label>
          <Select
            name="visualStyle"
            value={formData.visualStyle}
            onChange={handleChange}
            options={visualStyleOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        <div>
          <label className={labelClass}>Обложка</label>
          <Select
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            options={coverOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        <div>
          <label className={labelClass}>Язык</label>
          <Select
            name="language"
            value={formData.language}
            onChange={handleChange}
            options={languageOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        <div>
          <label className={labelClass}>Длительность</label>
          <Select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            options={durationOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        <div>
          <label className={labelClass}>Саундтрек</label>
          <div className="flex gap-3">
            <input
              type="text"
              name="soundtrack"
              placeholder="Саундтреки не добавлены"
              value={formData.soundtrack}
              onChange={handleChange}
              className="flex-1 input-field px-4 py-3"
            />
            <button className="px-5 py-3 bg-gradient-to-r from-indigo-900 to-violet-400 hover:from-indigo-800 hover:to-violet-300 text-white font-medium rounded-2xl transition-all duration-200 shadow-lg hover:shadow-violet-500/40 whitespace-nowrap">Добавить файл</button>
          </div>
        </div>

        <div>
          <label className={labelClass}>Канал</label>
          <Select
            name="channel"
            value={formData.channel}
            onChange={handleChange}
            options={channelOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        <div>
          <label className={labelClass}>Режим запуска</label>
          <Select
            name="launchMode"
            value={formData.launchMode}
            onChange={handleChange}
            options={launchModeOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full px-6 py-4 bg-gradient-to-r from-indigo-900 to-violet-400 hover:from-indigo-800 hover:to-violet-300 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-violet-500/40"
        >
          Создать задание
        </button>

        {/* Блок хода выполнения */}
        <div className="pt-4 border-t border-neutral-700">
          <h3 className="text-sm font-medium text-violet-200/70 mb-3">Ход выполнения</h3>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
            <span className="text-sm text-neutral-400">Ожидает запуска</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCollection;
