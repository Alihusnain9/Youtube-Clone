import { Stack } from "@mui/material";
import React from "react";
import Logo from "../util/constant";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      zIndex={1}
      alignItems="center"
      p={2}
      direction="row"
      sx={{
        position: "sticky",
        top: "0px",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" height={45} />
      </Link>
      <SearchBar width={{ xs: "2rem" }} />
    </Stack>
  );
};

export default Navbar;
