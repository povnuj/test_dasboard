"use client";
import { Colors } from "@/theme/colors";
import { SwitcherInterface } from "@/lib/Interfces";
import { Button, styled } from "@mui/material";

const MSwitcherButton = styled(Button, {
  name: "MSwitcherButton",
  slot: "root",
})(({}) => ({}));

export default function SwitcherButton(props: SwitcherInterface) {

  const clickHandler = () => {
    if (props.btn2?.active === false || props.btn1?.active === false) props.isClick!();
  };

  return (
    <MSwitcherButton
      onClick={clickHandler}
      sx={
        props.btn1?.active === false || props.btn2?.active === false
          ? {
              background: "transparent",
              color: Colors.secondary,
              "&:hover": { background: "transparent", color: Colors.secondary },
            }
          : {}
      }
    >
      {props.btn1?.name || props.btn2?.name}
    </MSwitcherButton>
  );
}
