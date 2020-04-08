import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { roles, factions, heroes, goldToColorMap } from './db.js';
import Paper from '@material-ui/core/Paper';
import ToggleButton from './components/ToggleButton.js';
import { fontWeight } from '../node_modules/@material-ui/system';

const useStyles = makeStyles({
  container: {
    height: '100%',
    display: 'flex'
  },
  sidebar: {
    minWidth: 300,
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
      <div style={{
        padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
        // if this is not here space appears between divs vertically
        height: 0,
      }}>
        {heroes.map(hero => (
            <Paper style={{
              height: 170,
              width: 100,
              margin: 5,
              border: `3px solid ${goldToColorMap[hero.gold]}`,
              boxShadow: `0 2px 4px 0 ${goldToColorMap[hero.gold]}, 0 3px 10px 0 ${goldToColorMap[hero.gold]}`,
              backgroundImage: `url(images/${hero.name === "Chang'e" ? "Change" : hero.name}.png)`,
              backgroundSize: 'cover',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}
            >

              {/* <div>
                {hero.roles.map(role => (
                  <div>{role.name}</div>
                ))}
                {hero.factions.map(faction => (
                  <div>{faction.name}</div>
                ))}
              </div> */}
              <div
                style={{
                  background: 'rgb(6, 28, 37)',
                  color: '#fff',
                  fontWeight: 500,
                  letterSpacing: 0.15,
                  padding: 5,
                }}
              >
                {hero.name}
              </div>
            </Paper>
        ))}
      </div>
    </div>
  );
}

App.whyDidYouRender = true

export default App;
