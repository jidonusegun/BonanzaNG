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
  
function Phones () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">

            <Link to="/mobilephones"><ListItem className={classes.buttons} button selected={selectedIndex === 171} onClick={(event) => handleListItemClick(event, 171)}>
                <ListItemText primary="MOBILE PHONES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 172} onClick={(event) => handleListItemClick(event, 172)}>
                <ListItemText primary="Smartphones" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 173} onClick={(event) => handleListItemClick(event, 173)}>
                <ListItemText primary="Basic Phones" />
            </ListItem></Link>
            <Link to="/tablets"><ListItem className={classes.buttons} button selected={selectedIndex === 174} onClick={(event) => handleListItemClick(event, 174)}>
                <ListItemText primary="TABLETS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 175} onClick={(event) => handleListItemClick(event, 175)}>
                <ListItemText primary="iPads" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 176} onClick={(event) => handleListItemClick(event, 176)}>
                <ListItemText primary="Android Tablets" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 177} onClick={(event) => handleListItemClick(event, 177)}>
                <ListItemText primary="Educational Tablets" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 178} onClick={(event) => handleListItemClick(event, 178)}>
                <ListItemText primary="Tablet Accessories" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 179} onClick={(event) => handleListItemClick(event, 179)}>
                <ListItemText primary="MOBILE ACCESSORIES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 180} onClick={(event) => handleListItemClick(event, 180)}>
                <ListItemText primary="Accessory Kits" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 181} onClick={(event) => handleListItemClick(event, 181)}>
                <ListItemText primary="Adapters" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 182} onClick={(event) => handleListItemClick(event, 182)}>
                <ListItemText primary="Batteries" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 183} onClick={(event) => handleListItemClick(event, 183)}>
                <ListItemText primary="Battery Chargers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 184} onClick={(event) => handleListItemClick(event, 184)}>
                <ListItemText primary="Bluetooth Headsets" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 185} onClick={(event) => handleListItemClick(event, 185)}>
                <ListItemText primary="Cables" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 186} onClick={(event) => handleListItemClick(event, 186)}>
                <ListItemText primary="Car Accessories" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 187} onClick={(event) => handleListItemClick(event, 187)}>
                <ListItemText primary="Chargers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 188} onClick={(event) => handleListItemClick(event, 188)}>
                <ListItemText primary="Earphones & Headsets" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 189} onClick={(event) => handleListItemClick(event, 189)}>
                <ListItemText primary="MicroSD Cards" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 190} onClick={(event) => handleListItemClick(event, 190)}>
                <ListItemText primary="Screen Protectors" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 191} onClick={(event) => handleListItemClick(event, 191)}>
                <ListItemText primary="Selfie Sticks & Tripods" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 192} onClick={(event) => handleListItemClick(event, 192)}>
                <ListItemText primary="Smart Watches" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 193} onClick={(event) => handleListItemClick(event, 193)}>
                <ListItemText primary="TOP SMARTPHONES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 194} onClick={(event) => handleListItemClick(event, 194)}>
                <ListItemText primary="iPhone 11 Pro Max" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 195} onClick={(event) => handleListItemClick(event, 195)}>
                <ListItemText primary="Samsung Galaxy S10" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 196} onClick={(event) => handleListItemClick(event, 196)}>
                <ListItemText primary="iPhone 11" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 197} onClick={(event) => handleListItemClick(event, 197)}>
                <ListItemText primary="Nokia 7.2" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 198} onClick={(event) => handleListItemClick(event, 198)}>
                <ListItemText primary="Huawei Y9 S" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 199} onClick={(event) => handleListItemClick(event, 199)}>
                <ListItemText primary="iPhone XS Max" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 200} onClick={(event) => handleListItemClick(event, 200)}>
                <ListItemText primary="Infinix S5" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 201} onClick={(event) => handleListItemClick(event, 201)}>
                <ListItemText primary="TOP PHONE BRANDS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 202} onClick={(event) => handleListItemClick(event, 202)}>
                <ListItemText primary="Samsung" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 203} onClick={(event) => handleListItemClick(event, 203)}>
                <ListItemText primary="Apple" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 204} onClick={(event) => handleListItemClick(event, 204)}>
                <ListItemText primary="Huawei" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 205} onClick={(event) => handleListItemClick(event, 205)}>
                <ListItemText primary="Nokia" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 206} onClick={(event) => handleListItemClick(event, 206)}>
                <ListItemText primary="Xiaomi" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 207} onClick={(event) => handleListItemClick(event, 207)}>
                <ListItemText primary="Tecno" />
            </ListItem></Link>
            
        </List>

    );
}

export default Phones;