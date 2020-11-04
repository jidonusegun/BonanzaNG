import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
            padding: "10px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "200px",
            padding: "10px",
        },
    },
    flex: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
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
  }));


  const validate = values => {
    const errorMsg = "Must be 20 characters or less";
    const errors = {};
    if (!values.login) {
        errors.login = "Required";
    } else if (values.login.length > 20) {
        errors.login = errorMsg;
    }
    
  
    return errors;
  };

function ForgottenPassword() {
    const classes = useStyles()

    const { handleCloseDialogForgotten  } = useContext(bonanzaContext);

    const formik = useFormik({
        initialValues: {
            login: "",
        },
        validate,
        onSubmit: values => {
          alert("A verification link has been sent to your mail");
        }
    });

    return(
            <div className={classes.container}>
                
                <form onSubmit={formik.handleSubmit}>
                    <input className={classes.input} onChange={formik.handleChange} value={formik.values.login}
                    type="email" id="login" name="login" placeholder="Email"/>
                    {formik.errors.login ? <div className={classes.colorRed}>{formik.errors.login}</div> : null}
                    <br/>

                    <Button variant="contained" color="secondary" type="submit" onClick={
                        handleCloseDialogForgotten
                    }>Login</Button>
                </form>
            </div>
    )
}

export default ForgottenPassword;