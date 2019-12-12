import React from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocketProvider from './providers/SocketContext';

function App() {
  return (
    <div>
      <SocketProvider>
        <ChatBox />
      </SocketProvider>
    </div>
  );
}

export default App;
