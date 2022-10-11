import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Sustainable Fashion Website</h1>
      <p> We will eventually have a cooler name</p>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = '/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
