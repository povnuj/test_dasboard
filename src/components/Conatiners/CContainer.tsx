'use client'
import { Box, Button, Container, styled } from "@mui/material";
import { useRouter } from 'next/navigation'
import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

const MСContainer = styled(Container,{
    name: 'MСContainer',
    slot: 'root',
})(({}) => ({
    
}));


export default function СContainer({
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const theme = useTheme();
    const options: UseMediaQueryOptions = {
        noSsr: true, 
    };
    const isXs = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
    const isXl = useMediaQuery(theme.breakpoints.up('xl'));

    return (
    <>
      {isSm || isXs? <MСContainer maxWidth="sm">{children}</MСContainer> : ''}
      {isMd? <MСContainer maxWidth="md">{children}</MСContainer> : ''}
      {isLg? <MСContainer maxWidth="lg">{children}</MСContainer> : ''}
      {isXl? <MСContainer maxWidth="xl" >{children}</MСContainer> : ''}
    </>
    );
  }