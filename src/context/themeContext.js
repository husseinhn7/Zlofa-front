import React , {useState  ,createContext} from "react";


const ThemeContext = createContext("")

export default ThemeContext

export const ThemeProvider = ({ children}) => {
    const setTheme = (newTheme) => {
         setValue(oldTheme =>{return  {...oldTheme , ...newTheme}})
    }

    
    const [Value , setValue] = useState({lightTheme : true , setTheme})
    
    return (
        <ThemeContext.Provider value={Value}>
            {children}
        </ThemeContext.Provider>
    )

}