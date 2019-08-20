import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import LeftSide from './containers/LeftSide/LeftSide';
import Board from './Board/Board';

function App() {
  return (
    <Layout>
      <LeftSide>
          <Board/>
      </LeftSide>
    </Layout>
  );
}

export default App;
