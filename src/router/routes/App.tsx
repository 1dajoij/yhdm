import Header from "@/components/Header";
import StillnessOutlet from "@/router/cache";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="h-100%">
        <StillnessOutlet keeplive={["/"]} />
      </div>
    </div>
  )
}

export default App
