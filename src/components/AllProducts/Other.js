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
  
function Other () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">
  
            <Link to="/toysandgames"><ListItem className={classes.buttons} button selected={selectedIndex === 364} onClick={(event) => handleListItemClick(event, 364)}>
                    <ListItemText primary="TOYS & GAMES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 365} onClick={(event) => handleListItemClick(event, 365)}>
                    <ListItemText primary="Games" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 366} onClick={(event) => handleListItemClick(event, 366)}>
                    <ListItemText primary="Dress Up & Pretend Play" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 367} onClick={(event) => handleListItemClick(event, 367)}>
                    <ListItemText primary="Sports & Outdoor Play" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 368} onClick={(event) => handleListItemClick(event, 368)}>
                    <ListItemText primary="Top Toys & Games" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 369} onClick={(event) => handleListItemClick(event, 369)}>
                    <ListItemText primary="BOOKS, MOVIES AND MUSIC" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 370} onClick={(event) => handleListItemClick(event, 370)}>
                    <ListItemText primary="MUSICAL INSTRUMENTS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 371} onClick={(event) => handleListItemClick(event, 371)}>
                    <ListItemText primary="PET SUPPLIES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 372} onClick={(event) => handleListItemClick(event, 372)}>
                    <ListItemText primary="OFFICIAL STORES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 373} onClick={(event) => handleListItemClick(event, 373)}>
                    <ListItemText primary="Michelin" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 374} onClick={(event) => handleListItemClick(event, 374)}>
                    <ListItemText primary="Nestle" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 375} onClick={(event) => handleListItemClick(event, 375)}>
                    <ListItemText primary="Xiaomi" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 376} onClick={(event) => handleListItemClick(event, 376)}>
                    <ListItemText primary="Huawei" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 377} onClick={(event) => handleListItemClick(event, 377)}>
                    <ListItemText primary="Maybelline" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 378} onClick={(event) => handleListItemClick(event, 378)}>
                    <ListItemText primary="MAC" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 379} onClick={(event) => handleListItemClick(event, 379)}>
                    <ListItemText primary="Apple" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 380} onClick={(event) => handleListItemClick(event, 380)}>
                    <ListItemText primary="Intel" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 381} onClick={(event) => handleListItemClick(event, 381)}>
                    <ListItemText primary="Reckitt Benckiser" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 382} onClick={(event) => handleListItemClick(event, 382)}>
                    <ListItemText primary="Binatone" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 383} onClick={(event) => handleListItemClick(event, 383)}>
                    <ListItemText primary="Nexus" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 384} onClick={(event) => handleListItemClick(event, 384)}>
                    <ListItemText primary="GROCERY" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 385} onClick={(event) => handleListItemClick(event, 385)}>
                    <ListItemText primary="Food Cupboards" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 386} onClick={(event) => handleListItemClick(event, 386)}>
                    <ListItemText primary="Baby Products" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 387} onClick={(event) => handleListItemClick(event, 387)}>
                    <ListItemText primary="Plastic & Paper Products" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 388} onClick={(event) => handleListItemClick(event, 388)}>
                    <ListItemText primary="Drinks" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 389} onClick={(event) => handleListItemClick(event, 389)}>
                    <ListItemText primary="Hygiene" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 390} onClick={(event) => handleListItemClick(event, 390)}>
                    <ListItemText primary="Household Cleaning" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 391} onClick={(event) => handleListItemClick(event, 391)}>
                    <ListItemText primary="Beer, Wine & Spirits" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 392} onClick={(event) => handleListItemClick(event, 392)}>
                    <ListItemText primary="GARDEN & OUTDOORS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 393} onClick={(event) => handleListItemClick(event, 393)}>
                    <ListItemText primary="INDUSTRIAL & SCIENTIFIC" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 394} onClick={(event) => handleListItemClick(event, 394)}>
                    <ListItemText primary="SERVICES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 395} onClick={(event) => handleListItemClick(event, 395)}>
                    <ListItemText primary="LIVESTOCK" />
            </ListItem></Link>

        </List>

    );
}

export default Other;