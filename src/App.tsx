import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar></Navbar>
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App