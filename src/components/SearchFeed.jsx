import React, { useEffect, useState } from "react";
import { Video } from "./";
import FetchFromAPI from "../util/FetchAPI";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const SearchFeed = () => {
  const [Videos, setVideos] = useState([]);

  const { searchTerm } = useParams();
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        sx={{ color: "white", fontWeight: "bold", marginBottom: "5px" }}
      >
        Search Results for: <span style={{ color: "red" }}>{searchTerm}</span>{" "}
        videos
      </Typography>
      <Video Videos={Videos} />
    </Box>
  );
};

export default SearchFeed;
