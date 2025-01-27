import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  listItem: {
    width: 50,
    height: 50,
  }
})


const ToggleButton = React.memo(({id, imgSrc, addItem, removeItem}) => {
  const classes = useStyles();
  const [isOn, setOn] = useState(false);

  const handleClick = () => {
    if (isOn) {
      removeItem(id)
    } else {
      addItem(id)
    }
    setOn(!isOn);
  }

  return (
    <Paper 
      className={classes.listItem} 
      onClick={handleClick}
      style={{
        background: isOn ? '#333' : '#fff',
        padding: 5,
        margin: 2,
      }}
    >
      <img src={imgSrc} className={classes.listItem} />
    </Paper>
  ) 
})

// ToggleButton.whyDidYouRender = true

export default ToggleButton;