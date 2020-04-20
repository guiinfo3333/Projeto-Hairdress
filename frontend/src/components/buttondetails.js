import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position:"relative",
     left:"40vh",
     top:"1vh",
   
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button type="button" variant="contained" color="secondary" >
        Ver detalhes
      </Button>
      
    </div>
  );
}