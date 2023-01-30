import Header from "@/components/Header";
import StillnessOutlet from "@/router/Cache";


function App() {
  return (
    <div className="App" id="App">
      <Header />
      <div style={{height: "calc(100vh - 76px)"}} className="m-t-72px overflow-hidden">
        <StillnessOutlet keeplive={["/", "/types_1", "/types_2", "/types_3", "/types_4"]} />
      </div>
    </div>
  )
}

export default App
