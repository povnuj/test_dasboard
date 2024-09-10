'use client'
import { Colors } from "@/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";

const MTransperentGreenButton = styled(Button,{
    name: 'MTransperentGreenButton',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    // width: '50px'
}));

interface ButtonProps{
    buttonProps: {
       name: string;
    }
}

export default function TransperedGreenButton(props: ButtonProps) {
    return (
        <Link href={'/cart'}style={{textDecoration: 'none'}}>
            <MTransperentGreenButton >
                {props.buttonProps.name}
            </MTransperentGreenButton>
        </Link>
    );
}