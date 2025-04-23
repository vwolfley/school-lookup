import { useState } from "react"
import "@arcgis/core/assets/esri/themes/light/main.css"

import Header from "./components/Layout/header/Header"
import Schools from "./components/Layout/main/school"

function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header />
      <Schools />
    </div>
  )
}

export default App
