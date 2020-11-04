import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Login from './Auth/Login';
import Register from './Auth/Register';
import MenuIcon from '@material-ui/icons/Menu';
import { bonanzaContext } from './context/BonanzaContext';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(1),
      },
    },
    input: {
      margin: "5px 20px 5px 120px",
      [theme.breakpoints.up('md')]: {
        width: "48%",
      },
      [theme.breakpoints.down('md')]: {
        width: "35%",
        margin: "5px 10px 5px 120px"
      },
      [theme.breakpoints.down('sm')]: {
        width: "60%",
        margin: "5px 20px 5px 10px",
      },
    },
    margin: {
      [theme.breakpoints.up('lg')]: {
        margin: "5px 20px",
      },
      [theme.breakpoints.up('md')]: {
        margin: "5px 5px",
      },
      [theme.breakpoints.down('sm')]: {
        margin: "5px 20px",
      },
    },
    popperDiv: {
      width: "230px",  
      padding: "10px", 
      backgroundColor: "white", 
      textAlign: "left"
    },
}))


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

function Navbar(props) {
  const classes = useStyles();

  const { handleDrawerToggle, openDialog, handleClickOpenDialog,
    handleCloseDialog, openDialogRegister, handleClickOpenDialogRegister,
    handleCloseDialogRegister, anchorEl, handleClick, handleClose } = useContext(bonanzaContext);


    const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
          <DialogContent>
            <Login />
          </DialogContent>
        </Dialog>

        <Dialog
          open={openDialogRegister}
          onClose={handleCloseDialogRegister}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Register"}</DialogTitle>
          <DialogContent>
            <Register />
          </DialogContent>
        </Dialog>
      <ElevationScroll {...props}>
        <AppBar>
            <Toolbar>
                <Hidden smUp>
                  <MenuIcon onClick={handleDrawerToggle} style={{cursor: "pointer"}}/>
                </Hidden>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    spacing={3}
                >
                    Bonanza
                </IconButton>
                
                <div className={classes.input}>
                    <Input fullWidth disableUnderline={true} style={{borderRadius: "50px", padding: "5px 10px", border: "1px solid grey", backgroundColor: "whitesmoke"}}
                    id="input-with-icon-adornment"
                    placeholder="Search anything"
                    startAdornment={
                    <InputAdornment position="start">
                        <SearchSharpIcon />
                    </InputAdornment>
                    }
                    />
                </div>
                
                <div onMouseOver={handleClick} onMouseOut={handleClose} className={classes.margin}>
                    <Button color="inherit">Help <ExpandMoreIcon /> </Button>

                        <Popper id={id} disablePortal open={open} anchorEl={anchorEl} transition className="dropdown">
                            <div className={classes.popperDiv} >
                              <ul className="category">
                                  <li onClick={handleClose} >For Buyers</li>
                                  <li onClick={handleClose} >For Suppliers</li>
                                  <li onClick={handleClose} >Submit a Dispute</li>
                                  <li onClick={handleClose} >Report IPR Infringement</li>
                                  <li onClick={handleClose} >Report Abuse</li>
                              </ul>
                          </div>
                        </Popper>
                </div>
                
                <Hidden smDown>
                    <Button color="inherit" onClick={handleClickOpenDialog}>Login</Button>
                    <div className="vl"></div>
                    <Button color="inherit" onClick={handleClickOpenDialogRegister}>Register</Button>
                    <Button variant="contained" color="secondary" onClick={handleClickOpenDialog} >
                      Add Product</Button>
                </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      
    </React.Fragment>
  );
}
export default Navbar;