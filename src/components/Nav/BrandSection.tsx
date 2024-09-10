'use client'
import {
    PhoneButton,
    Box,
    styled,
  } from "@/lib/barrel";
import Image from 'next/image'
import Link from "next/link";

const MBrandSection = styled(Box,{
    
    name: 'MBrandSection',
    slot: 'root',
})(({theme}) => ({}));

interface NavContact {
  location: string,
  locationUrl: string, 
  phone: string
}

export default function BrandSection(props: NavContact) {

    return (
            <MBrandSection>
                <Link href='/'>
                  <Image src={'/assets/brand/Brand_Logo.svg'} alt="Logo" width={301} height={68}  />
                </Link>
                <div className="phone_container">
                  <PhoneButton  img={'/assets/ico/location2.svg'} name={props.location} url={props.locationUrl} />
                  <PhoneButton  img={'/assets/ico/phone2.svg'} name={props.phone} url={`tel:${props.phone}`} />
                </div>
            </MBrandSection>
    );
}