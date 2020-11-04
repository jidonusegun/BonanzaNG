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
  
function Sports () {
    const classes = useStyles();
  
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
        <List component="nav" aria-label="secondary mailbox folder">

            <Link to="/cardiotraining"><ListItem className={classes.buttons} button selected={selectedIndex === 343} onClick={(event) => handleListItemClick(event, 343)}>
                    <ListItemText primary="CARDIO TRAINING" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 344} onClick={(event) => handleListItemClick(event, 344)}>
                    <ListItemText primary="Exercise Bikes" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 345} onClick={(event) => handleListItemClick(event, 345)}>
                    <ListItemText primary="Treadmills" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 346} onClick={(event) => handleListItemClick(event, 346)}>
                    <ListItemText primary="Elliptical Trainers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 347} onClick={(event) => handleListItemClick(event, 347)}>
                    <ListItemText primary="STRENGTH TRAINING EQUIPMENT" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 348} onClick={(event) => handleListItemClick(event, 348)}>
                    <ListItemText primary="Core & Abdominal Trainers" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 349} onClick={(event) => handleListItemClick(event, 349)}>
                    <ListItemText primary="Dumbbells" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 350} onClick={(event) => handleListItemClick(event, 350)}>
                    <ListItemText primary="Bars" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 351} onClick={(event) => handleListItemClick(event, 351)}>
                    <ListItemText primary="ACCESSORIES" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 352} onClick={(event) => handleListItemClick(event, 352)}>
                    <ListItemText primary="Exercise Bands" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 353} onClick={(event) => handleListItemClick(event, 353)}>
                    <ListItemText primary="Exercise Mats" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 354} onClick={(event) => handleListItemClick(event, 354)}>
                    <ListItemText primary="Jump Ropes" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 355} onClick={(event) => handleListItemClick(event, 355)}>
                    <ListItemText primary="Sports Clothing" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 356} onClick={(event) => handleListItemClick(event, 356)}>
                    <ListItemText primary="TEAM SPORTS" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 357} onClick={(event) => handleListItemClick(event, 357)}>
                    <ListItemText primary="Basketball" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 358} onClick={(event) => handleListItemClick(event, 358)}>
                    <ListItemText primary="Team Sport Accessories" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 359} onClick={(event) => handleListItemClick(event, 359)}>
                    <ListItemText primary="Tennis & Racquet Sports" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 360} onClick={(event) => handleListItemClick(event, 360)}>
                    <ListItemText primary="Swimming" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.buttons} button selected={selectedIndex === 361} onClick={(event) => handleListItemClick(event, 361)}>
                    <ListItemText primary="OUTDOOR & ADVENTURE" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 362} onClick={(event) => handleListItemClick(event, 362)}>
                    <ListItemText primary="Cycling" />
            </ListItem></Link>
            <Link to="/womens"><ListItem className={classes.button} button selected={selectedIndex === 363} onClick={(event) => handleListItemClick(event, 363)}>
                    <ListItemText primary="Running" />
            </ListItem></Link>

        </List>

    );
}

export default Sports;