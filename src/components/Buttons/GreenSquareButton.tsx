'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";
// import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
// import { useTheme } from '@mui/material/styles';

const MGreenSquareButton = styled(Button,{
    name: 'MGreenSquareButton',
    slot: 'root',
})(({}) => ({

}));

interface ButtonProps{
    buttonProps:{
        name: string,
        url: string, 
        img: string,
    }
}

export default function GreenSquareButton(props: ButtonProps) {
    
    return (
        <Link href={props.buttonProps.url} style={{textDecoration: 'none'}}>
            <MGreenSquareButton>
                <Typography className="title" variant="buttonGreenText">{props.buttonProps.name}</Typography>
                <div className="img_container">
                    <Image src={props.buttonProps.img} alt="ico" width={120} height={150} />
                </div>
            </MGreenSquareButton>
        </Link>
    );
}