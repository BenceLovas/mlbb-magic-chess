import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  listItem: {
    padding: 10,
  }
})


const ToggleButton = React.memo(({text, addItem, removeItem}) => {
  const classes = useStyles();
  const [isOn, setOn] = useState(false);

  const handleClick = () => {
    if (isOn) {
      removeItem(text)
    } else {
      addItem(text)
    }
    setOn(!isOn);
  }

  return (
    <Paper 
      className={classes.listItem} 
      onClick={handleClick}
      style={{
        background: isOn ? '#eee' : '#fff'
      }}
    >
      {text}
    </Paper>
  ) 
})

ToggleButton.whyDidYouRender = true

export default ToggleButton;