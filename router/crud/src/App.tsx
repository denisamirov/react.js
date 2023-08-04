import { Cards } from "./components/Cards"
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { Create } from "./components/Create";
import { ViewCard } from "./components/ViewCard";

function App() {

  return (
    <>
    <Routes>
            <Route path="/posts/:id" element={<ViewCard />} />
            <Route path="/" element={<Cards />} />
            <Route path="/posts/new" element={<Create />} />
    </Routes>
    </>
  )
}

export default App
