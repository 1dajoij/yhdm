import Header from "@/components/Header";

function App(props: {
  children?: React.ReactNode
}) {
  return (
    <div className="App">
      <Header />
      <div className="h-100%">
        {props.children ? props.children : null}
      </div>
    </div>
  )
}

export default App
