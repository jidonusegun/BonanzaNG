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
  
function Electronics () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">

            <Link to="/televisionvideo"><ListItem className={classes.buttons} button selected={selectedIndex === 85} onClick={(event) => handleListItemClick(event, 85)}>
                <ListItemText primary="TELEVISION & VIDEO" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 86} onClick={(event) => handleListItemClick(event, 86)}>
                <ListItemText primary="Televisions" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 87} onClick={(event) => handleListItemClick(event, 87)}>
                <ListItemText primary="Smart TVs" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 88} onClick={(event) => handleListItemClick(event, 88)}>
                <ListItemText primary="LED & LCD TVs" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 89} onClick={(event) => handleListItemClick(event, 89)}>
                <ListItemText primary="QLED & OLED TVs" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 90} onClick={(event) => handleListItemClick(event, 90)}>
                <ListItemText primary="DVD Players & Recorders" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 91} onClick={(event) => handleListItemClick(event, 91)}>
                <ListItemText primary="HOME AUDIO" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 92} onClick={(event) => handleListItemClick(event, 92)}>
                <ListItemText primary="Home Theatre Systems" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 93} onClick={(event) => handleListItemClick(event, 93)}>
                <ListItemText primary="Receivers & Amplifiers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 94} onClick={(event) => handleListItemClick(event, 94)}>
                <ListItemText primary="Sound Bars" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 95} onClick={(event) => handleListItemClick(event, 95)}>
                <ListItemText primary="CAMERAS & PHOTOS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 96} onClick={(event) => handleListItemClick(event, 96)}>
                <ListItemText primary="Digital Cameras" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 97} onClick={(event) => handleListItemClick(event, 97)}>
                <ListItemText primary="Projectors" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 98} onClick={(event) => handleListItemClick(event, 98)}>
                <ListItemText primary="Video Surveillance" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 99} onClick={(event) => handleListItemClick(event, 99)}>
                <ListItemText primary="Camcorders" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 100} onClick={(event) => handleListItemClick(event, 100)}>
                <ListItemText primary="GENERATORS & PORTABLE POWER" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 101} onClick={(event) => handleListItemClick(event, 101)}>
                <ListItemText primary="Generators" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 102} onClick={(event) => handleListItemClick(event, 102)}>
                <ListItemText primary="Power Inverters" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 103} onClick={(event) => handleListItemClick(event, 103)}>
                <ListItemText primary="Solar & Wind Power" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 104} onClick={(event) => handleListItemClick(event, 104)}>
                <ListItemText primary="Stablizers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 105} onClick={(event) => handleListItemClick(event, 105)}>
                <ListItemText primary="TOP ELECTRONICS BRANDS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 106} onClick={(event) => handleListItemClick(event, 106)}>
                <ListItemText primary="LG" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 107} onClick={(event) => handleListItemClick(event, 107)}>
                <ListItemText primary="Samsung" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 108} onClick={(event) => handleListItemClick(event, 108)}>
                <ListItemText primary="Sony" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 109} onClick={(event) => handleListItemClick(event, 109)}>
                <ListItemText primary="TCL" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 110} onClick={(event) => handleListItemClick(event, 110)}>
                <ListItemText primary="Hisense" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 111} onClick={(event) => handleListItemClick(event, 111)}>
                <ListItemText primary="Cano" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 111} onClick={(event) => handleListItemClick(event, 111)}>
                <ListItemText primary="DStv" />
            </ListItem></Link>

        </List>

    );
}

export default Electronics;