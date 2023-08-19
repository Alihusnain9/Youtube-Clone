import { ClassNames } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import FetchFromAPI from "../util/FetchAPI";
import { CheckCircle } from "@mui/icons-material";
import { Video } from "./";
const videoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    FetchFromAPI(`search?part=snippet&realtedToVideoId${id}&typw\e=video`).then(
      (data) => setVideo(data.items)
    );
  }, [id]);

  if (!videoDetails?.snippet) return "Loading...";
  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ position: "sticky", top: "86px", width: "100%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              ClassNames="react-player"
              height="70vh"
              width="100%"
              style={{}}
              controls
            />
            <Typography color="#fff" variant="h5" p={2} fontWeight="bold">
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography
                  color="white"
                  variant={{ sm: `sutitle1`, md: `h6` }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ color: "grey", fontSize: "12px", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="centre">
                <Typography>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          px={2}
          py={{ md: 1, xs: 5 }}
        >
          <Video Videos={video} direction={{ md: "column", xs: "row" }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default videoDetail;
