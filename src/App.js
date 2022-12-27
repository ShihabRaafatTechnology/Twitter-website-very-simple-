import { Stack } from '@mui/system';
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Add from "./components/Add";
import { useState } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';

function App() {
  const[mode, setMode] = useState("light");

  const darkTheme = createTheme({
      palette:{
          mode: mode
      }
  })
  return (
   <>
      <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
              <Navbar setMode={setMode} mode={mode}/>
              <Stack direction="row" spacing={4} justifyContent="center">
                  <Sidebar setMode={setMode} mode={mode}/>
                  <Feed/>
                  <Rightbar/>
              </Stack>
              <Add/>
          </Box>
      </ThemeProvider>
   </>
  );
}

export default App;
