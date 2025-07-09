import {Box, Button, useColorModeValue} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import CreatePage from "./pages/CreatePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/navbar.jsx";


function App() {
  return (
  <Box minH = {"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
    {/* Nav Bar */}
    <Navbar/>
    <Routes>
      <Route path = "/" element={<HomePage/>}/>
      <Route path = "/create" element={<CreatePage/>}/>
    </Routes>
  <button>Hello World</button>
  </Box> 
  )
}

export default App;

