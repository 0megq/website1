import './index.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar></Navbar>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Hello React + Tailwind!
        </h1>
        <a href="https://youtu.be/dZ26E_7Hsr8" className="mr-4">This is a link</a>
        <button className="bg-blue-500 hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded" onClick={() => alert("hello")}>
          Click me
        </button>
        <p className="hover:bg-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, alias.
        </p>
      </div>
    </div>
  )
}

export default App