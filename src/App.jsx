import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

function HomePage() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold text-gray-900">VedaTech</h1>
      <p className="mt-2 text-gray-600">React + Vite + Tailwind starter.</p>
      <div className="mt-6 flex gap-3">
        <a
          href="https://vite.dev"
          className="rounded bg-indigo-600 px-3 py-2 text-white shadow hover:bg-indigo-500"
          target="_blank"
          rel="noreferrer"
        >
          Vite Docs
        </a>
        <a
          href="https://react.dev"
          className="rounded border border-gray-300 px-3 py-2 text-gray-700 hover:bg-gray-50"
          target="_blank"
          rel="noreferrer"
        >
          React Docs
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-4xl p-4 flex items-center justify-between">
          <Link to="/" className="font-semibold text-gray-900">VedaTech</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <footer className="mt-20 border-t">
        <div className="mx-auto max-w-4xl p-6 text-sm text-gray-500">
          © {new Date().getFullYear()} VedaTech
        </div>
      </footer>
    </div>
  )
}