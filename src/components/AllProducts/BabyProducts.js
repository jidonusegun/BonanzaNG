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
  
function BabyProducts () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">

            <Link to="/apparelandaccessories"><ListItem className={classes.buttons} button selected={selectedIndex === 141} onClick={(event) => handleListItemClick(event, 141)}>
                <ListItemText primary="APPAREL & ACCESSORIES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 142} onClick={(event) => handleListItemClick(event, 142)}>
                <ListItemText primary="Baby Boys" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 143} onClick={(event) => handleListItemClick(event, 143)}>
                <ListItemText primary="Baby Girls" />
            </ListItem></Link>
            <Link to="/diapering"><ListItem className={classes.buttons} button selected={selectedIndex === 144} onClick={(event) => handleListItemClick(event, 144)}>
                <ListItemText primary="DIAPERING</Link>" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 145} onClick={(event) => handleListItemClick(event, 145)}>
                <ListItemText primary="Disposable Diapers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 146} onClick={(event) => handleListItemClick(event, 146)}>
                <ListItemText primary="Diaper Bags" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 147} onClick={(event) => handleListItemClick(event, 147)}>
                <ListItemText primary="Wipes & Holders" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 148} onClick={(event) => handleListItemClick(event, 148)}>
                <ListItemText primary="BABY & TODDLER TOYS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 149} onClick={(event) => handleListItemClick(event, 149)}>
                <ListItemText primary="Activity Play Centers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 150} onClick={(event) => handleListItemClick(event, 150)}>
                <ListItemText primary="Music & Sound" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 151} onClick={(event) => handleListItemClick(event, 151)}>
                <ListItemText primary="Bath Toys" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 152} onClick={(event) => handleListItemClick(event, 152)}>
                <ListItemText primary="BATHING & SKIN CARE" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 153} onClick={(event) => handleListItemClick(event, 153)}>
                <ListItemText primary="Washcloths & Towels" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 154} onClick={(event) => handleListItemClick(event, 154)}>
                <ListItemText primary="Grooming & Healthcare Kits" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 155} onClick={(event) => handleListItemClick(event, 155)}>
                <ListItemText primary="Skin Care" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 156} onClick={(event) => handleListItemClick(event, 156)}>
                <ListItemText primary="Bathing Tubs & Seats" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 157} onClick={(event) => handleListItemClick(event, 157)}>
                <ListItemText primary="Bathroom Safety" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 158} onClick={(event) => handleListItemClick(event, 158)}>
                <ListItemText primary="FEEDING" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 160} onClick={(event) => handleListItemClick(event, 160)}>
                <ListItemText primary="Bibs & Burp Cloths" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 161} onClick={(event) => handleListItemClick(event, 161)}>
                <ListItemText primary="Breastfeeding" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 162} onClick={(event) => handleListItemClick(event, 162)}>
                <ListItemText primary="Bottle-Feeding" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 163} onClick={(event) => handleListItemClick(event, 163)}>
                <ListItemText primary="Pacifiers & Accessories" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 164} onClick={(event) => handleListItemClick(event, 164)}>
                <ListItemText primary="Food Storage" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 165} onClick={(event) => handleListItemClick(event, 165)}>
                <ListItemText primary="Highchairs & Booster Seats" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 166} onClick={(event) => handleListItemClick(event, 166)}>
                <ListItemText primary="Solid Feeding" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 167} onClick={(event) => handleListItemClick(event, 167)}>
                <ListItemText primary="GEAR" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 168} onClick={(event) => handleListItemClick(event, 168)}>
                <ListItemText primary="Backpacks & Carriers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 169} onClick={(event) => handleListItemClick(event, 169)}>
                <ListItemText primary="Swings, Jumpers & Bouncers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 170} onClick={(event) => handleListItemClick(event, 170)}>
                <ListItemText primary="Walkers" />
            </ListItem></Link>
            
        </List>

    );
}

export default BabyProducts;