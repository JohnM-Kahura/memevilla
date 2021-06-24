import { Route,BrowserRouter as Router } from 'react-router-dom';
import SignIn from './components/reg-log/login'
import Register from './components/reg-log/sign_up'
import Home from './components/Home/Home'
import Logout from './components/reg-log/logout';
import Layout from './containers/Layout'
function App() {
  return (
    <Router>

    <div className="App">
      
      {/* <Home/> */}
    </div>
    <Route path ='/' exact component={Layout}/>
    <Route path ='/signin' exact component={SignIn}/>
    <Route path ='/register' exact component={Register}/>
    <Route path ='/logout' exact component={Logout}/>
    </Router>
  );
}

export default App;
