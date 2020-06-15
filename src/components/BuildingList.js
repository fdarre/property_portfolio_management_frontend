import React from 'react';
import BuildingCard from "./BuildingCard";
import Grid from '@material-ui/core/Grid';
import Data from "../data/buildings.json";

const BuildingsData = Data.Buildings

class BuildingList extends React.Component {

    render() {
        return(
            <Grid
                container
                spacing={10}
                direction="row"
                justify="center"
                alignItems="baseline"
            >

                    {BuildingsData.map((item, index)=>{
                        return(
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <BuildingCard building={item} key={`building-list-key ${index}`}/>
                            </Grid>
                    )
                    })}

            </Grid>
        )
    }
}

export default BuildingList;




