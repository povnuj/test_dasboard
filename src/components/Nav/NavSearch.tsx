"use client";
import {
  styled,
  Box,
} from "@/lib/barrel";
import InputBase from "@mui/material/InputBase";
import Image from "next/image";

const MNavSearch = styled(Box, {
  name: "MNavSearch",
  slot: "root",
})(({}) => ({}));

export default function NavSearch() {

  const StyledInputBase = styled(InputBase)(({ theme }) => ({}));
  return (
    <MNavSearch>
      <div className="ico_container">
        <Image src="/assets/ico/search.svg" alt="Logo" width={18} height={18} />
      </div>
      <StyledInputBase
        placeholder=""
        inputProps={{ "aria-label": "search" }}
      />
    </MNavSearch>
  );
}
