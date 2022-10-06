import React from 'react';
import LisenseContext from './LisenseContext';

export const LisenseProvider = ({children}) => {


  return (
    <LisenseContext.Provider value={{}}>
      {children}
    </LisenseContext.Provider>
  );
}
