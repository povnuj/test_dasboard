'use client'
import {
    NavButton,
    styled,
    Box,
  } from "@/lib/barrel";
import { usePathname } from 'next/navigation'

const MNavMenu = styled(Box,{
    name: 'MNavMenu',
    slot: 'root',
})(({}) => ({}));
interface Buttons{
    buttons: {
        name: string;
        url: string;
    }[];
}

export default function NavMenu(props: Buttons) {
    const path = usePathname();
    return (
        <MNavMenu>                                         
            {props.buttons.map((el, index) => 
                <NavButton key={el.name}  name={el.name} url={ el.url} active= {path === el.url? true : false}  />)} 
        </MNavMenu>
    );
}