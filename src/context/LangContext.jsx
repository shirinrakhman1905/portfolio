import { createContext, useState } from 'react'
import words from '../assets/language'

export const LangContext = createContext(null)

const LangProvider = ({children}) => {
    const [lang, setLang] = useState('en')
  return (
    <LangContext.Provider value={{words, lang, setLang}}>
        {children} 
        </LangContext.Provider>
    

  )
}

export default LangProvider
