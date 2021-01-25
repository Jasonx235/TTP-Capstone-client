// import React from "react"

// import './App.css';
// import "semantic-ui-css/semantic.min.css"

// import Navbar from "./components/Navbar"

// function App() {
//     return (
//         <div className="App">
//             <Navbar />
//         </div>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './utils/AuthRoute';


import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import NavBar from'./components/NavBar';
import SearchPage from './components/pages/SearchPage'


function App() {
  return (
    <AuthProvider>
      <Router>
      <Container>
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <AuthRoute exact path="/login" component={Login}/>
        <AuthRoute exact path="/register" component={Register}/>
        <Route exact path="/SearchPage" component={SearchPage}/>
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default App;