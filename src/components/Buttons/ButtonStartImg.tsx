"use client";
import { styled, Button } from "@/lib/barrel";
import Image from "next/image";
import Link from "next/link";

const MButtonStartImg = styled(Button, {
  name: "MButtonStartImg",
  slot: "root",
})(({}) => ({}));
interface ButtonProps {
  name: string;
  url: string;
  color: string;
  img: string;
}

export default function ButtonStartImg(props: ButtonProps) {
  return (
    <Link href={props.url}>
      <MButtonStartImg>
        <Image src={props.img} alt="sbtn_Logo" width={28} height={28} />
        {props.name}
      </MButtonStartImg>
    </Link>
  );
}
