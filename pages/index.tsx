import PercentageBar from "../components/percentageBar";
import Skills from "../components/skills";
import Socials from "../components/socials";
import Description from "../components/description";
import Portfolio from "../components/portfolio";
import Knowledge from "../components/knowledge";
import Education from "../components/education";

const Index = () => {
  return (
    <div className="flex bg-slate-200 font-medium">
      <aside className="bg-neutral-50 aside-left">
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
                <td className="float-right">jgb_333@hotmail.com</td>
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
          <h2>
            <b>Languages</b>
          </h2>
          <br></br>
          <PercentageBar percentage={80} name="English" />
          <PercentageBar percentage={100} name="Spanish" />
        </section>
        <hr></hr>
        <section>
          <h2>
            <b>Programming Languages</b>
          </h2>
          <br></br>
          <PercentageBar percentage={80} name="Javascript" />
          <PercentageBar percentage={40} name="Python" />
          <PercentageBar percentage={70} name="Java" />
          <PercentageBar percentage={70} name="C#" />
        </section>
        <hr></hr>

        <section>
          <h2>
            <b>Extra Skills</b>
          </h2>
          <br></br>
          <Skills name="Teamwork" />
          <Skills name="Problem Solving" />
          <Skills name="Communication" />
          <Skills name="Adaptability" />
        </section>
        <hr></hr>
      </aside>
      <main className="max-w-7xl">
        <section>
          {/* <Description
            title="My Knowledge"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          /> */}
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
          <div className="flex overflow-x-auto w-full">
            <Portfolio
              title="Career Recommendation"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="images/career.png"
            />
            <Portfolio
              title="Avril App"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="images/avril.png"
            />
            <Portfolio
              title="How to Make Web Templates"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="images/career.png"
            />
            <Portfolio
              title="How to Make Web Templates"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="images/career.png"
            />
            <Portfolio
              title="How to Make Web Templates"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              image="images/career.png"
            />
          </div>
        </section>
      </main>
      <aside className="bg-neutral-50 aside-right">
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
      <footer></footer>
    </div>
  );
};

export default Index;
