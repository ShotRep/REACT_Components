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
