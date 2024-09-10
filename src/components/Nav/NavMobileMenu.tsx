'use client'
import {
  NavSearch,
  CartButton,
  CContainer,
  styled,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@/lib/barrel";
import { useRouter } from 'next/navigation'
import React from "react";

const MNavMobileMenu = styled(Box,{
    name: 'MNavMobileMenu',
    slot: 'root',
})(({}) => ({}));
interface Buttons{
  buttons: 
      {
      name: string;
      url: string;
  }[];
}


export default function NavMobileMenu(props: Buttons) {
    const route = useRouter();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
            <MNavMobileMenu>
              <CContainer>
                <div className="container">
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      {props.buttons.map((button, index) =>
                        <MenuItem key={button.name} onClick={()=>{route.push(button.url); handleClose()}}>{button.name}</MenuItem>
                      )}
                    </Menu>
                  </div>
                  <NavSearch />
                  <div className="btn_container">
                    <CartButton />
                    <CartButton />
                  </div>
                </div>
              </CContainer>  
            </MNavMobileMenu>
    );
}