import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { roles, factions, heroes } from './db.js';
import Paper from '@material-ui/core/Paper';
import ToggleButton from './components/ToggleButton.js';

const useStyles = makeStyles({
  container: {
    height: '100%',
    display: 'flex'
  },
  sidebar: {
    width: 300,
    height: '100%'
  },
})

function App() {
  const classes = useStyles();
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedFactions, setSelectedFactions] = useState([]);
  console.log('IN APP COMP')

  const addRole = 
    (roleName) => {
      setSelectedRoles([...selectedRoles, roleName])
    }

  const removeRole = 
    (roleName) => {
      setSelectedRoles(selectedRoles.filter(role => role.name !== roleName))
    }

  const addFaction = 
    (factionName) => {
      setSelectedFactions([...selectedFactions, factionName])
    }

  const removeFaction = 
    (factionName) => {
      setSelectedFactions(selectedFactions.filter(faction => faction.name !== factionName))
    }

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div>
          <div>ROLES</div>
          {Object.keys(roles).map(role => (
            <ToggleButton key={role.name} text={roles[role].name} addItem={addRole} removeItem={removeRole}/>
          ))}
        </div>
        <div>
          <div>FACTIONS</div>
          {Object.keys(factions).map(faction => (
            <ToggleButton key={faction.name} text={factions[faction].name} addItem={addFaction} removeItem={removeFaction}/>
          ))}
        </div>
      </div>
      <div>hello</div>
    </div>
  );
}

App.whyDidYouRender = true

export default App;
