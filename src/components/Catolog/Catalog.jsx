import flower1 from '../../img/flower1.jpg'
import { NavLink, Route } from 'react-router-dom'
import { HousePlants } from './HousePlants/HousePlants'
import { NewArrivals } from './HousePlants/NewArrivals'
import { Sale } from './HousePlants/Sale'
import { PotterPlants } from './PotterPlants/PotterPlants'
import { Seeds } from './Seeds/Seeds'

const Catalog = ()=>{
  const active = {
    color:'rgba(70, 163, 88, 1)',
    borderBottom:'2px solid rgba(70, 163, 88, 1)'

  }
  return(
    <div className="catalog">
      <div className="catalog__navbar mb-s">
        <div className="catalog__navbar-box">
          <NavLink className="heading5" activeStyle={active} exact to={'/'}>All Plants</NavLink>
          <NavLink className="heading5" activeStyle={active} to={'/home/houseplant/newarr'}>New Arrivals</NavLink>
          <NavLink className="heading5" activeStyle={active} to={'/home/houseplant/sale'}>Sale</NavLink>

        </div>
        <div className="catalog__sort-box">
          <h1 className="heading5">Sort by:</h1>
          <select className="catalog__sort">
            <option value="">Default sorting</option>
            <option value="">Alphabetical</option>
            <option value="">Size</option>
            <option value="">Type</option>


          </select>

        </div>
      </div>
      <div className="catalog__box">
        <Route exact path={'/'} component={HousePlants}/>
        <Route  path={'/home/houseplant/newarr'} component={NewArrivals}/>
        <Route  path={'/home/houseplant/sale'} component={Sale}/>

        <Route exact path={'/home/potterPlants'} component={PotterPlants}/>

        <Route path={'/home/seeds'} component={Seeds}/>
        
       
      
        
      </div>
      <div className="catalog__numbers">
          <button className="catalog__list-number">1</button>
          <button className="catalog__list-number">2</button>
          <button className="catalog__list-number">3</button>
          <button className="catalog__list-number">4</button>
          <button className="catalog__list-number">&gt;</button>
      </div>


    </div>
  )
}

export default Catalog