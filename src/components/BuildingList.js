import React from 'react';
import BuildingCard from "./BuildingCard";
import Data from "../data/buildings.json"

const BuildingsData = Data.Buildings

class BuildingList extends React.Component {

    render() {
        return(
            <div>
                {BuildingsData.map((item, index)=>{
                    return <BuildingCard building={item} key={`building-list-key ${index}`}/>
                })}
            </div>
        )
    }
}

export default BuildingList;




