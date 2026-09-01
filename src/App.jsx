import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import DataCollection from './components/modules/DataCollection.jsx';
import ScriptProduction from './components/modules/ScriptProduction.jsx';
import VideoGeneration from './components/modules/VideoGeneration.jsx';

function App() {
  const [activeModule, setActiveModule] = useState('data-collection');

  const renderModule = () => {
    switch (activeModule) {
      case 'data-collection':
        return <DataCollection />;
      case 'script-production':
        return <ScriptProduction />;
      case 'video-generation':
        return <VideoGeneration />;
      default:
        return <DataCollection />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-gradient-to-b from-neutral-950 via-indigo-950/50 to-neutral-950 text-neutral-100 overflow-hidden">
      <Sidebar activeModule={activeModule} onModuleChange={setActiveModule} />
      <main className="flex-1 p-6 overflow-y-auto pt-12">
        {renderModule()}
      </main>
    </div>
  );
}

export default App;