'use client'
import { Box, Container, styled } from "@mui/material";
import CContainer from "../Conatiners/CContainer";
import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import FooList from "./FooList";
import FooterContacts from "./FooterContacts";

const MFooBar = styled(Box,{
    name: 'MFooBar',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

export default function FooBar() {
    const theme = useTheme();
    const options: UseMediaQueryOptions = {
      noSsr: true, 
    };
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const footer = useAppSelector((state) => state.navigation.footer)


  

    return (
      <MFooBar>
        <CContainer>
          <Box className={'foo_container'} >
            <FooList data={footer.about} />
            <FooList data={footer.patient} />
            <FooList data={footer.сooperation} />
            <FooterContacts data={footer.contscts} />
          </Box>
        </CContainer>
      </MFooBar>
    );
}