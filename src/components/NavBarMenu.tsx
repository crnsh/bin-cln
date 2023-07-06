import { Menu, Button, Container } from "@mui/material"
import NavBarMenuItem from "./NavBarMenuItem";
import React from "react";

interface MenuItem {
  svgElement : React.ReactNode,
  title : string,
  description : string
}

export default function NavBarMenu ({ children, menuItems } : {
  children : React.ReactNode
  menuItems : MenuItem[]
}) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // create a menu which contains all the menu items which enabled when 
  // hovered over

  return (
    <div>
      <Button
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleMouseOver}
        onClick={handleMouseOver}
        variant="text"
        sx={{
          textTransform: 'none',
          color: 'text.primary'
          
        }}
      >
        {children}
      </Button>
      <Menu
        id="nav-bar-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <Container
        sx={{
          p: 1
        }}
      >
       {menuItems.map((element) => (
        <NavBarMenuItem
          svgElement={element.svgElement}
          title={element.title}
          description={element.description}
        />
       ))} 
      </Container>
      </Menu>
    </div>
  );

}