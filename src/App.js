//import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    // <>
    // <Header/>
    // <Home/>
    // </>
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/restaurants/:name/:id' element={<RestaurantDetails/>}/>
          </Routes>
        </Container>
      </main>

    </Router>
  );
}

export default App;
