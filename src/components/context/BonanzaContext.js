import React, { createContext, useState } from 'react';

export const bonanzaContext = createContext();

const BonanzaContext = (props) => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickOpenDialog = () => {
        handleCloseDialogRegister()
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const [openDialogRegister, setOpenDialogRegister] = React.useState(false);

    const handleClickOpenDialogRegister = () => {
        handleCloseDialog()
        setOpenDialogRegister(true);
    };

    const handleCloseDialogRegister = () => {
        setOpenDialogRegister(false);
    };

    const [openDialogForgotten, setOpenDialogForgotten] = React.useState(false);

    const handleClickOpenDialogForgotten = () => {
        setOpenDialogForgotten(true);
    };

    const handleCloseDialogForgotten = () => {
        setOpenDialogForgotten(false);
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

	return (
            <bonanzaContext.Provider value={{ mobileOpen, handleDrawerToggle, openDialog, handleClickOpenDialog,
                handleCloseDialog, openDialogRegister, handleClickOpenDialogRegister,
                handleCloseDialogRegister, anchorEl, handleClick, handleClose, openDialogForgotten,
                handleClickOpenDialogForgotten, handleCloseDialogForgotten }}>
				{props.children}
			</bonanzaContext.Provider>
		)

}

export default BonanzaContext;