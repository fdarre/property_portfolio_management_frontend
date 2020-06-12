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

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={TestBuilding}
                    title="Test Building"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Building
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Address: 24-26 rue Mazelle 57000 Metz
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
