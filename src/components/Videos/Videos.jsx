import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "../index";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.channelId && <ChannelCard channelDetail={video} />}
          {video.id.videoId && <VideoCard video={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
