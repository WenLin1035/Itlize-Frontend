import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
      <div className="App">
          <Header />
          {/*<SignInPage />*/}
          {/*<SignUpPage/>*/}
          <Router>
              <Switch>
                  {/*SignInPage is homepage*/}
                  {/*<Route path='/' exact render={<SignInPage />} />*/}
                  <Route path='/' exact> <SignInPage /></Route>
                  {/*SignUpPage is opened from signinpage button*/}
                  {/*<Route path='/signup' exact render={<SignUpPage/>}/>*/}
                  <Route path='/signup' exact> <SignUpPage /></Route>
              </Switch>

          </Router>
    </div>
  );
}

export default App;
