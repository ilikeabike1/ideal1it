
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { TicketList } from './components/TicketList';
import { CreateTicket } from './components/CreateTicket';
import { KnowledgeBase } from './components/KnowledgeBase';
import { AIChatBot } from './components/AIChatBot';

type View = 'dashboard' | 'tickets' | 'create-ticket' | 'kb' | 'ai-support';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'tickets':
        return <TicketList />;
      case 'create-ticket':
        return <CreateTicket onSuccess={() => setCurrentView('tickets')} />;
      case 'kb':
        return <KnowledgeBase />;
      case 'ai-support':
        return <AIChatBot />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;
