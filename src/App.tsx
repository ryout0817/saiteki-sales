import React from 'react';
import './App.css'; // 必要であれば残します
import { Layout } from './features/ankenLayout/Layout';
import { AnkenList } from './features/ankenList/components/ankenList';

function App() {
  return (
    <Layout>
      <AnkenList />
    </Layout>
  );
}

export default App;
