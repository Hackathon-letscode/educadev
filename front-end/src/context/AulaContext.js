import { createContext, useContext, useState} from "react"

const AulaContext = createContext()

export function AulaProvider({children}) {
    const [aula, setAula] = useState({})
    return <AulaContext.Provider value={{aula, setAula}}>
        {children}
    </AulaContext.Provider>
}

export function useAulas() {
    const context = useContext(AulaContext)
    const {aula, setAula} = context
    return (
        [aula, setAula]
    )
}

export default AulaContext