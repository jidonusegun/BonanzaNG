import React from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import AllCategories from './AllCategories';
import FashionCategory from './FashionCategory';
import ComputingCategory from './ComputingCategory';
import AutomobileCategory from './AutomobileCategory';
import BabyProductsCategory from './BabyProductsCategory';
import ElectronicsCategory from './ElectronicsCategory';
import GamingCategory from './GamingCategory';
import HealthAndBeautyCategory from './HealthAndBeautyCategory';
import HomeAndOfficeCategory from './HomeAndOfficeCategory';
import OtherCategories from './OtherCategories';
import PhonesAndTabletsCategory from './PhonesAndTabletsCategory';
import SportingGoodsCategory from './SportingGoodsCategory';
import SupermarketCategory from './SupermarketCategory';
import CARCARE from './AutomobileCategory/CARCARE';
import APPARELANDACCESSORIES from './BabyProductsCategory/APPARELANDACCESSORIES';
import DIAPERING from './BabyProductsCategory/DIAPERING';
import COMPUTERS from './ComputingCategory/COMPUTERS';
import DATASTORAGE from './ComputingCategory/DATASTORAGE';
import TELEVISIONANDVIDEO from './ElectronicsCategory/TELEVISIONANDVIDEO';
import WOMENSFASHION from './FashionCategory/WOMENSFASHION';
import PLAYSTATION from './GamingCategory/PLAYSTATION';
import MAKEUP from './HealthAndBeautyCategory/MAKEUP';
import HOMEANDKITCHEN from './HomeAndOfficeCategory/HOMEANDKITCHEN';
import TOYSANDGAMES from './OtherCategories/TOYSANDGAMES';
import MOBILEPHONES from './PhonesAndTabletsCategory/MOBILEPHONES';
import TABLETS from './PhonesAndTabletsCategory/TABLETS';
import CARDIOTRAINING from './SportingGoodsCategory/CARDIOTRAINING';
import FOODCUPBOARD from './SupermarketCategory/FOODCUPBOARD';
import Toolbar from '@material-ui/core/Toolbar';
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  
    function ScrollTop(props) {
        const { children, window } = props;
        const classes = useStyles();

        const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
        });
    
        const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


function Content(props) {
    return (
        
        <React.Fragment>
          <Toolbar id="back-to-top-anchor" />
              <Switch>
                <Route path="/" component={AllCategories} />
                <Route path="/fashioncategory" component={FashionCategory} />
                <Route path="/computingcategory" component={ComputingCategory} />
                <Route path="/automobilecategory" component={AutomobileCategory} />
                <Route path="/babyproductscategory" component={BabyProductsCategory} />
                <Route path="/electronicscategory" component={ElectronicsCategory} />
                <Route path="/gamingcategory" component={GamingCategory} />
                <Route path="/healthandbeautycategory" component={HealthAndBeautyCategory} />
                <Route path="/homeandofficecategory" component={HomeAndOfficeCategory} />
                <Route path="/phonesandtabletscategory" component={PhonesAndTabletsCategory} />
                <Route path="/sportingoodscategory" component={SportingGoodsCategory} />
                <Route path="/supermarketcategory" component={SupermarketCategory} />
                <Route path="/othercategories" component={OtherCategories} />
                <Route path="/carcare" component={CARCARE} />
                <Route path="/apparelandaccessories" component={APPARELANDACCESSORIES} />
                <Route path="/diapering" component={DIAPERING} />
                <Route path="/computers" component={COMPUTERS} />
                <Route path="/datastorage" component={DATASTORAGE} />
                <Route path="/televisionvideo" component={TELEVISIONANDVIDEO} />
                <Route path="/womensfashion" component={WOMENSFASHION} />
                <Route path="/playstation" component={PLAYSTATION} />
                <Route path="/makeup" component={MAKEUP} />
                <Route path="/homeandkitchen" component={HOMEANDKITCHEN} />
                <Route path="/toysandgames" component={TOYSANDGAMES} />
                <Route path="/tablets" component={TABLETS} />
                <Route path="/mobilephones" component={MOBILEPHONES} />
                <Route path="/cardiotraining" component={CARDIOTRAINING} />
                <Route path="/foodcupboard" component={FOODCUPBOARD} />
              </Switch>

            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>


    )
}

export default Content;
