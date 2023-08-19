import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SideBar, Video } from "./";
import FetchFromAPI from "../util/FetchAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          px: { sx: 0, md: 2 },
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          display: "flex",
          flexDirection: "column",
          // flex: 1,
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          copyRight 2023 All Rights Reservd
        </Typography> */}
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" sx={{ color: "white", fontWeight: "bold",marginBottom:'5px' }}>
          {selectedCategory}
          <span style={{ color: "red" }}> videos</span>
        </Typography>
          <Video Videos={Videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
