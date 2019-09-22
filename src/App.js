import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Board from './Board/Board';
import RightSide from './containers/RightSide/RightSide';
import Info from './containers/Info/Info';

function App() {
  return (
    <Layout>
    <Board/>
        <div className="headerDivider"></div>
      <RightSide>
        <Info/>
      </RightSide>
    </Layout>
  );
}

export default App;
