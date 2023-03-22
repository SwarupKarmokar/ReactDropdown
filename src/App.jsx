import React from "react"
import DropDown from "./components/DropDown"

function App() {

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      <DropDown items={items} />
    </>
  )
}

export default App
