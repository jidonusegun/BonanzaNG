import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Content from './Content';
import ActionsInAccordionSummary from './ActionsInAccordionSummary';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { bonanzaContext } from './context/BonanzaContext';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: "100%",
    
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      margin: "5px 0px 5px 20px",
      color: "white",
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
  },
  // necessary for content to be below app bar

  drawerPaper: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      marginTop: "120px",
      paddingTop: "0px",
      background: "#3f51b5",
    },
    [theme.breakpoints.down('sm')]: {
      width: drawerWidth,
      marginTop: "210px",
      paddingTop: "0px",
      background: "#3f51b5",
      height: "100%",
    },
    [theme.breakpoints.down('xs')]: {
      width: drawerWidth,
      marginTop: "237px",
      paddingTop: "0px",
      background: "#3f51b5",
      height: "100%",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "0px",
    paddingTop: "0px",
  },
  category: {
    [theme.breakpoints.up('md')]: {
      color: "white",
      textAlign: "center",
      position: "fixed",
      zIndex: "20",
      backgroundColor: "#3f51b5",
      width: drawerWidth,
      top: "40px",
      paddingTop: "20px",
    },
    [theme.breakpoints.down('sm')]: {
      color: "white",
      textAlign: "center",
      position: "fixed",
      zIndex: "20",
      backgroundColor: "#3f51b5",
      width: drawerWidth,
      top: "60px",
      paddingTop: "20px",
    },
    [theme.breakpoints.down('xs')]: {
      color: "white",
      textAlign: "center",
      position: "fixed",
      zIndex: "20",
      backgroundColor: "#3f51b5",
      width: drawerWidth,
      top: "67px",
      paddingTop: "20px",
    },
  },
  categoryheader: {
    margin: "30px 0px 0px 0px",
    [theme.breakpoints.down('xs')]: {
      fontSize: "30px",
    },
  },
  accordion: {
    width: "100%",
    marginRight: "0px",
    borderRadius: "0px",
  },

}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const container = window !== undefined ? () => window().document.body : undefined;


  const { mobileOpen, handleDrawerToggle, openDialog, handleClickOpenDialog,
    handleCloseDialog, openDialogRegister, handleClickOpenDialogRegister,
    handleCloseDialogRegister } = useContext(bonanzaContext);

  return (
    <div className={classes.root}>

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


      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.category} >
                <Hidden mdUp>
                    <Button color="inherit" onClick={handleClickOpenDialog} >Login</Button>
                    <div className="vlSmall"></div>
                    <Button color="inherit" onClick={handleClickOpenDialogRegister}>Register</Button><br/>
                    <Button variant="contained" color="secondary" onClick={handleClickOpenDialog} >
                      Add Product</Button>
                </Hidden>
              <h1 className={classes.categoryheader} >Category</h1>
            </div>
            <ActionsInAccordionSummary />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div className={classes.category} >
                <Hidden mdUp>
                    <Button color="inherit" onClick={handleClickOpenDialog} >Login</Button>
                    <div className="vlSmall"></div>
                    <Button color="inherit" onClick={handleClickOpenDialogRegister}>Register</Button><br/>
                    <Button variant="contained" color="secondary" onClick={handleClickOpenDialog} >
                      Add Product</Button>
                </Hidden>
              <h1 style={{margin: "30px 0px 0px 0px"}} >Category</h1>
            </div>
            <ActionsInAccordionSummary />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} >
          <Content />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
