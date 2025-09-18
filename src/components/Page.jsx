import { useContext, useEffect } from "react";
import { reactpic, api, javascript, css, weather, todo, linkedin, github, instagram, telegram } from "../assets/images";
import { LangContext } from "../context/LangContext";


const Page = () => {
  const { words, lang } = useContext(LangContext);
  useEffect(() => {
    document.body.classList.remove('ru', 'en');
    document.body.classList.add(lang);
  }, [lang]);
  return (
    <>
      <div className="container">
        <div className="section__one" id='about'>
        <div className="section__one-title">
          {/* <img src={picture} className='section__one-image' alt="Picture" /> */}
          <h1>{words.about.hi[lang]}</h1>
          </div>
          <h2 className="section__one-name">{words.about.name[lang]}</h2>
          <h3 className="section__one-subtitle">{words.about.subtitle[lang]}</h3>
          <p className="section__one-text">{words.about.desc[lang]}</p>
        </div>
      </div>

        <div className="section__two" id='skills'>
          <section class="section__two-content">
            <h2 className='section__two-title'>{words.skills.title[lang]}</h2>
            <div className="section__two-cards">
              <div className="section__two-card">
                <img src={css} alt="" />
                <div className="section__two-card-content">
                  <h3>HTML5 + CSS3/SCSS</h3>
                  <p>{words.skills.css[lang]}</p>
                  <a href="#" className="section__two-btn">{words.learn[lang]}</a>
                </div>
              </div>
              <div className="section__two-card">
                <img src={javascript} alt="" />
                <div className="section__two-card-content">
                  <h3>Javascript + Typescript</h3>
                  <p>{words.skills.js[lang]}</p>
                  <a href="#" className="section__two-btn">{words.learn[lang]}</a>
                </div>
              </div>
              <div className="section__two-card">
                <img src={reactpic} alt="" />
                <div className="section__two-card-content">
                  <h3>React, Redux, Vue.js </h3>
                  <p>{words.skills.react[lang]}</p>
                  <a href="#" className="section__two-btn">{words.learn[lang]}</a>
                </div>
              </div>
              <div className="section__two-card">
                <img src={api} className='api' alt="" />
                <div className="section__two-card-content">
                  <h3>Axios/fetch, JSON </h3>
                  <p>{words.skills.api[lang]}</p>
                  <a href="#" className="section__two-btn">{words.learn[lang]}</a>
                </div>
              </div>
            </div>
          </section>
        </div>


        <section className="section__three" id='projects'>
          <div className="section__three-content">
          <h1 className="section__three-maintitle">{words.projects.title[lang]}</h1>
            <div className="section__three-block">
              <div className="section__three-text">
                <h3 className="section__three-subtitle">{words.projects.featured[lang]}</h3>
                <h2 className="section__three-title">Weather.app</h2>
                <div className="section__three-card">
                <p className="section__three-description">
                  {words.projects.description[lang]}
                </p>
                </div>
              </div>
              <div className="section__three-image">
                <img src={weather} alt="" />
              </div>
            </div>

            <div className="section__three-block reverse">
              <div className="section__three-image">
                <img src={todo} alt="" />
              </div>
              <div className="section__three-text">
                <h3 className="section__three-subtitle">{words.projects.featured[lang]}</h3>
                <h2 className="section__three-title">To-Do list</h2>
                <div className="section__three-card">
                <p className="section__three-description">
                {words.projects.description2[lang]}
                </p>
                </div>
              </div>
            </div>
          </div>
        </section>


      <div className="section__four" id='contact'>
        <section className="section__four-content">
          <div className="section__four-title">{words.contacts.title[lang]}</div>
            <div className="section__four-text">
            {words.contacts.text[lang]}
            </div>
              <div className="section__four-email">
                sdshirin2016@gmail.com, +998991234567
            </div>
            <div className="section__four-socials">
              <a href=""><img src={linkedin} alt="" /></a>
              <a href=""><img src={github} alt="" /></a>
              <a href=""><img src={instagram} alt="" /></a>
              <a href=""><img src={telegram} alt="" /></a>
            </div>
        </section>
      </div>
    </>
  )
}

export default Page
