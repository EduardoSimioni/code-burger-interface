import PropTypes from 'prop-types'
import React, { createContext, useState, useContext } from 'react'

export const ModeContext = createContext({})

export function ModeProvider({ children }) {
  const [mode, setMode] = useState('light')

  const changeMode = async data => {
    if (data.target.checked === true) {
      setMode('dark')
    } else if (data.target.checked === false) {
      setMode('light')
    }
  }

  return (
    <ModeContext.Provider
      value={{
        changeMode,
        mode
      }}
    >
      {children}
    </ModeContext.Provider>
  )
}

export const useMode = () => {
  const context = useContext(ModeContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }

  return context
}

ModeProvider.propTypes = {
  children: PropTypes.node
}
