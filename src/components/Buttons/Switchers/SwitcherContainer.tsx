"use client";
import React, { Key, useContext, useState } from "react";
import { Box, Container, styled } from "@mui/material";
import SwitcherButton from "./SwitcherButton";
import { SwitcherInterface } from "@/lib/Interfces";

const MSwitcherContainer = styled(Box, {
  name: "MSwitcherContainer",
  slot: "root",
})(({}) => ({}));

export default function SwitcherContainer(props: SwitcherInterface) {

  return (
    <MSwitcherContainer>
      <SwitcherButton isClick={props.isClick} btn1={props.btn1}/>
      <SwitcherButton isClick={props.isClick} btn2={props.btn2}/>
    </MSwitcherContainer>
  );
}
