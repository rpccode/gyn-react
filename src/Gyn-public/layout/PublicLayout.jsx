import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, SiderBar } from '../../Gyn-admin/components'

export const PublicLayout = () => {
  return (
    <>
        <NavBar/>
        <div className="container-fluid">
        
        <div className="row">
          {/* <SiderBar/> */}

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            
              <Outlet/>      
          </main>
        </div>
      </div>
    </>
  )
}
