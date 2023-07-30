import { Test } from "./components/Test"

function App() {


  return (
    <>
      <Test url={'http://localhost:7070/data'} opts={'data'}/>
      <Test url={'http://localhost:7070/error'} opts={'error'}/>
      <Test url={'http://localhost:7070/loading'} opts={'loading'}/>
    </>
  )
}

export default App
