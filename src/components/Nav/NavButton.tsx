'use client'
import {
    Colors,
    styled,
    Button,
  } from "@/lib/barrel";
import Link from "next/link";

const MNavButton = styled(Button,{
    name: 'MNavButton',
    slot: 'root',
})(({}) => ({}));

interface NavButtonName{
    name: string,
    active: boolean
    url: string,
}

export default function NavButton(props: NavButtonName) {
    return (
        <Link href={props.url}>
          <MNavButton  sx={!props.active?{color:  Colors.dark, '&:hover':{background: 'transparent', color: Colors.secondary}}:{}}>
              {props.name}
          </MNavButton>
        </Link>
    );
}