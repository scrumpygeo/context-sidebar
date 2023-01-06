import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // add state and methods

  return (
    <AppContext.Provider>{children}</AppContext.Provider>
  )
}

export { AppContext, AppProvider }