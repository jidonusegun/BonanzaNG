import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Register from './Register';
import ForgottenPassword from './ForgottenPassword';
import { useFormik } from "formik";
import { bonanzaContext } from '../context/BonanzaContext';

const useStyles = makeStyles((theme) => ({
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
    },
    container: {
        width: "500px",
        padding: "20px",
        [theme.breakpoints.down('md')]: {
            width: "300px",
            padding: "10px 0px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "200px",
            padding: "10px 0px",
        },
    },
    flex: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            display: "block",
        },
    },
    register:{
        color: theme.palette.success,
    },
    center: {
        paddingTop: "20px",
    },
    cursor: {
        cursor: "pointer",
        color: "red",
    },
    colorRed: {
        color: "red",
    },
    forgottenPassword: {
        color: "blue",
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            marginTop: "20px",
        },
    }
  }));


  const validate = values => {
    const errorMsg = "Must be 20 characters or less";
    const errors = {};
    if (!values.login) {
        errors.login = "Required";
    } else if (values.login.length > 20) {
        errors.login = errorMsg;
    }
    
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length > 20) {
        errors.password = errorMsg;
    }
  
    return errors;
  };

function Login() {
    const classes = useStyles()

    const { openDialogRegister, handleClickOpenDialogRegister, handleCloseDialogRegister, 
        openDialogForgotten, handleClickOpenDialogForgotten, handleCloseDialogForgotten 
    } = useContext(bonanzaContext);

    const formik = useFormik({
        initialValues: {
            login: "",
            password: ""
        },
        validate,
        onSubmit: values => {
          alert("Form submitted successfully");
        }
    });

    return(
            <div className={classes.container}>
                <Dialog
                    open={openDialogRegister}
                    onClose={handleCloseDialogRegister}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
                    <DialogContent>
                        <Register />
                    </DialogContent>
                </Dialog>


                <Dialog
                    open={openDialogForgotten}
                    onClose={handleCloseDialogForgotten}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Enter your email"}</DialogTitle>
                    <DialogContent>
                        <ForgottenPassword />
                    </DialogContent>
                </Dialog>
                <form onSubmit={formik.handleSubmit}>
                    
                    <input className={classes.input} onChange={formik.handleChange} value={formik.values.login}
                    type="email" id="login" name="login" placeholder="Email"/>
                    {formik.errors.login ? <div className={classes.colorRed}>{formik.errors.login}</div> : null}
                    <br/>

                    <input className={classes.input} onChange={formik.handleChange} value={formik.values.password}
                    type="password" id="password" name="password" placeholder="Password"/>
                    {formik.errors.password ? <div className={classes.colorRed}>{formik.errors.password}</div> : null}
                    <br/>

                    <div className={classes.flex}>
                        <div>
                            <input type="checkbox" name="rememberme" />Remember me
                        </div>
                        <span className={classes.forgottenPassword} onClick={handleClickOpenDialogForgotten}>
                            Forgotten Password?</span>
                    </div>
                    <Button variant="contained" color="secondary" type="submit" >Login</Button>
                    <div className={classes.center}>Don't have an account? 
                    <span onClick={handleClickOpenDialogRegister} className={classes.cursor}> Register</span></div>
                </form>
            </div>
    )
}

export default Login;