'use client'
import { Colors } from "@/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";

const MCartButton = styled(Button,{
    name: 'MCartButton',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    // width: '50px'
}));

export default function CartButton() {
    return (
        <Link href={'/cart'}>
            <MCartButton >
                <Image src='/assets/ico/Cart.svg' alt="btn_logo" width={27} height={23} />
            </MCartButton>
        </Link>
    );
}