import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'; 
import Home from './pages/DetailBarang';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
