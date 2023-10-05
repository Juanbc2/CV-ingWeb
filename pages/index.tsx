import PercentageBar from "../components/percentageBar";
import Skills from "../components/skills";
import Socials from "../components/socials";
import Description from "../components/description";
import Portfolio from "../components/portfolio";
import Knowledge from "../components/knowledge";
import Education from "../components/education";

const Index = () => {
  return (
    <div className="flex bg-slate-200 font-medium w-screen">
      <aside className="gap-15 px-5 py-2 bg-neutral-50 flex-col flex h-full w-[330px] fixed">
        <section>
          <div className="info-personal">
            <img
              className="foto-personal"
              src="images/profilepic.jpg"
              alt="Profile pic"
            />
            <div className="nombre-persona">
              <span className="primer-nombre">Juan</span>
              <span className="apellido">Calle</span>
            </div>
            <span className="titulo-persona">Fullstack Developer</span>
          </div>
          <br></br>
        </section>
        <hr></hr>
        <section className="contact-me">
          <table>
            <tbody>
              <tr>
                <td>Age:</td>
                <td className="float-right">24</td>
              </tr>
              <tr>
                <td>Residence:</td>
                <td className="float-right">Colombia</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td className="float-right">
                  <a
                    className="text-green-500"
                    href="mailto://jgb_333@hotmail.com"
                  >
                    jgb_333@hotmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td className="float-right">+57 305 329 2351</td>
              </tr>
            </tbody>
          </table>
        </section>
        <hr></hr>
        <section>
          <br></br>
          <h2>
            <b>Languages</b>
          </h2>
          <PercentageBar percentage={80} name="English" />
          <PercentageBar percentage={100} name="Spanish" />
          <br></br>
        </section>
        <hr></hr>
        <section>
          <br></br>
          <h2>
            <b>Programming Languages</b>
          </h2>
          <PercentageBar percentage={80} name="Javascript" />
          <PercentageBar percentage={40} name="Python" />
          <PercentageBar percentage={70} name="Java" />
          <PercentageBar percentage={70} name="C#" />
          <br></br>
        </section>
        <hr></hr>
        <section>
          <br></br>
          <h2>
            <b>Extra Skills</b>
          </h2>
          <Skills name="Teamwork" />
          <Skills name="Problem Solving" />
          <Skills name="Communication" />
          <Skills name="Adaptability" />
        </section>
      </aside>
      <div className="ml-[20%]"></div>
      <main className="max-w-7xl">
        <section>
          <div className="flex justify-center flex-wrap">
            <Description
              title="My Knowledge"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </div>
          <div className="flex justify-center flex-wrap my-10">
            <Knowledge
              title="Web Development"
              text="Blog, E-Commerce"
              image="images/develop.png"
            />
            <Knowledge
              title="UI/UX Design"
              text="Mobile App, Website Design"
              image="images/uiux.png"
            />
            <Knowledge
              title="Sound Design"
              text="Voice Over,Beat Making"
              image="images/sound.png"
            />
            <Knowledge
              title="Game Design"
              text="Character Design, Props & Objects"
              image="images/game-development.png"
            />
            <Knowledge
              title="Photography"
              text="Portrait, Product Photography"
              image="images/camera.png"
            />
          </div>
        </section>
        <section>
          <div className="flex justify-center flex-wrap">
            <Description
              title="Education"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </div>
          <div className="bg-neutral-50">
            <Education
              place="I.E Maestro Fernando Botero"
              role="High School"
              date="Jan 2010 - Nov 2016"
              title="Technical Bachelor"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            <Education
              place="I.E Maestro Fernando Botero"
              role="High School"
              date="Jan 2010 - Nov 2016"
              title="Technical Bachelor"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            <Education
              place="I.E Maestro Fernando Botero"
              role="High School"
              date="Jan 2010 - Nov 2016"
              title="Technical Bachelor"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
        </section>
        <section>
          <div className="flex justify-center flex-wrap">
            <Description
              title="Portfolio"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </div>
          <div className="flex overflow-x-auto w-full">
            <Portfolio
              title="Career Recommendation"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="images/career.png"
              link="https://github.com/dsceafit/ds-squads/tree/main/career-recommendation"
            />
            <Portfolio
              title="Avril App"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="images/avril.png"
              link="https://avrilapp.com"
            />
            <Portfolio
              title="Nashe Car"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="images/Nashecar.png"
            />
            <Portfolio
              title="Security Data"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="images/securityData.png"
              link="https://github.com/Juanbc2/Security-Data-Game"
            />
            <Portfolio
              title="Dr Gato Veterinaria"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="images/drgato.png"
              link="https://dr-gato-veterinaria.web.app"
            />
          </div>
        </section>
        <footer className="text-center p-10 w-full min-w-max m-2 bg-neutral-50">
    2023 All Rights Reversed. Juanbc2
      </footer>
      </main>
      <div className="ml-[4%]"></div>
      <aside className="gap-15 px-5 py-2 right-0 bg-neutral-50 flex-col flex h-full text-center fixed">
        <br></br>
        <h2>
          <b>Socials</b>
        </h2>
        <br></br>
        <Socials name="Github" url="https://github.com/Juanbc2" />
        <Socials
          name="Linkedin"
          url="https://www.linkedin.com/in/juangbcalle/"
        />
        <Socials name="Facebook" url="https://www.facebook.com/juangbcalle/" />
        <Socials
          name="Instagram"
          url="https://www.instagram.com/juangbcalle/"
        />
        <Socials name="Share" url="https://www.google.com/search?q=juanbc2" />
      </aside>
    </div>
  );
};

export default Index;
