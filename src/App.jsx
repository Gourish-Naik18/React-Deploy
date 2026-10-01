import { Route, Routes, useNavigate } from "react-router-dom"
import Table from "./Table"
import Message from "./message"

function App() {

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/msg')
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Table handleSubmit={handleSubmit}/>}></Route>
      <Route path="/msg" element={<Message/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
