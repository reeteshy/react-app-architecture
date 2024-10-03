import React, { createContext, useState } from 'react'

export const MainContext = createContext();

function MyContextProvider({ children }) {

  const [status, setStatus] = useState('')
  const [toggleClass, setToggleClass] = useState('')

  const [toggleModel, setToggleModel] = useState(false)

  const handleToggleModel = () => {
    if (!toggleModel) {
      const newElement = document.createElement("div");
      newElement.className = "modal-backdrop fade show";
      document.body.appendChild(newElement);
      setToggleModel(!toggleModel);
    } else {
      document.querySelector(".modal-backdrop").remove();
      setToggleModel(!toggleModel);
    }
  }


  const handleSideMenuToggle = (newValue) => {
    console.log("Function called in Context", status, toggleClass)
    const updatedHeader = newValue ? ' sidebar-collapse ' : '';
    setToggleClass(updatedHeader)
    setStatus(!status)
  }

  const appContextValue = { status, toggleClass, handleSideMenuToggle, toggleModel, handleToggleModel }

  return (
    <MainContext.Provider value={appContextValue}>
      {children}
    </MainContext.Provider>
  );
}

export default MyContextProvider