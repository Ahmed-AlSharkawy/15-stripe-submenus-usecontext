import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubMenueOpen, setIsSubMenueOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleSubMenue = (text, position) => {
    if (!isSubMenueOpen) {
      const currentPage = sublinks.find((link) => link.page === text)
      setPage(currentPage)
      setLocation(position)
    }
    setIsSubMenueOpen(!isSubMenueOpen)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubMenueOpen,
        location,
        page,
        toggleSidebar,
        toggleSubMenue,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
