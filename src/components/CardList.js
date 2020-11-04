import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import firstView from './img/firstView.jpg';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
// import SpeedDial from '@material-ui/lab/SpeedDial';
// import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
// import ShareIcon from '@material-ui/icons/Share';
import TextField from '@material-ui/core/TextField';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';

  const useStyles = makeStyles((theme) => ({
    media: {
        height: 140,
    },
    textfield: {
        padding: "0px",
        fontSize: "10px",
        backgroundColor: "white",
        border: "1px solid grey",
        marginTop: "10px",
        borderBottom: "none",
        '&:hover': {
            border: "1px solid grey",
            borderBottom: "none",
          }
    },
    speedDial: {
      position: 'absolute',
      '&.MuiSpeedDial-directionUp' : {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        padding: theme.spacing(0),
        margin: theme.spacing(0),
      },
    },
    copyLink: {
        fontSize: "9px",
        margin: "5px 0px",
    },
    card: {
        border: "none",
        marginRight: "20px"
    },
  }));

//   const actions = [
//     { icon: <FacebookIcon />, name: 'Facebook' },
//     { icon: <TwitterIcon />, name: 'Twitter' },
//     { icon: <InstagramIcon />, name: 'Instagram' },
//   ];


  const labels = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
  };

function CardList () {
    const classes = useStyles();
    // const [direction] = React.useState('up');
    // const [open, setOpen] = React.useState(false);
    // const [openfirst, setOpenfirst] = React.useState(false);
    // const [opensecond, setOpensecond] = React.useState(false);
    // const [openthird, setOpenthird] = React.useState(false);
    // const [hidden] = React.useState(false);

    const [value, setValue] = React.useState(4.5);
    const [hover] = React.useState(-1);
    const [valuesecond, setValuesecond] = React.useState(4.5);
    const [valuefirst, setValuefirst] = React.useState(4.5);
    const [valuethird, setValuethird] = React.useState(4.5);
    // const [counter, setCounter] = React.useState("i")

    // const handleClickCounter = () => {
    //     for(i = 0; i <= 0; i++) {
    //         setCounter(i);
    //     }
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClosefirst = () => {
    //     setOpenfirst(false);
    // };

    // const handleOpenfirst = () => {
    //     setOpenfirst(true);
    // };


    // const handleClosesecond = () => {
    //     setOpensecond(false);
    // };

    // const handleOpensecond = () => {
    //     setOpensecond(true);
    // };

    // const handleClosethird = () => {
    //     setOpenthird(false);
    // };

    // const handleOpenthird = () => {
    //     setOpenthird(true);
    // };
    return(
        <div>
        <Grid container spacing={3} style={{width: "96%", margin: "20px 20px 50px 20px"}} >
            <Grid item xs={12} sm={12} md={5} lg={3} xl={3} className={classes.card}>
                <Card>
                    <CardActionArea style={{border: "none", marginRight: "10px"}}>
                        <CardMedia
                        className={classes.media}
                        image={firstView}
                        title="Contemplative Reptile"
                        style={{border: "1px solid gray"}} 
                        />
                        <CardContent style={{height: "200px"}} >
                        <h3 style={{marginTop: "0px"}} className="hCard" >
                            Microsoft Excel - Excel from Beginner to Advanced
                        </h3>
                        <Typography variant="body2" color="textSecondary" component="div">
                            <div className="spanCard">
                            <span>Kyle Pew, Office Newb LLC</span>
                            </div>
                            <span style={{color: "#be5a0e",fontSize: "14px", fontWeight: "bold"}} >
                            {value !== null && <span ml={2}>{labels[hover !== -1 ? hover : value]}</span>} </span>
                            <Rating name="half-rating" value={value} precision={0.5} 
                            onChange={(event, newValue) => {setValue(newValue) }}
                            style={{fontSize: "14px"}}  />
                            <span style={{fontSize: "14px", fontWeight: "bold"}} >( 11,200)</span><br/>
                            <span style={{color: "black", fontWeight: "bold"}} >$12.99<del style={{color: "grey", marginLeft: "5px", 
                            fontWeight: "normal"}} >$129.99</del></span><br/>
                            <span style={{fontWeight: "bold", borderRadius: "3px", backgroundColor: "#ffe799",
                            border: "none", fontSize: "10px", padding: "4px"}} >BESTSELLER</span>
                            
                            
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <TextField id="filled-read-only-input" fullWidth defaultValue="" 
                InputProps={{readOnly: true,}} margin="none" className={classes.textfield} />
                <Button variant="contained" color="primary" size="small" 
                className={classes.copyLink}>Copy Link</Button>
            </Grid>

            <Grid item xs={12} sm={12} md={5} lg={3} xl={3} className={classes.card}>
                <Card>
                    <CardActionArea style={{border: "none", marginRight: "10px"}}>
                        <CardMedia
                        className={classes.media}
                        image={firstView}
                        title="Contemplative Reptile"
                        style={{border: "1px solid gray"}} 
                        />
                        <CardContent style={{height: "200px"}} >
                        <h3 style={{marginTop: "0px"}} className="hCard" >
                            Microsoft Excel - Excel from Beginner to Advanced
                        </h3>
                        <Typography variant="body2" color="textSecondary" component="div">
                            <div className="spanCard">
                            <span>Kyle Pew, Office Newb LLC</span>
                            </div>
                            <span style={{color: "#be5a0e",fontSize: "14px", fontWeight: "bold"}} >
                            {valuefirst !== null && <span ml={2}>{labels[hover !== -1 ? hover : valuefirst]}</span>} </span>
                            <Rating name="half-rating" value={valuefirst} precision={0.5} 
                            onChange={(event, newValue) => {setValuefirst(newValue) }}
                            style={{fontSize: "14px"}} />    
                            <span style={{fontSize: "14px", fontWeight: "bold"}} > (22,423)</span><br/>
                            <span style={{color: "black", fontWeight: "bold"}} >$12.99<del style={{color: "grey", marginLeft: "5px", 
                            fontWeight: "normal"}} >$129.99</del></span><br/>
                            <span style={{fontWeight: "bold", borderRadius: "3px", backgroundColor: "#ffe799",
                            border: "none", fontSize: "10px", padding: "4px"}} >BESTSELLER</span>
                            
                                
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <TextField id="filled-read-only-input" fullWidth defaultValue="" 
                InputProps={{readOnly: true,}} margin="none" className={classes.textfield} />
                <Button variant="contained" color="primary" size="small" 
                className={classes.copyLink}>Copy Link</Button>
            </Grid>

            <Grid item xs={12} sm={12} md={5} lg={3} xl={3} className={classes.card}>
                <Card>
                    <CardActionArea style={{border: "none", marginRight: "10px"}}>
                        <CardMedia
                        className={classes.media}
                        image={firstView}
                        title="Contemplative Reptile"
                        style={{border: "1px solid gray"}} 
                        />
                        <CardContent style={{height: "200px"}} >
                        <h3 style={{marginTop: "0px"}} className="hCard" >
                            Microsoft Excel - Excel from Beginner to Advanced
                        </h3>
                        <Typography variant="body2" color="textSecondary" component="div">
                            <div className="spanCard">
                            <span>Kyle Pew, Office Newb LLC</span>
                            </div>
                            <span style={{color: "#be5a0e",fontSize: "14px", fontWeight: "bold"}} >
                            {valuesecond !== null && <span ml={2}>{labels[hover !== -1 ? hover : valuesecond]}</span>} </span>
                            <Rating name="half-rating" value={valuesecond} precision={0.5} 
                            onChange={(event, newValue) => {setValuesecond(newValue) }}
                            style={{fontSize: "14px"}} />
                            <span style={{fontSize: "14px", fontWeight: "bold"}} > (22,423)</span><br/>
                            <span style={{color: "black", fontWeight: "bold"}} >$12.99<del style={{color: "grey", marginLeft: "5px", 
                            fontWeight: "normal"}} >$129.99</del></span><br/>
                            <span style={{fontWeight: "bold", borderRadius: "3px", backgroundColor: "#ffe799",
                            border: "none", fontSize: "10px", padding: "4px"}} >BESTSELLER</span>
                            
                                
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <TextField id="filled-read-only-input" fullWidth defaultValue="" 
                InputProps={{readOnly: true,}} margin="none" className={classes.textfield} />
                <Button variant="contained" color="primary" size="small" 
                className={classes.copyLink}>Copy Link</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={3} xl={3} className={classes.card}>
                <Card>
                    <CardActionArea style={{border: "none", marginRight: "10px"}}>
                        <CardMedia
                        className={classes.media}
                        image={firstView}
                        title="Contemplative Reptile"
                        style={{border: "1px solid gray"}} 
                        />
                        <CardContent style={{height: "200px"}} >
                        <h3 style={{marginTop: "0px"}} className="hCard" >
                            Microsoft Excel - Excel from Beginner to Advanced
                        </h3>
                        <Typography variant="body2" color="textSecondary" component="div">
                            <div className="spanCard">
                            <span>Kyle Pew, Office Newb LLC</span>
                            </div>
                            <span style={{color: "#be5a0e",fontSize: "14px", fontWeight: "bold"}} >
                            {valuethird !== null && <span ml={2}>{labels[hover !== -1 ? hover : valuethird]}</span>} </span>
                            <Rating name="half-rating" value={valuethird} precision={0.5} 
                            onChange={(event, newValue) => {setValuethird(newValue) }}
                            style={{fontSize: "14px"}} />
                            <span style={{fontSize: "14px", fontWeight: "bold"}} > (22,423)</span><br/>
                            <span style={{color: "black", fontWeight: "bold"}} >$12.99<del style={{color: "grey", marginLeft: "5px", 
                            fontWeight: "normal"}} >$129.99</del></span><br/>
                            <span style={{fontWeight: "bold", borderRadius: "3px", backgroundColor: "#ffe799",
                            border: "none", fontSize: "10px", padding: "4px"}} >BESTSELLER</span>
                            
                                
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <TextField id="filled-read-only-input" fullWidth defaultValue="" 
                InputProps={{readOnly: true,}} margin="none" className={classes.textfield} />
                <Button variant="contained" color="primary" size="small" 
                className={classes.copyLink}>Copy Link</Button>
            </Grid>
        </Grid>
        </div>                
    )
}

export default CardList;