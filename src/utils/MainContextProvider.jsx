import React, { createContext, useState } from 'react'

export const  MainContext = createContext();

function MyContextProvider({ children }) {
  
  const [menuHamburger, setMenuHamburger] = useState('')

  const handleSideMenuToggle = (newValue) => {
    console.log("Function called in Context")
    const updatedHeader =  newValue ? 'idebar-collapse' : '';
    setMenuHamburger(updatedHeader)
  }

  return (
    <MainContext.Provider value={{ menuHamburger, handleSideMenuToggle }}>
      {children}
    </MainContext.Provider>
  );
}

export default MyContextProvider