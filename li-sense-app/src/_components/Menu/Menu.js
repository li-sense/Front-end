import React from "react";
import "./menu.css";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
  
const menu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  return (
    <div

    >
      
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        MENU
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >/
        <MenuItem onClick={handleClose}>Página Inicial</MenuItem>
        <MenuItem onClick={handleClose}>Categorias</MenuItem>
        <MenuItem onClick={handleClose}>Promoções</MenuItem>
        <MenuItem onClick={handleClose}>Conta</MenuItem> 
        <MenuItem onClick={handleClose}>Pesquisar</MenuItem>
        <MenuItem onClick={handleClose}>Tornar-se vendedor</MenuItem>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      
      
      </Menu>
    </div>
  );
};
  
export default menu;