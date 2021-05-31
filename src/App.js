import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'; 
import List from './pages/ListBarang';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <List />
    </Router>
  );
}

export default App;
