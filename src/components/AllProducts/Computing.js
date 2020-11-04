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
  
function Computing () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">

            <Link to="/computers"><ListItem className={classes.buttons} button selected={selectedIndex === 49} onClick={(event) => handleListItemClick(event, 49)}>
                <ListItemText primary="COMPUTERS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 50} onClick={(event) => handleListItemClick(event, 50)}>
                <ListItemText primary="Desktops" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 51} onClick={(event) => handleListItemClick(event, 51)}>
                <ListItemText primary="Laptops" />
            </ListItem></Link>
            <Link to="/datastorage"><ListItem className={classes.buttons} button selected={selectedIndex === 52} onClick={(event) => handleListItemClick(event, 52)}>
                <ListItemText primary="DATA STORAGE" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 53} onClick={(event) => handleListItemClick(event, 53)}>
                <ListItemText primary="External Hard Drives" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 54} onClick={(event) => handleListItemClick(event, 54)}>
                <ListItemText primary="USB Flash Drives" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 55} onClick={(event) => handleListItemClick(event, 55)}>
                <ListItemText primary="External Solid State" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 56} onClick={(event) => handleListItemClick(event, 56)}>
                <ListItemText primary="ANTIVIRUS & SECURITY" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 57} onClick={(event) => handleListItemClick(event, 57)}>
                <ListItemText primary="Antivirus" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 58} onClick={(event) => handleListItemClick(event, 58)}>
                <ListItemText primary="Internet Security" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 59} onClick={(event) => handleListItemClick(event, 59)}>
                <ListItemText primary="PRINTERS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 60} onClick={(event) => handleListItemClick(event, 60)}>
                <ListItemText primary="Inkjet Printers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 61} onClick={(event) => handleListItemClick(event, 61)}>
                <ListItemText primary="Laser Printers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 62} onClick={(event) => handleListItemClick(event, 62)}>
                <ListItemText primary="Printer Ink & Toner" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 63} onClick={(event) => handleListItemClick(event, 63)}>
                <ListItemText primary="COMPUTER ACCESSORIES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 64} onClick={(event) => handleListItemClick(event, 64)}>
                <ListItemText primary="Keyboards & Mice" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 65} onClick={(event) => handleListItemClick(event, 65)}>
                <ListItemText primary="Uninterrupted Power Supply" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 66} onClick={(event) => handleListItemClick(event, 66)}>
                <ListItemText primary="Memory Cards" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 67} onClick={(event) => handleListItemClick(event, 67)}>
                <ListItemText primary="Batteries" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 69} onClick={(event) => handleListItemClick(event, 69)}>
                <ListItemText primary="Scanners" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 70} onClick={(event) => handleListItemClick(event, 70)}>
                <ListItemText primary="Video Projectors" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 71} onClick={(event) => handleListItemClick(event, 71)}>
                <ListItemText primary="TOP BRANDS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 72} onClick={(event) => handleListItemClick(event, 72)}>
                <ListItemText primary="HP" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 73} onClick={(event) => handleListItemClick(event, 73)}>
                <ListItemText primary="Logitech" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 74} onClick={(event) => handleListItemClick(event, 74)}>
                <ListItemText primary="Dell" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 75} onClick={(event) => handleListItemClick(event, 75)}>
                <ListItemText primary="Lenovo" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 76} onClick={(event) => handleListItemClick(event, 76)}>
                <ListItemText primary="Apple" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 77} onClick={(event) => handleListItemClick(event, 77)}>
                <ListItemText primary="ASUS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 78} onClick={(event) => handleListItemClick(event, 78)}>
                <ListItemText primary="Huawei" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 79} onClick={(event) => handleListItemClick(event, 79)}>
                <ListItemText primary="Microsoft" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 80} onClick={(event) => handleListItemClick(event, 80)}>
                <ListItemText primary="Kingston" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 81} onClick={(event) => handleListItemClick(event, 81)}>
                <ListItemText primary="Seagate" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 82} onClick={(event) => handleListItemClick(event, 82)}>
                <ListItemText primary="Samsung" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 83} onClick={(event) => handleListItemClick(event, 83)}>
                <ListItemText primary="Sandisk" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 84} onClick={(event) => handleListItemClick(event, 84)}>
                <ListItemText primary="Toshiba" />
            </ListItem></Link>
        </List>

    );
}

export default Computing;