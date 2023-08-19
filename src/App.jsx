import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import {
  Feed,
  ChannelDetail,
  SearchFeed,
  Navbar,
  VideoDetail,
} from "./components";
import { render } from "react-dom";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", color: "white" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
