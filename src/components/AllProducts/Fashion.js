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
  
function Fashion () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">

            <Link to="/womensfashion"><ListItem className={classes.buttons} button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                <ListItemText primary="WOMEN'S FASHION" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                <ListItemText primary="Clothing "/>
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
                <ListItemText primary="Shoes "/>
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
                <ListItemText primary="Accessories "/>
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 6} onClick={(event) => handleListItemClick(event, 6)}>
                <ListItemText primary="Jewelry "/>
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 7} onClick={(event) => handleListItemClick(event, 7)}>
                <ListItemText primary="Handbags & Wallets" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 8} onClick={(event) => handleListItemClick(event, 8)}>
                <ListItemText primary="Underwear & Sleepwear" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 9} onClick={(event) => handleListItemClick(event, 9)}>
                <ListItemText primary="Maternity" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 10} onClick={(event) => handleListItemClick(event, 10)}>
                <ListItemText primary="Dresses" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 11} onClick={(event) => handleListItemClick(event, 11)}>
                <ListItemText primary="Traditional" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 12} onClick={(event) => handleListItemClick(event, 12)}>
                <ListItemText primary="Beach & Swimwear" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 13} onClick={(event) => handleListItemClick(event, 13)}>
                <ListItemText primary="Flats" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 14} onClick={(event) => handleListItemClick(event, 14)}>
                <ListItemText primary="BOYS" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 15} onClick={(event) => handleListItemClick(event, 15)}>
                <ListItemText primary="Accessories" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 16} onClick={(event) => handleListItemClick(event, 16)}>
                <ListItemText primary="Clothing" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 17} onClick={(event) => handleListItemClick(event, 17)}>
                <ListItemText primary="Shoes" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 18} onClick={(event) => handleListItemClick(event, 18)}>
                <ListItemText primary="MEN'S FASHION" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 19} onClick={(event) => handleListItemClick(event, 19)}>
                <ListItemText primary="Clothing" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 20} onClick={(event) => handleListItemClick(event, 20)}>
                <ListItemText primary="Shoes" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 21} onClick={(event) => handleListItemClick(event, 21)}>
                <ListItemText primary="Accessories" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 22} onClick={(event) => handleListItemClick(event, 22)}>
                <ListItemText primary="Underwear & Sleepwear" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 23} onClick={(event) => handleListItemClick(event, 23)}>
                <ListItemText primary="Traditional & Cultural Wear" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 24} onClick={(event) => handleListItemClick(event, 24)}>
                <ListItemText primary="T-Shirts" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 25} onClick={(event) => handleListItemClick(event, 25)}>
                <ListItemText primary="Polo Shirts" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 26} onClick={(event) => handleListItemClick(event, 26)}>
                <ListItemText primary="Trousers & Chinos" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 27} onClick={(event) => handleListItemClick(event, 27)}>
                <ListItemText primary="Sneakers" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 28} onClick={(event) => handleListItemClick(event, 28)}>
                <ListItemText primary="Jewelry" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 29} onClick={(event) => handleListItemClick(event, 29)}>
                <ListItemText primary="Jerseys" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 31} onClick={(event) => handleListItemClick(event, 31)}>
                <ListItemText primary="GIRLS" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 32} onClick={(event) => handleListItemClick(event, 32)}>
                <ListItemText primary="Accessories" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 33} onClick={(event) => handleListItemClick(event, 33)}>
                <ListItemText primary="Clothing" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 34} onClick={(event) => handleListItemClick(event, 34)}>
                <ListItemText primary="Shoes" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 35} onClick={(event) => handleListItemClick(event, 35)}>
                <ListItemText primary="WATCHES" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 36} onClick={(event) => handleListItemClick(event, 36)}>
                <ListItemText primary="Men's Watches" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 37} onClick={(event) => handleListItemClick(event, 37)}>
                <ListItemText primary="Women's Watches" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 38} onClick={(event) => handleListItemClick(event, 38)}>
                <ListItemText primary="SUNGLASSES" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 39} onClick={(event) => handleListItemClick(event, 39)}>
                <ListItemText primary="Men's Sunglasses" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 40} onClick={(event) => handleListItemClick(event, 40)}>
                <ListItemText primary="Women's Sunglasses" />
            </ListItem></Link>

            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 41} onClick={(event) => handleListItemClick(event, 41)}>
                <ListItemText primary="TOP BRANDS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 42} onClick={(event) => handleListItemClick(event, 42)}>
                <ListItemText primary="David Wej" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 43} onClick={(event) => handleListItemClick(event, 43)}>
                <ListItemText primary="Zara" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 44} onClick={(event) => handleListItemClick(event, 44)}>
                <ListItemText primary="Nike" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 45} onClick={(event) => handleListItemClick(event, 45)}>
                <ListItemText primary="Casio" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 46} onClick={(event) => handleListItemClick(event, 46)}>
                <ListItemText primary="Puma" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 47} onClick={(event) => handleListItemClick(event, 47)}>
                <ListItemText primary="Defacto" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 48} onClick={(event) => handleListItemClick(event, 48)}>
                <ListItemText primary="Citizen" />
            </ListItem></Link>  
        </List>

    );
}

export default Fashion;