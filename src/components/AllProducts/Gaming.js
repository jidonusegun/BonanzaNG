import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    button: {
      margin: "0px",
      color: "black",
      paddding: "0px",
      textDecoration: "none",
  
    },
    buttons: {
      fontWeight: "bold",
      margin: "0px",
      color: "black",
      paddding: "0px",
    },
  }));
  
function Gaming () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">

            <Link to="/playstation"><ListItem className={classes.buttons} button selected={selectedIndex === 112} onClick={(event) => handleListItemClick(event, 112)}>
                <ListItemText primary="PLAYSTATION" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 113} onClick={(event) => handleListItemClick(event, 113)}>
                <ListItemText primary="Playstation 4" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 114} onClick={(event) => handleListItemClick(event, 114)}>
                <ListItemText primary="Playstation 3" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 115} onClick={(event) => handleListItemClick(event, 115)}>
                <ListItemText primary="Playstation 2" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 116} onClick={(event) => handleListItemClick(event, 116)}>
                <ListItemText primary="Playstation" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 117} onClick={(event) => handleListItemClick(event, 117)}>
                <ListItemText primary="Playstation Vita" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 118} onClick={(event) => handleListItemClick(event, 118)}>
                <ListItemText primary="XBOX" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 119} onClick={(event) => handleListItemClick(event, 119)}>
                <ListItemText primary="XBOX One" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 120} onClick={(event) => handleListItemClick(event, 120)}>
                <ListItemText primary="XBOX 360" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 121} onClick={(event) => handleListItemClick(event, 121)}>
                <ListItemText primary="XBOX" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 122} onClick={(event) => handleListItemClick(event, 122)}>
                <ListItemText primary="NINTENDO" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 123} onClick={(event) => handleListItemClick(event, 123)}>
                <ListItemText primary="Nintendo 3DS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 124} onClick={(event) => handleListItemClick(event, 124)}>
                <ListItemText primary="Nintendo DS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 125} onClick={(event) => handleListItemClick(event, 125)}>
                <ListItemText primary="Nintendo Switch" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 126} onClick={(event) => handleListItemClick(event, 126)}>
                <ListItemText primary="Nintendo Wii" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 127} onClick={(event) => handleListItemClick(event, 127)}>
                <ListItemText primary="TOP GAMES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 128} onClick={(event) => handleListItemClick(event, 128)}>
                <ListItemText primary="FIFA '20" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 129} onClick={(event) => handleListItemClick(event, 129)}>
                <ListItemText primary="PES '20" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 130} onClick={(event) => handleListItemClick(event, 130)}>
                <ListItemText primary="PES '19" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 131} onClick={(event) => handleListItemClick(event, 131)}>
                <ListItemText primary="PES 2017" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 132} onClick={(event) => handleListItemClick(event, 132)}>
                <ListItemText primary="Call of Duty" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 133} onClick={(event) => handleListItemClick(event, 133)}>
                <ListItemText primary="Uncharted" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 134} onClick={(event) => handleListItemClick(event, 134)}>
                <ListItemText primary="Battlefield" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 135} onClick={(event) => handleListItemClick(event, 135)}>
                <ListItemText primary="The Witcher 3" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 136} onClick={(event) => handleListItemClick(event, 136)}>
                <ListItemText primary="Metal Gear Solid" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 137} onClick={(event) => handleListItemClick(event, 137)}>
                <ListItemText primary="Fallout" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 138} onClick={(event) => handleListItemClick(event, 138)}>
                <ListItemText primary="Madden NFL" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 139} onClick={(event) => handleListItemClick(event, 139)}>
                <ListItemText primary="Far Cry" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 140} onClick={(event) => handleListItemClick(event, 140)}>
                <ListItemText primary="Grand Theft Auto" />
            </ListItem></Link>
        </List>

    );
}

export default Gaming;