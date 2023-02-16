import { useContext , createContext } from "react";


const TestContext = createContext()

export default TestContext


export const TestProvider = ({children}) =>{
    return (
        <TestContext.Provider value={{ "test" : "test value 1"}}  >
        
        {children}
        </TestContext.Provider>

    )
}




