import React, { useContext } from 'react'
import TopHeader from './TopHeader'
import AsideBar from './AsideBar'
import Footer from './Footer'
import { MainContext } from '../../../utils/MainContextProvider';

function Layout({ children }) {

  const { toggleClass } = useContext(MainContext);

  return (
    <>
      <div className={`hold-transition layout-fixed sidebar-mini ${toggleClass}`} >
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