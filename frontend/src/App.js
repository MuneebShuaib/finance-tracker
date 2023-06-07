import './index.css';


//4/10/2023
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'

function App() {

  return (
    <div className = 'root'>
    <Router>
        <Header/>
        <Routes>
          <Route path = '/' element = {<Dashboard />}/>
          <Route path = '/login' element = {<Login />}/>
          <Route path = '/register' element = {<Register />}/>


        </Routes>
    </Router>
    </div>
  );
}


export default App;