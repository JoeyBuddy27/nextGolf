import React from 'react';
import RowItem from "./RowItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

// pull in data as props



const Row = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        }}))

        const classes = useStyles();

    return (
        <div className={classes.root}>
       <Grid container spacing={2}>
           {props.children}
       </Grid>
       </div>
   
    )
            }

        

export default Row;