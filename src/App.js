import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Registration from './components/Registration';


function App() {
  return (
    <div className="App">
        <Router>
            <Route path="/" exact><Registration/></Route>
            <Route path="/login"><Login/></Route>
            <Route path="/homepage"><Homepage/></Route>
        </Router>
        
    </div>
  );
}

export default App;
