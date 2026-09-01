import React, { useState } from 'react';
import Select from '../ui/Select';

const ScriptProduction = () => {
  const MAX_CHARS = 2000;
  const [formData, setFormData] = useState({
    episodeTopic: '',
    scriptLength: 'Средний (3-5 мин)',
    presentationStyle: 'Документальный'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGenerate = () => {
    console.log('Параметры генерации сценария:', formData);
  };

  const handleNext = () => {
    console.log('Переход к генерации видео');
  };

  const charsLeft = MAX_CHARS - formData.episodeTopic.length;

  const scriptLengthOptions = [
    { value: 'Короткий (1-2 мин)', label: 'Короткий (1-2 мин)' },
    { value: 'Средний (3-5 мин)', label: 'Средний (3-5 мин)' },
    { value: 'Длинный (5+ мин)', label: 'Длинный (5+ мин)' }
  ];

  const presentationStyleOptions = [
    { value: 'Документальный', label: 'Документальный' },
    { value: 'Разговорный', label: 'Разговорный' },
    { value: 'Драматичный', label: 'Драматичный' },
    { value: 'Юмористический', label: 'Юмористический' }
  ];

  const labelClass = 'block text-sm font-medium text-violet-200/70 mb-2';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Сценарий / Продюсирование</h2>
        <p className="text-violet-200/70">Напишите или сгенерируйте сценарий для вашего видео</p>
      </div>
      
      <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 space-y-5">
        <div>
          <label className={labelClass}>Тема эпизода</label>
          <div className="relative">
            <textarea
              name="episodeTopic"
              rows={4}
              maxLength={MAX_CHARS}
              placeholder="Опишите тему, ключевые факты и желаемый акцент"
              value={formData.episodeTopic}
              onChange={handleChange}
              className="w-full input-field px-4 py-3 resize-none"
            />
            <span className="absolute bottom-3 right-3 text-xs text-neutral-500">{charsLeft} символов осталось</span>
          </div>
        </div>

        <div>
          <label className={labelClass}>Длина сценария</label>
          <Select
            name="scriptLength"
            value={formData.scriptLength}
            onChange={handleChange}
            options={scriptLengthOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        <div>
          <label className={labelClass}>Стиль подачи</label>
          <Select
            name="presentationStyle"
            value={formData.presentationStyle}
            onChange={handleChange}
            options={presentationStyleOptions}
            className="w-full input-field px-4 py-3"
          />
        </div>

        <button
          onClick={handleGenerate}
          className="w-full px-6 py-4 bg-gradient-to-r from-indigo-900 to-violet-400 hover:from-indigo-800 hover:to-violet-300 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-violet-500/40"
        >
          Сгенерировать сценарий
        </button>

        <div>
          <label className={labelClass}>Результат</label>
          <textarea
            readOnly
            placeholder="Здесь появится сгенерированный сценарий"
            rows={10}
            className="w-full input-field px-4 py-3 text-neutral-400 resize-none"
          />
        </div>

        <button
          onClick={handleNext}
          className="w-full px-6 py-4 bg-gradient-to-r from-indigo-900 to-violet-400 hover:from-indigo-800 hover:to-violet-300 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-violet-500/40"
        >
          Далее: Генерация видео
        </button>
      </div>
    </div>
  );
};

export default ScriptProduction;
