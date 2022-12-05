import { useState } from 'react';
import './App.css';
import Login  from "./components/chat/Login";

function App() {
  const [id, setId] = useState("")

  return (
   <>
   {id}
  <Login onIdSubmit={setId} id={id} />
   </>
  );
}

export default App;
