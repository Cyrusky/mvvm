import "reflect-metadata"
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import {ViewModelProvider} from "./components/ViewModelProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ViewModelProvider>
      <App/>
    </ViewModelProvider>
  </React.StrictMode>,
)
