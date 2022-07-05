import { HousePlants, PotterPlants,Seeds } from "../mock/mock";
import { createContext, useState } from "react";
export const PlantsContext = createContext()
export const Context = ({children})=>{
  
  const [data, setData]= useState([
    HousePlants,
    PotterPlants,
    Seeds
    
  ])
  
  return(
    <PlantsContext.Provider value={[data, setData]}>
      {children}
    </PlantsContext.Provider>
  )
}