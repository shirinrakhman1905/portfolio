import { useContext } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import LangProvider, { LangContext } from "./context/LangContext";

const App = () => {
  return (
    <LangProvider>
      <Content />
    </LangProvider>
  );
};

const Content = () => {
  const { words, lang } = useContext(LangContext);

  const links = [
    words.aboutNav[lang],
    words.skillsNav[lang],
    words.projectsNav[lang],
    words.contactNav[lang],
  ];

  return (
    <>
      <Header logotext="Portfolio" links={links} />
      <Page />
    </>
  );
};

export default App;



// import { useState, useContext } from "react";
// import Header from "./components/Header";
// import Page from "./components/Page";
// import LangProvider from "./context/LangContext";

// const { words, lang } = useContext(LangContext);

// const App = () => {
//   const [links, setLinks] = useState('About', 'Skills', 'Projects', 'Contact');

//   return (
//     <> 
//       <LangProvider>
//       <Header logotext="Portfolio" links={links} />
//       <Page />
//       </LangProvider>
      
//     </>
//   );
// };

// export default App;
