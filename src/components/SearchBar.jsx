import { SearchOutlined } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault;
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      className="paper"
      component="form"
      onSubmit={handlesubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input
        className="input"
        type="text"
        style={{ border: "none", outline: "none", fontSize: "16px" }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeholder="Search..."
        value={searchTerm}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
