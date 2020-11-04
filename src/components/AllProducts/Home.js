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
  
function Home () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">   

            <Link to="/homeandkitchen"><ListItem className={classes.buttons} button selected={selectedIndex === 279} onClick={(event) => handleListItemClick(event, 279)}>
                    <ListItemText primary="HOME & KITCHEN" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 280} onClick={(event) => handleListItemClick(event, 280)}>
                    <ListItemText primary="Bath" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 281} onClick={(event) => handleListItemClick(event, 281)}>
                    <ListItemText primary="Bedding" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 282} onClick={(event) => handleListItemClick(event, 282)}>
                    <ListItemText primary="Home Decor" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 283} onClick={(event) => handleListItemClick(event, 283)}>
                    <ListItemText primary="Home Furniture" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 284} onClick={(event) => handleListItemClick(event, 284)}>
                    <ListItemText primary="Vacuums & Floor Care" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 285} onClick={(event) => handleListItemClick(event, 285)}>
                    <ListItemText primary="Wall Art" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 286} onClick={(event) => handleListItemClick(event, 286)}>
                    <ListItemText primary="Cookware" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 287} onClick={(event) => handleListItemClick(event, 287)}>
                    <ListItemText primary="Bakeware" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 288} onClick={(event) => handleListItemClick(event, 288)}>
                    <ListItemText primary="Small Appliances" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 289} onClick={(event) => handleListItemClick(event, 289)}>
                    <ListItemText primary="Cutlery & Knife Accessories" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 290} onClick={(event) => handleListItemClick(event, 290)}>
                    <ListItemText primary="HOME & OFFICE FURNITURE" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 291} onClick={(event) => handleListItemClick(event, 291)}>
                    <ListItemText primary="Kitchen & Dining" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 292} onClick={(event) => handleListItemClick(event, 292)}>
                    <ListItemText primary="Lighting" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 293} onClick={(event) => handleListItemClick(event, 293)}>
                    <ListItemText primary="Stationery" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 294} onClick={(event) => handleListItemClick(event, 294)}>
                    <ListItemText primary="Storage & Organization" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 295} onClick={(event) => handleListItemClick(event, 295)}>
                    <ListItemText primary="OFFICE PRODUCTS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 296} onClick={(event) => handleListItemClick(event, 296)}>
                    <ListItemText primary="Office & School Supplies" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 297} onClick={(event) => handleListItemClick(event, 297)}>
                    <ListItemText primary="Office Furniture & Lighting" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 298} onClick={(event) => handleListItemClick(event, 298)}>
                    <ListItemText primary="Packaging Materials" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 299} onClick={(event) => handleListItemClick(event, 299)}>
                    <ListItemText primary="SMALL APPLIANCES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 300} onClick={(event) => handleListItemClick(event, 300)}>
                    <ListItemText primary="Ironing & Laundry" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 301} onClick={(event) => handleListItemClick(event, 301)}>
                    <ListItemText primary="Kettles" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 302} onClick={(event) => handleListItemClick(event, 302)}>
                    <ListItemText primary="Mixing & Blending" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 303} onClick={(event) => handleListItemClick(event, 303)}>
                    <ListItemText primary="Microwave Ovens" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 304} onClick={(event) => handleListItemClick(event, 304)}>
                    <ListItemText primary="Vacuum Cleaners" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 305} onClick={(event) => handleListItemClick(event, 305)}>
                    <ListItemText primary="Kitchen Bundles" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 306} onClick={(event) => handleListItemClick(event, 306)}>
                    <ListItemText primary="LARGE APPLIANCES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 307} onClick={(event) => handleListItemClick(event, 307)}>
                    <ListItemText primary="Air Conditioners" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 308} onClick={(event) => handleListItemClick(event, 308)}>
                    <ListItemText primary="Cookers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 309} onClick={(event) => handleListItemClick(event, 309)}>
                    <ListItemText primary="Washers & Dryers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 310} onClick={(event) => handleListItemClick(event, 310)}>
                    <ListItemText primary="Fans" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 311} onClick={(event) => handleListItemClick(event, 311)}>
                    <ListItemText primary="Freezers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 312} onClick={(event) => handleListItemClick(event, 312)}>
                    <ListItemText primary="Refrigerators" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 313} onClick={(event) => handleListItemClick(event, 313)}>
                    <ListItemText primary="Dishwashers" />
            </ListItem></Link>

        </List>

    );
}

export default Home;