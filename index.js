//Class components (render method)
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Wrapping</h1>
        <h1>multiple items</h1>
        <h1>in a div!</h1>
      </div>
    )
  }
}
ReactDOM.render(<Hello />, document.getElementById("root"))

//Function components (simple or dumb except when using react hooks)
function Hello() {
  return (
    <div>
      <h1>Wrapping</h1>
      <h1>multiple items</h1>
      <h1>in a div!</h1>
    </div>
  )
}
ReactDOM.render(<Hello />, document.getElementById("root"))
