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
  
function Super () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">

            <Link to="/foodcupboard"><ListItem className={classes.buttons} button selected={selectedIndex === 208} onClick={(event) => handleListItemClick(event, 208)}>
                <ListItemText primary="FOOD CUPBOARD" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 209} onClick={(event) => handleListItemClick(event, 209)}>
                <ListItemText primary="Grains & Rice" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 210} onClick={(event) => handleListItemClick(event, 210)}>
                <ListItemText primary="Pasta" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 211} onClick={(event) => handleListItemClick(event, 211)}>
                <ListItemText primary="Noodles" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 212} onClick={(event) => handleListItemClick(event, 212)}>
                <ListItemText primary="Breakfast Foods" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 213} onClick={(event) => handleListItemClick(event, 213)}>
                <ListItemText primary="Herbs, Spices & Seasoning" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 214} onClick={(event) => handleListItemClick(event, 214)}>
                <ListItemText primary="Flours & Meals" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 215} onClick={(event) => handleListItemClick(event, 215)}>
                <ListItemText primary="Malt Drinks" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 216} onClick={(event) => handleListItemClick(event, 216)}>
                <ListItemText primary="Coffee" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 217} onClick={(event) => handleListItemClick(event, 217)}>
                <ListItemText primary="Water" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 218} onClick={(event) => handleListItemClick(event, 218)}>
                <ListItemText primary="Cooking Oil" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 219} onClick={(event) => handleListItemClick(event, 219)}>
                <ListItemText primary="Juices" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 220} onClick={(event) => handleListItemClick(event, 220)}>
                <ListItemText primary="Soft Drinks" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 221} onClick={(event) => handleListItemClick(event, 221)}>
                <ListItemText primary="Canned & Packaged Foods" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 222} onClick={(event) => handleListItemClick(event, 222)}>
                <ListItemText primary="Candy & Chocolate" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 223} onClick={(event) => handleListItemClick(event, 223)}>
                <ListItemText primary="Syrups, Sugars & Sweeteners" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 224} onClick={(event) => handleListItemClick(event, 224)}>
                <ListItemText primary="BABY PRODUCTS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 225} onClick={(event) => handleListItemClick(event, 225)}>
                <ListItemText primary="Disposable Diapers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 226} onClick={(event) => handleListItemClick(event, 226)}>
                <ListItemText primary="Bottle Feeding" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 227} onClick={(event) => handleListItemClick(event, 227)}>
                <ListItemText primary="Wipes & Refills" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 228} onClick={(event) => handleListItemClick(event, 228)}>
                <ListItemText primary="HOUSEHOLD CLEANING" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 229} onClick={(event) => handleListItemClick(event, 229)}>
                <ListItemText primary="Laundry" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 230} onClick={(event) => handleListItemClick(event, 230)}>
                <ListItemText primary="Air Fresheners" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 231} onClick={(event) => handleListItemClick(event, 231)}>
                <ListItemText primary="Toilet Paper & Wipes" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 232} onClick={(event) => handleListItemClick(event, 232)}>
                <ListItemText primary="Bathroom Cleaners" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 233} onClick={(event) => handleListItemClick(event, 233)}>
                <ListItemText primary="Dishwashing" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 234} onClick={(event) => handleListItemClick(event, 234)}>
                <ListItemText primary="Disinfectant Wipes" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 235} onClick={(event) => handleListItemClick(event, 235)}>
                <ListItemText primary="BEER, WINE & SPIRITS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 236} onClick={(event) => handleListItemClick(event, 236)}>
                <ListItemText primary="Beers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 237} onClick={(event) => handleListItemClick(event, 237)}>
                <ListItemText primary="Vodka" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 238} onClick={(event) => handleListItemClick(event, 238)}>
                <ListItemText primary="Red Wine" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 239} onClick={(event) => handleListItemClick(event, 239)}>
                <ListItemText primary="Champagne & Sparkling Wine" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 240} onClick={(event) => handleListItemClick(event, 240)}>
                <ListItemText primary="White Wine" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 241} onClick={(event) => handleListItemClick(event, 241)}>
                <ListItemText primary="Whiskey" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 242} onClick={(event) => handleListItemClick(event, 242)}>
                <ListItemText primary="Liquors" />
            </ListItem></Link>
            
        </List>

    );
}

export default Super;