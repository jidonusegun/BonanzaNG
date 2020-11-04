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
  
function Health () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">

            <Link to="/makeup"><ListItem className={classes.buttons} button selected={selectedIndex === 243} onClick={(event) => handleListItemClick(event, 243)}>
                <ListItemText primary="MAKE UP" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 244} onClick={(event) => handleListItemClick(event, 244)}>
                <ListItemText primary="Concealers & Color Correctors" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 245} onClick={(event) => handleListItemClick(event, 245)}>
                <ListItemText primary="Foundation" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 246} onClick={(event) => handleListItemClick(event, 246)}>
                <ListItemText primary="Powder" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 247} onClick={(event) => handleListItemClick(event, 247)}>
                <ListItemText primary="Lip Gloss" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 248} onClick={(event) => handleListItemClick(event, 248)}>
                <ListItemText primary="Lip Liner" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 249} onClick={(event) => handleListItemClick(event, 249)}>
                <ListItemText primary="Lipstick" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 250} onClick={(event) => handleListItemClick(event, 250)}>
                <ListItemText primary="Eyeliner & Kajal" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 251} onClick={(event) => handleListItemClick(event, 251)}>
                <ListItemText primary="Eyeshadow" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 253} onClick={(event) => handleListItemClick(event, 253)}>
                <ListItemText primary="Mascara" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 254} onClick={(event) => handleListItemClick(event, 254)}>
                <ListItemText primary="FRAGRANCES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 255} onClick={(event) => handleListItemClick(event, 255)}>
                <ListItemText primary="Women's" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 256} onClick={(event) => handleListItemClick(event, 256)}>
                <ListItemText primary="Men's" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 257} onClick={(event) => handleListItemClick(event, 257)}>
                <ListItemText primary="HAIR CARE" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 258} onClick={(event) => handleListItemClick(event, 258)}>
                <ListItemText primary="Hair & Scalp Care" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 259} onClick={(event) => handleListItemClick(event, 259)}>
                <ListItemText primary="Hair Accessories" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 260} onClick={(event) => handleListItemClick(event, 260)}>
                <ListItemText primary="Hair Cutting Tools" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 261} onClick={(event) => handleListItemClick(event, 261)}>
                <ListItemText primary="Shampoo & Conditioner" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 262} onClick={(event) => handleListItemClick(event, 262)}>
                <ListItemText primary="Wigs & Accessories" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 263} onClick={(event) => handleListItemClick(event, 263)}>
                <ListItemText primary="PERSONAL CARE" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 264} onClick={(event) => handleListItemClick(event, 264)}>
                <ListItemText primary="Feminine Care" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 265} onClick={(event) => handleListItemClick(event, 265)}>
                <ListItemText primary="Contraceptives & Lubricants" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 266} onClick={(event) => handleListItemClick(event, 266)}>
                <ListItemText primary="Body" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 267} onClick={(event) => handleListItemClick(event, 267)}>
                <ListItemText primary="ORAL CARE" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 268} onClick={(event) => handleListItemClick(event, 268)}>
                <ListItemText primary="Dental Care kits" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 269} onClick={(event) => handleListItemClick(event, 269)}>
                <ListItemText primary="Dental Floss & Picks" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 270} onClick={(event) => handleListItemClick(event, 270)}>
                <ListItemText primary="Teeth Whitening" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 271} onClick={(event) => handleListItemClick(event, 271)}>
                <ListItemText primary="Toothbrushes" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 272} onClick={(event) => handleListItemClick(event, 272)}>
                <ListItemText primary="Toothpaste" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 273} onClick={(event) => handleListItemClick(event, 273)}>
                <ListItemText primary="Breath Freshners" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 274} onClick={(event) => handleListItemClick(event, 274)}>
                <ListItemText primary="HEALTH CARE" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 275} onClick={(event) => handleListItemClick(event, 275)}>
                <ListItemText primary="Face Protection" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 276} onClick={(event) => handleListItemClick(event, 276)}>
                <ListItemText primary="Thermometers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 277} onClick={(event) => handleListItemClick(event, 277)}>
                <ListItemText primary="Hand Sanitizers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 278} onClick={(event) => handleListItemClick(event, 278)}>
                <ListItemText primary="Lab, Safety & Work Gloves" />
            </ListItem></Link>

        </List>

    );
}

export default Health;