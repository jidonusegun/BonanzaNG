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
      margin: "0px !important",
      color: "black",
      paddding: "0px !important",
      textDecoration: "none",
  
    },
    buttons: {
      fontWeight: "bold",
      margin: "0px !important",
      color: "black",
      paddding: "0px !important",
    },
    listItem: {
        padding: "0px !important",
        margin: "0px  !important"
    }
  }));
  
function Automobile () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">

        <Link to="/carcare"><ListItem className={classes.button} button selected={selectedIndex === 314} onClick={(event) => handleListItemClick(event, 314)}>
                <ListItemText className={classes.listItem} primary="CAR CARE" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 315} onClick={(event) => handleListItemClick(event, 315)}>
                <ListItemText primary="Cleaning Kits" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 316} onClick={(event) => handleListItemClick(event, 316)}>
                <ListItemText primary="Exterior Care" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 317} onClick={(event) => handleListItemClick(event, 317)}>
                <ListItemText primary="Interior Care" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 318} onClick={(event) => handleListItemClick(event, 318)}>
                <ListItemText primary="CAR ELECTRONICS & ACCESSORIES" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 319} onClick={(event) => handleListItemClick(event, 319)}>
                <ListItemText primary="Car Electronics" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 320} onClick={(event) => handleListItemClick(event, 320)}>
                <ListItemText primary="Car Accessories" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 321} onClick={(event) => handleListItemClick(event, 321)}>
                <ListItemText primary="Power & Battery" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 322} onClick={(event) => handleListItemClick(event, 322)}>
                <ListItemText primary="LIGHTS & LIGHTING ACCESSORIES" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 323} onClick={(event) => handleListItemClick(event, 323)}>
                <ListItemText primary="Bulbs" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 324} onClick={(event) => handleListItemClick(event, 324)}>
                <ListItemText primary="Accent & Off Road Lighting" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 325} onClick={(event) => handleListItemClick(event, 325)}>
                <ListItemText primary="EXTERIOR ACCESSORIES" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 326} onClick={(event) => handleListItemClick(event, 326)}>
                <ListItemText primary="Covers" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 327} onClick={(event) => handleListItemClick(event, 327)}>
                <ListItemText primary="Mirrors" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 328} onClick={(event) => handleListItemClick(event, 328)}>
                <ListItemText primary="Bumper Stickers, Decals & Magnets" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 329} onClick={(event) => handleListItemClick(event, 329)}>
                <ListItemText primary="OILS & FLUIDS" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 330} onClick={(event) => handleListItemClick(event, 330)}>
                <ListItemText primary="Brake Fluids" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 331} onClick={(event) => handleListItemClick(event, 331)}>
                <ListItemText primary="Greases & Lubricants" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 332} onClick={(event) => handleListItemClick(event, 332)}>
                <ListItemText primary="Oils" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 333} onClick={(event) => handleListItemClick(event, 333)}>
                <ListItemText primary="INTERIOR ACCESSORIES" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 334} onClick={(event) => handleListItemClick(event, 334)}>
                <ListItemText primary="Air Freshners" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 335} onClick={(event) => handleListItemClick(event, 335)}>
                <ListItemText primary="Consoles & Organizers" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 336} onClick={(event) => handleListItemClick(event, 336)}>
                <ListItemText primary="Key Chains" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 337} onClick={(event) => handleListItemClick(event, 337)}>
                <ListItemText primary="Floor Mats & Cargo Liners" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 338} onClick={(event) => handleListItemClick(event, 338)}>
                <ListItemText primary="Sun Protection" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 339} onClick={(event) => handleListItemClick(event, 339)}>
                <ListItemText primary="Seat Covers & Accessories" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 340} onClick={(event) => handleListItemClick(event, 340)}>
                <ListItemText primary="TYRE & RIMS" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 341} onClick={(event) => handleListItemClick(event, 341)}>
                <ListItemText primary="Tyre" />
        </ListItem></Link>
        <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 342} onClick={(event) => handleListItemClick(event, 342)}>
                <ListItemText primary="Inflator & Guages" />
        </ListItem></Link>

        </List>

    );
}

export default Automobile;