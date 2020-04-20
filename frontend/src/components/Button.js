import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width:'30vh',
      position:"relative",
      left:'68vh',
      top:'2vh'
    },
  },
}));

export default function ContainedButtons(nome) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Button variant="contained" color="secondary">
      Ver mais
    </Button>
    
     
    </div>
  );
}