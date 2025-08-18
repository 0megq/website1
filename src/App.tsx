import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Hello React + Tailwind!
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => alert("hello")}>
          Click me
        </button>
        <p className="text-blue-300">
          this is my paragraph
        </p>
      </div>
    </div>
  )
}

export default App