import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-lime-100">
        <Navbar></Navbar>
        <div className="container mx-auto w-[40vw] py-8">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App