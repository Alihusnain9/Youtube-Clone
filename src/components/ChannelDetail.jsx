import React, { useEffect, useState } from "react";
import FetchFromAPI from "../util/FetchAPI";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchResults = async () => {
      const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetails(data?.items[0]);

      const videosData = await FetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box
        sx={{
          height: { md: "300px", xs: "200px" },
          zIndex: 10,
          background:
            "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChannelCard
          channelDetail={channelDetails}
          marginTop={{ md: "365px", xs: "250px" }}
        />
      </Box>
      <Box display="flex" p={2} sx={{ marginTop: "160px" }}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos Videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
