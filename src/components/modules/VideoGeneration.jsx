import React, { useState } from 'react';
import Select from '../ui/Select';

const VideoGeneration = () => {
  const [activeTab, setActiveTab] = useState('text-to-video');
  const [formData, setFormData] = useState({
    prompt: '',
    model: 'Veo 3.1',
    duration: '8 секунд'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGenerate = () => {
    console.log('Параметры генерации видео:', { ...formData, mode: activeTab });
  };

  const modelOptions = [
    { value: 'Veo 3.1', label: 'Veo 3.1' },
    { value: 'Kling 3.0', label: 'Kling 3.0' },
    { value: 'Runway Gen-4.5', label: 'Runway Gen-4.5' }
  ];

  const durationOptions = [
    { value: '4 секунды', label: '4 секунды' },
    { value: '8 секунд', label: '8 секунд' },
    { value: '15 секунд', label: '15 секунд' }
  ];

  const labelClass = 'block text-sm font-medium text-violet-200/70 mb-2';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Генерация видео</h2>
        <p className="text-violet-200/70">Создайте видео из сценария</p>
      </div>
      
      <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 space-y-5">
        <div className="flex space-x-2 p-1 bg-neutral-900 rounded-xl">
          <button
            onClick={() => setActiveTab('text-to-video')}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-2xl transition-all duration-200 ${
              activeTab === 'text-to-video'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Text to Video
          </button>
          <button
            onClick={() => setActiveTab('image-to-video')}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-2xl transition-all duration-200 ${
              activeTab === 'image-to-video'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Image to Video
          </button>
        </div>

        {activeTab === 'text-to-video' ? (
          <div>
            <label className={labelClass}>Промпт</label>
            <textarea
              name="prompt"
              rows={5}
              placeholder="Текст будет передан провайдеру без изменений"
              value={formData.prompt}
              onChange={handleChange}
              className="w-full input-field px-4 py-3 resize-none"
            />
          </div>
        ) : (
          <div>
            <label className={labelClass}>Загрузите изображение</label>
            <div className="w-full h-48 bg-neutral-900 border-2 border-dashed border-neutral-700 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors duration-200">
              <svg className="w-12 h-12 text-neutral-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-neutral-400 text-sm">Перетащите изображение сюда или выберите файл</p>
              <p className="text-neutral-500 text-xs mt-1">Поддержка: JPEG, PNG, WEBP</p>
            </div>
          </div>
        )}

        <div>
          <label className={labelClass}>Модель</label>
          <Select
            name="model"
            value={formData.model}
            onChange={handleChange}
            options={modelOptions}
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

        <button
          onClick={handleGenerate}
          className="w-full px-6 py-4 bg-gradient-to-r from-indigo-900 to-violet-400 hover:from-indigo-800 hover:to-violet-300 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-violet-500/40"
        >
          Сгенерировать
        </button>
      </div>

      <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
        <label className={labelClass}>Превью</label>
        <div className="w-full h-64 bg-neutral-900 border border-neutral-700 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-neutral-800 rounded-full flex items-center justify-center border border-neutral-700">
              <svg className="w-8 h-8 text-neutral-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-neutral-500">Здесь появится готовое видео</p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
        <h3 className="text-lg font-semibold text-white mb-4">Сгенерированные видео</h3>
        <div className="text-center py-8 text-neutral-500">
          <p>Пока нет сгенерированных видео</p>
        </div>
      </div>
    </div>
  );
};

export default VideoGeneration;
