import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; 
import Dashboard from './Dashboard';
import Signup from './Signup';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path= "/signup"  element={<Signup />}/>
        <Route path= "/dashboard/:emp_name"  element={<Dashboard />}/>
        
        
      </Routes>
    </Router>
    </ChakraProvider>
 
  );
}

export default App;