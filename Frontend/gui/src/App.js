import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';
import SignIn from './components/reg-log/login'
import Register from './components/reg-log/sign_up'
import Home from './components/Home/Home'
import Logout from './components/reg-log/logout';
import Layout from './containers/Layout'

import Account from './components/Account/Account';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/settings/Settings';
import Studio from './components/Studio/Studio';
function App() {
  return (
    <Router>
      {/* TODO: figure out how to exclude layout in this routes below */}
      <Route path ='/signin' exact component={SignIn}/>
      <Route path ='/register' exact component={Register}/>
      <Route path ='/logout' exact component={Logout}/>
      <Layout>
    <Switch>
        <Route path ='/' exact component={Home}/>
        <Route path='/home'  exact component ={Home} />
        <Route path='/account' exact  component ={Account} />
        <Route path='/Settings' exact  component ={Settings} />
        <Route path='/studio' exact  component ={Studio} />
        <Route path='/dashboard' exact  component ={Dashboard} />
    </Switch>
      </Layout>
    </Router>
  );
}

export default App;
