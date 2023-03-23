import React from "react"
import DropDown from "./components/DropDown"

function App() {

  // CREATING THE ITEM ARRAY FOR THE DROPDOWN MENU 
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      {/* HERE WE CALL THE DROPDOWN COMPONENT AND PASS THE DATA AS PROPS  */}
      <DropDown items={items} />
    </>
  )
}

export default App
