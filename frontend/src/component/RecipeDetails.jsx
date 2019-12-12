import React from 'react';
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import { borders } from '@material-ui/system';
import { shadows } from '@material-ui/system';
import { typography } from '@material-ui/system';
import { display } from '@material-ui/system';
import { spacing } from '@material-ui/system';

const RecipeDetails = () => {
  return (
  <div style={{ 
  height: '100vh',
  marginTop: '20vh',
  marginBottom: '20vh', }}>
      <Box 
      borderRadius="borderRadius"
      boxShadow={3}
      border={1} 
      borderColor="grey.500"
      display="inline-block"
      component="div"
      p={2}  
      m={2}
      textAlign="center"
      width="90vh" 
      height="50vh">
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      </Box>
      <Box  
      borderRadius="borderRadius"     
      boxShadow={3}
      border={1} 
      borderColor="grey.500"
      display="inline-block"
      component="div" 
      p={2}  
      m={2}
      textAlign="center"
      width="90vh"
      height="50vh">
      {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      </Box>
  </div>

);    
}

export default RecipeDetails;
