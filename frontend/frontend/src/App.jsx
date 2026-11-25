import { useState } from "react"
import Viewuser from "./Viewuser"

function App() {
  const [user,setUser]=useState([{id:1,name:"vino", email:"a@gmail.com", password:"@1234" }])

  return (
    <div>
      <h1>CRUD operation</h1>
      <p>ADD user</p>
      <p>View user</p>
      <Viewuser us={user}/>
    </div>
  )
}

export default App
