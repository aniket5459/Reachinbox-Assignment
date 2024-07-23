import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import OneBox from "./pages/OneBox"

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route index element={<Navigate replace to='login' />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onebox" element={<OneBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
