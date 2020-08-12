import React from 'react';
import LandingLayout from './layouts/LandingLayout';

import {CSSReset, ThemeProvider} from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider>
      <CSSReset/>
      <LandingLayout/>
    </ThemeProvider>
    
  );
}

export default App;
