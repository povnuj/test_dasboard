'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import GreenSquareButton from "../Buttons/GreenSquareButton";
import { useContext } from "react";
import { useAppSelector, useAppDispatch } from '@/store/hooks'

const MGBtnContainer = styled(Box,{
    name: 'MGBtnContainer',
    slot: 'root',
})(({}) => ({
    
}));

export default function GBtnContainer() {
  const buttons = useAppSelector((state) => state.mainPage!.greenButtons)

  return (
    <MGBtnContainer>
      { buttons.map((el) =>
        <GreenSquareButton key={el.name} buttonProps={el}  /> 
      )}
    </MGBtnContainer>
  );
}