import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../util/constant";
import "./style.css";
const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        height: { sx: "auto", md: "95%" },
        overflowY: "auto",
      }}
      className="Stack"
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{ 
            background: category.name === selectedCategory && "#FC1503",
          }}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            className="first"
            style={{
              // marginRight: '15px',
              color: category.name === selectedCategory ? "white" : "",
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
