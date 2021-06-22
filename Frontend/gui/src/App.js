import { Route,BrowserRouter as Router } from 'react-router-dom';
import SignIn from './components/reg-log/login'
import Register from './components/reg-log/sign_up'
import Home from './components/Home/Home'

function App() {
  return (
    <Router>

    <div className="App">
      
      {/* <Home/> */}
    </div>
    <Route path ='/' exact component={Home}/>
    <Route path ='/signin' exact component={SignIn}/>
    <Route path ='/register'component={Register}/>
    </Router>
  );
}

export default App;
