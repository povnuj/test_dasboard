'use client'
import { Box, Container, styled, Typography } from "@mui/material";
import CContainer from "../Conatiners/CContainer";
import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link from "next/link";
import Image from "next/image";
import FooSocialBtn from "./FooSocialBtn";

const MFooterContacts = styled(Box,{
    name: 'MFooterContacts',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

interface ContactsProps {
    data:{
        phones: {
            name: string;
            tel1: string;
            tel2: string;
            tel3: string;
          };
          social: {
            name: string;
            social_list: {
                url: string; 
                img: string;
              }[];
          };
    };
};


export default function FooterContacts(props: ContactsProps) {
    const theme = useTheme();
    const options: UseMediaQueryOptions = {
      noSsr: true, 
    };

    const formatPhoneNumber = (phoneNumber: string): string => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
        }
        return phoneNumber;
      };

      const tel1 = formatPhoneNumber(props.data.phones.tel1);

    return (
      <MFooterContacts>
        <div>
            <Typography variant="title1" >{props.data.phones.name}</Typography>
            <div className={"foo_contacts"}>
                <div className="ico_container">
                    <Image src={"/assets/ico/foo_phone.svg"} alt="footer phone Logo" width={40} height={40} />
                </div>
                <div className="phone_left">
                    <Link href={`tel:${props.data.phones.tel1}`}>{formatPhoneNumber(props.data.phones.tel1)}</Link>
                    <Link href={`tel:${props.data.phones.tel2}`}>{formatPhoneNumber(props.data.phones.tel2)}</Link>
                </div>
                <div>
                    <Link href={`tel:${props.data.phones.tel3}`}>{formatPhoneNumber(props.data.phones.tel3)}</Link>
                </div>
            </div>
        </div>
        <div className="social_sec">
            <Typography variant="title1" >{props.data.social.name}</Typography>
            <div className="container">
              {props.data.social.social_list.map((el, i) =>
                <FooSocialBtn buttonProps={el} key={'social_key' + i}/>
              )}
                
            </div>
        </div>


      </MFooterContacts>
    );
}