import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function App(props: {
  children?: React.ReactNode
}) {
  return (
    <div className="App">
      <Header />
      <div className="h-100%">
        <Outlet />
      </div>
    </div>
  )
}

export default App
