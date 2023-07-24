import { UseJsonFetch } from "./components/UseJsonFetch"

function App() {


  return (
    <>
      <UseJsonFetch url={'http://localhost:7070/data'} opts={'data'}/>
      <UseJsonFetch url="http://localhost:7070/error" opts={'error'}/>
      <UseJsonFetch url="http://localhost:7070/loading" opts={'loading'}/>
    </>
  )
}

export default App
