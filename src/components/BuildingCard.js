import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TestBuilding from '../static/images/TestBuilding.jpg'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function BuildingCard(props) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={TestBuilding}
                    title={props.building.type}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.building.type}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.building.address}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Detail
                </Button>
            </CardActions>
        </Card>
    );
}




