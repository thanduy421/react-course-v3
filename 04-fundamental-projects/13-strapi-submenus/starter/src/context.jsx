import { useState, createContext, useContext  } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectPageID, setSelectPageID] = useState(null);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <AppContext.Provider value={
            {
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            selectPageID,
            setSelectPageID,
            }
        }>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}