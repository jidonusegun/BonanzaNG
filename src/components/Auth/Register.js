import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Login from './Login';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useFormik } from "formik";
import { bonanzaContext } from '../context/BonanzaContext';

const useStyles = makeStyles((theme) => ({
    container: {
        width: "500px",
        padding: "20px",
        [theme.breakpoints.down('md')]: {
          width: "300px",
          padding: "10px",
      },
      [theme.breakpoints.down('sm')]: {
          width: "200px",
          padding: "10px",
      },
    },
    flex: {
        color: theme.palette.default,
        marginBottom: "20px",
        justifyContent: "start",
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
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
    },
    colorRed: {
        color: "red",
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

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 20) {
      errors.firstName = errorMsg;
    }
  
    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = errorMsg;
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = "Required";
      } else if (values.phoneNumber.length > 20) {
        errors.phoneNumber = errorMsg;
      }
    
      if (!values.rememberme) {
        errors.rememberme = "Required";
      } else if (values.rememberme.length > 20) {
        errors.rememberme = errorMsg;
      }
  
    return errors;
  };

function Register() {
    const classes = useStyles()

    const { openDialog, handleClickOpenDialog, handleCloseDialog 
    } = useContext(bonanzaContext);
    
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            rememberme: ""
        },
        validate,
        onSubmit: values => {
          alert("Form submitted successfully");
        }
    });  

    return(
            <div className={classes.container}>
                <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Register"}</DialogTitle>
                    <DialogContent>
                        <Login />
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

                    <input className={classes.input} onChange={formik.handleChange} value={formik.values.firstName}
                    type="text" id="firstName" name="firstName" placeholder="First Name"/>
                    {formik.errors.firstName ? <div className={classes.colorRed}>{formik.errors.firstName}</div> : null}
                    <br/>

                    <input className={classes.input} onChange={formik.handleChange} value={formik.values.lastName}
                    type="text" id="lastName" name="lastName" placeholder="Last Name"/>
                    {formik.errors.lastName ? <div className={classes.colorRed}>{formik.errors.lastName}</div> : null}
                    <br/>
                    
                    <input className={classes.input} onChange={formik.handleChange} value={formik.values.phoneNumber}
                    type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number (digits only)"/>
                    {formik.errors.phoneNumber ? <div className={classes.colorRed}>{formik.errors.phoneNumber}</div> : null}
                    <br/>

                    <TextareaAutosize aria-label="minimum height" id="address" rowsMin={4} col={10} fullWidth placeholder="Address" /><br/>
                    <div className={classes.flex}>
                        <input onChange={formik.handleChange} value={formik.values.rememberme}
                        type="checkbox" id="rememberme" name="rememberme" />I agree with<b> rules</b>
                        {formik.errors.rememberme ? <div className={classes.colorRed}>{formik.errors.rememberme}</div> : null}
                    </div>
                    <Button variant="contained" color="secondary"  type="submit">Register</Button>
                    <div className={classes.center}>Already have an account? 
                    <span onClick={handleClickOpenDialog} className={classes.cursor}> Login</span></div>
                </form>
            </div>
    )
}

export default Register;