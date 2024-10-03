import React, { useContext } from 'react'
import TopHeader from './TopHeader'
import AsideBar from './AsideBar'
import Footer from './Footer'
import { MainContext } from '../../../utils/MainContextProvider';

function Layout({children}) {

  const { menuHamburger } = useContext(MainContext);
  return (
    <>
        <div className={`hold-transition layout-fixed sidebar-collapse sidebar-mini ${menuHamburger} `} >
        <div className="wrapper">
            <TopHeader />
            <AsideBar />
            {children}
            <Footer />
  </div>
  </div>
    </>
  )
}

export default Layout