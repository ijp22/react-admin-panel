import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

import './app.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <div className='pages-container'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
