
import './App.css';
import React from 'react';
import { Layout } from 'antd';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import AppHeader from './components/common/header';
import AppHome from './pages/home';
import AppAbout from './pages/about';
import FooterWidget from './components/common/footerWidget';
import Carstore from './pages/carstore';
import Legostore from './pages/legostore';
import Housestore from './pages/housestore';
import Bearstore from './pages/bearstore';

const { Header, Footer, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={<AppHome />} />
              <Route path='/about' element={<AppAbout />} />
              <Route path='/carstore' element={<Carstore />} />
              <Route path='/legostore' element={<Legostore />} />
              <Route path='/housestore' element={<Housestore />} />
              <Route path='/bearstore' element={<Bearstore />} />
            </Routes>
          </Content>
        </Router>
      
      <Footer>
        <FooterWidget />
      </Footer>
    </Layout>
    </div>
  );
}

export default App;
