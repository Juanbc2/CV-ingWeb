import PercentageBar from "../components/percentageBar";
import Skills from "../components/skills";
import Socials from "../components/socials";

const Index = () => {
  return (
    <div className="flex justify-between w-screen bg-slate-200">
      <aside className="bg-neutral-50 aside-left">
        <section>
          <div className="info-personal">
            <img
              className="foto-personal"
              src="profilepic.jpg"
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
            <tr >
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
          </table>
        </section>
        <hr></hr>
        <section>
          <h2><b>Languages</b></h2>
          <br></br>
          <PercentageBar percentage={80} name="English" />
          <PercentageBar percentage={100} name="Spanish" />
        </section>
        <hr></hr>
        <section>
          <h2><b>Programming Languages</b></h2>
          <br></br>
          <PercentageBar percentage={80} name="Javascript" />
          <PercentageBar percentage={40} name="Python" />
          <PercentageBar percentage={70} name="Java" />
          <PercentageBar percentage={70} name="C#" />

        </section>
        <hr></hr>
        
        <section>
          <h2><b>Extra Skills</b></h2>
          <br></br>
          <Skills name="Teamwork" />
          <Skills name="Problem Solving" />
          <Skills name="Communication" />
          <Skills name="Adaptability" />
        </section>
        <hr></hr>
      </aside>
      <main >
        <div>hola</div>
      </main>
      <aside className="bg-neutral-50 aside-right">
        <br></br>
        <h2><b>Socials</b></h2>
        <br></br>
        <Socials name="Github" url="https://github.com/Juanbc2" />
        <Socials name="Linkedin" url="https://www.linkedin.com/in/juangbcalle/" />
        <Socials name="Facebook" url="https://www.facebook.com/juangbcalle/" />
        <Socials name="Instagram" url="https://www.instagram.com/juangbcalle/" />
        <Socials name="Share" url="https://www.google.com/search?q=juanbc2" />
      </aside>
    </div>
  );
};

export default Index;
