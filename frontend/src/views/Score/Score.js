import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { ScoreTable, ScoreAdd } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Score = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <ScoreAdd/>
      </div>
      <div className={classes.content}>
        <ScoreTable/>
      </div>
    </div>
  );
};

export default Score;
