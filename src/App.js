import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from 'styled-components';
import Home from './pages/Home';
import User from './pages/User';

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
`;

function App() {

  return (

    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<User />} />
        </Routes>
      </Router>
    </Container>
    
  );

}

export default App;
