"use client";
import {
  NavMenu,
  BrandSection,
  NavSearch,
  ButtonStartImg,
  CartButton,
  NavMobileMenu,
  CContainer,
  Box,
  styled,
  useAppSelector,
} from "@/lib/barrel";
import useMediaQuery, {UseMediaQueryOptions} from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MNavBar = styled(Box, {
  name: "MNavBar",
  slot: "root",
})(({}) => ({}));

export default function NavBar() {
  const theme = useTheme();
  const options: UseMediaQueryOptions = {
    noSsr: true,
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const nav = useAppSelector((state) => state.navigation.nav);

  const renderDesctopMenu = (
    <CContainer>
      <div className="top_container">
        <BrandSection {...nav.contacts!} />
        <div className="search_container">
          <NavSearch />
        </div>
        <div className="btn_container">
          <ButtonStartImg {...nav.buttons!} />
          <CartButton />
        </div>
      </div>
      <div className="bottom_container">
        <NavMenu buttons={nav.menu!} />
      </div>
    </CContainer>
  );

  const renderMobileMenu = (
    <>
      <CContainer>
        <BrandSection {...nav.contacts!} />
      </CContainer>
      <div>
        <NavMobileMenu buttons={nav.menu!} />
      </div>
    </>
  );

  return (
    <MNavBar>{isMobile ? renderMobileMenu : renderDesctopMenu}</MNavBar>
  );
}
