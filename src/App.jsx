import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to VedaTech
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Your technology solutions partner
        </p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Innovation</h2>
            <p className="text-gray-600">
              Cutting-edge technology solutions for modern businesses.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Excellence</h2>
            <p className="text-gray-600">
              Quality-driven development with attention to detail.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Growth</h2>
            <p className="text-gray-600">
              Scalable solutions that grow with your business.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App