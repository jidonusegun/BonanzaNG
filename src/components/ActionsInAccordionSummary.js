import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fashion from './AllProducts/Fashion';
import Automobile from './AllProducts/Automobile';
import BabyProducts from './AllProducts/Automobile';
import Computing from './AllProducts/Computing';
import Electronics from './AllProducts/Electronics';
import Gaming from './AllProducts/Gaming';
import Health from './AllProducts/Health';
import Home from './AllProducts/Home';
import Other from './AllProducts/Other';
import Phones from './AllProducts/Phones';
import Sports from './AllProducts/Sports';
import Super from './AllProducts/Super';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  AccordionSummary: {
      padding: "0px !important",
      margin: "0px",
  },
  checkbox: {
      padding: "0px !important",
      margin: "0px 10px",
  },
  accordionDetails: {
    padding: "0px",
    display: "block",
  },
  lastAccordionSummary: {
    padding: "0px !important",
    margin: "0px",
    [theme.breakpoints.up('md')]: {
      marginBottom: "130px",
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: "330px",
    },
  },
}));

function ActionsInAccordionSummary() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Accordion >
        <AccordionSummary aria-label="Expand" aria-controls="additional-actions1-content"
          id="additional-actions1-header" >
          <FormControlLabel aria-label="Acknowledge" onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/"><Checkbox className={classes.checkbox} /></Link>} label="All Categories" />
        </AccordionSummary>
      </Accordion>

      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-label="Expand"
          aria-controls="additional-actions2-content" id="additional-actions2-header" >
          <FormControlLabel aria-label="Acknowledge" onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="fashioncategory"><Checkbox className={classes.checkbox} /></Link>}
            label="Fashion" />
 
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
          <Fashion />
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/computingcategory"><Checkbox className={classes.checkbox} /></Link>
          }
            label="Computing"
          />
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
          <Computing />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/electronicscategory"><Checkbox className={classes.checkbox} /></Link>}
            label="Electronics"
          />
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
          <Electronics />         
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/gamingcategory"><Checkbox className={classes.checkbox} /></Link>}
            label="Gaming"
          />
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
            <Gaming />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/babyproductscategory"><Checkbox className={classes.checkbox} /></Link>}
            label="Baby Products"
          />
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
          <BabyProducts />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/phonesandtabletscategory"><Checkbox className={classes.checkbox} /></Link>}
            label="Phones & Tablets"
          />
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
          <Phones />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/supermarketcategory"><Checkbox className={classes.checkbox} /></Link>}
            label="Supermarket"
          />
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
          <Super />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/healthandbeautycategory"><Checkbox className={classes.checkbox} /></Link>}
            label="Health & Beauty"
          />

        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
            <Health />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/homeandofficecategory"><Checkbox className={classes.checkbox} /></Link>}
            label="Home & Office"
          />
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
            <Home />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/automobilecategory"><Checkbox className={classes.checkbox} /></Link>}
            label="Automobile"
          />
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
            <Automobile />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/sportingGoodscategory"><Checkbox className={classes.checkbox}  /></Link>}
            label="Sporting Goods"
          />

        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
            <Sports />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.lastAccordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Link to="/othercategories"><Checkbox className={classes.checkbox} /></Link>}
            label="Other categories"
          />
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails} >
            <Other />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ActionsInAccordionSummary;
