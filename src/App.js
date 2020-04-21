import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { roles, factions, heroes, goldToColorMap } from './db.js';
import { Paper, IconButton } from '@material-ui/core';
import ToggleButton from './components/ToggleButton.js';
const useStyles = makeStyles({
  container: {
    height: '100%',
  },
  avatar: {
    width: 30,
    height: 30,
    margin: '0 2px'
  }
})

function App() {
  const classes = useStyles();
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedFactions, setSelectedFactions] = useState([]);
  const [displayedHeroes, setDisplayedHeroes] = useState(heroes)
  // console.log(displayedHeroes)
  useEffect(() => {
    if (selectedRoles.length === 0 && selectedFactions.length === 0) {
      setDisplayedHeroes(heroes)
    } else {
      setDisplayedHeroes(heroes.filter(hero => {
        return hero.roles.some(role => selectedRoles.includes(role.name)) || hero.factions.some(faction => selectedFactions.includes(faction.name))
      }))
    }
  }, [selectedRoles, selectedFactions])

  const addRole = 
    (roleName) => {
      setSelectedRoles([...selectedRoles, roleName])
    }

  const removeRole = 
    (roleName) => {
      setSelectedRoles(selectedRoles.filter(role => role !== roleName))
    }

  const addFaction = 
    (factionName) => {
      setSelectedFactions([...selectedFactions, factionName])
    }

  const removeFaction = 
    (factionName) => {
      setSelectedFactions(selectedFactions.filter(faction => faction !== factionName))
    }

  return (
    <div className={classes.container}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
        <div style={{ display: 'flex'}}>
          {Object.keys(roles).map(role => (
            <ToggleButton key={roles[role].name} id={roles[role].name} imgSrc={`images/roles/${roles[role].name}.png`} addItem={addRole} removeItem={removeRole}/>
          ))}
        </div>
        <div style={{ display: 'flex'}}>
          {Object.keys(factions).map(faction => (
            <ToggleButton key={factions[faction].name} id={factions[faction].name} imgSrc={`images/factions/${factions[faction].name}.png`} addItem={addFaction} removeItem={removeFaction}/>
          ))}
        </div>
      </div>
      <div style={{
       // padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
        // if this is not here space appears between divs vertically
        height: 0,
      }}>
        {displayedHeroes.map(hero => (
            <Paper style={{
              height: 200,
              width: 120,
              margin: 5,
              border: `5px solid ${goldToColorMap[hero.gold]}`,
              boxShadow: `0 2px 4px 0 ${goldToColorMap[hero.gold]}, 0 3px 10px 0 ${goldToColorMap[hero.gold]}`,
              backgroundImage: `url(images/heroes/${hero.name === "Chang'e" ? "Change" : hero.name}.png)`,
              backgroundSize: 'cover',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              boxSizing: 'border-box',
            }}
            >

              <div style={{ background: 'rgba(0,0,0,.6)', display: 'flex', alignItems: 'center', padding: 5}}>
                {hero.roles.map(role => (
                  <img src={`images/roles/${role.name}.png`} className={classes.avatar} />
                ))}
                {hero.factions.map(faction => (
                  <img src={`images/factions/${faction.name}.png`} className={classes.avatar} />
                ))}
              </div>
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

// App.whyDidYouRender = true

export default App;
