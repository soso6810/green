import Navbar from "../components/Navbar/Navbar"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import Catalog from "../components/Catolog/Catalog"
import { Route, Switch } from "react-router-dom"

const Root = ()=>{
  return (
    <>
      <Navbar/>
      {/* <Header/>
      <Sidebar/> */}

      {/* Home Page */}
      {/* house plants */}
      {/* all */}
      <Route exact path={'/'} component={Catalog}/>
      <Route exact path={'/'} component={Header}/>
      <Route exact path={'/'} component={Sidebar}/>
      {/* new arr */}
      <Route exact path={'/home/houseplant/newarr'} component={Catalog}/>
      <Route exact path={'/home/houseplant/newarr'} component={Header}/>
      <Route exact path={'/home/houseplant/newarr'} component={Sidebar}/>
      {/* sale */}
      <Route exact path={'/home/houseplant/sale'} component={Catalog}/>
      <Route exact path={'/home/houseplant/sale'} component={Header}/>
      <Route exact path={'/home/houseplant/sale'} component={Sidebar}/>

      {/* potter plants */}
      <Route exact path={'/home/potterPlants'} component={Catalog}/>
      <Route exact path={'/home/potterPlants'} component={Header}/>
      <Route exact path={'/home/potterPlants'} component={Sidebar}/>

      {/* Seeds */}
      <Route exact path={'/home/seeds'} component={Catalog}/>
      <Route exact path={'/home/seeds'} component={Header}/>
      <Route exact path={'/home/seeds'} component={Sidebar}/>






      {/* potter plants */}
      
      

      {/* Shop Page */}
      <Route path={"/shop"}>
        <h1 className="onProcesses">Shop Page is on proccess</h1>
      </Route>
      {/* Plant Care */}
      <Route path={"/plantcare"}>
        <h1 className="onProcesses">Plant Care is on proccess</h1>
      </Route>
      {/* Blog Page */}
      <Route path={"/blogs"}>
        <h1 className="onProcesses">Blog Page is on proccess</h1>
      </Route>
      

    </>
  )
  
 }
 export default Root