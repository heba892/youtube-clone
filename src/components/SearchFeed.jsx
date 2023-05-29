import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import {Videos } from './'
import {fetchFromApi} from '../utils/Fetch'

const SearchFeed = () => {
  const [videos , setvideos] = useState([])
    const { searchTerm } = useParams();

 useEffect(() => {
  fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => setvideos(data.items))
 }, [searchTerm])

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>

       <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
