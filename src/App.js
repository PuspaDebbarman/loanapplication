import Login from './Components/loginPage'
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import FinalReview from './Components/FinalReview';


function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/review" component={FinalReview} />
        <Redirect to="/login" />
      </Switch>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
