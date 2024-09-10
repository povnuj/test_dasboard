'use client'
import { Colors } from "@/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";

const MFooSocialBtn = styled(Button,{
    name: 'MFooSocialBtn',
    slot: 'root',
})(({}) => ({}));
interface ButtonProps{
    buttonProps: {
        url: string, 
        img: string,
    }
}

export default function FooSocialBtn(props: ButtonProps) {
    return (
        <Link href={props.buttonProps.url}>
            <MFooSocialBtn>
                <Image src={props.buttonProps.img} alt="sbtn_Logo" width={22} height={22} />
            </MFooSocialBtn>
        </Link>
    );
}