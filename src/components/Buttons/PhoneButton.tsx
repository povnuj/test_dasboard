'use client'

import { Colors } from "@/theme/colors";
import { Box, Button, Container, ListItem, styled } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";

const MPhoneButton = styled(Button,{
    
    name: 'MPhoneButton',
    slot: 'root',
})(({theme}) => ({
    //color: Colors.main,

}));
interface btnProps {
  name: string,
  url: string,
  img: string,
}

export default function PhoneButton(props: btnProps) {

    return (
      <Link href={props.url} style={{textDecoration: 'none', color: Colors.grey}}>
        <MPhoneButton>
          {props.img? <Image src={props.img} alt="Button Logo" width={11} height={11} /> : ''}
          {props.name}
        </MPhoneButton>
      </Link>
    );
}