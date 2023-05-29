import React from 'react'
import { Box, Stack } from "@mui/material";
import {VideoCard , ChannelCard} from './index'

const Videos = ({videos , direction}) => {
      if(!videos?.length) return "loading...";

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}> 
    {videos.map((item , i) => (
       <Box key={i}>
       {item.id.videoId && <VideoCard video={item}></VideoCard>}

        {item.id.channelId && <ChannelCard channel={item}></ChannelCard>}
      </Box>
    ))}
      
    </Stack>
  )
}

export default Videos
