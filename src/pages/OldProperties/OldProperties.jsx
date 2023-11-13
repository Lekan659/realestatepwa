import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import "./OldProperties.css"
// import useProperties from '../../hooks/useProperties'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import data from "../../utils/oldslider.json"
import Heroprojects from '../../components/Heroprojects/Heroprojects'
import Herooldprojects from '../../components/Herooldprojects/Herooldprojects'

const Oldproperties = () => {
    // const {data, isError, isLoading} = useProperties()
    const [filter, setFilter] = useState("");
  return (

    <div className='wrapper'>
       <Herooldprojects/>
        <div className="flexColCenter paddings innerWidth properties-container">
       
        <SearchBar filter={filter} setFilter={setFilter} />
        <div className="paddings flexCenter properties">
        {
            // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

            data
              .filter(
                (property) =>
                  property.name.toLowerCase().includes(filter.toLowerCase()) ||
                  property.city.toLowerCase().includes(filter.toLowerCase()) ||
                  property.country.toLowerCase().includes(filter.toLowerCase())
              )
              .map((card, i) => (
                <PropertyCard card={card} key={i} />
              ))
          }
          
        </div>
        </div>
    </div>
  )
}

export default Oldproperties