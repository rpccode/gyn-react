import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { SiderBar } from "../components/SiderBar";


export const GynLayout = () => {
  return (
    <>
      <NavBar />

      <div className="container-fluid">
        
        <div className="row">
          <SiderBar/>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 animate__fadeIn">
            
              <Outlet/>      
          </main>
        </div>
      </div>
    </>
  );
};
