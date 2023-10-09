import React from "react";
import PercentageBar from "../components/percentageBar";
import Skills from "../components/skills";
import Socials from "../components/socials";
import Description from "../components/description";
import Portfolio from "../components/portfolio";
import Knowledge from "../components/knowledge";
import Education from "../components/education";
import HireDialog from "@/components/hireDialog";

const Index = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <div className="flex bg-slate-200 font-medium w-auto">
      <HireDialog open={open} selectedValue="" onClose={handleClose} />
      <aside className="gap-15 px-5 py-2 top-0 bg-neutral-50 flex-col flex h-full w-[330px] fixed">
        <section>
          <div className="flex flex-col items-center gap-2 mt-12">
            <img
              className="h-[150px] w-[150px] rounded-full"
              src="images/profilepic.png"
              alt="Profile pic"
            />
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div className="flex gap-2">
              <span className="font-bold text-xl">Juan</span>
              <span className="text-xl font-bold text-gray-500">Calle</span>
            </div>
            <span className="text-gray-500">Front-end Developer</span>
          </div>
          <br></br>
        </section>
        <hr></hr>
        <section className="flex flex-col items-center">
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
                    className="text-cyan-500"
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
      <div className="ml-[20.5%]" />
      <main className="max-w-7xl">
        <section className="flex justify-center flex-wrap">
          <div className="m-10 mt-0 w-full flex justify-between text-justify gap-6 bg-neutral-50 min-w-max">
            <div className="flex flex-col p-16">
              <h2 className="mt-10 mb-1 font-bold text-5xl">I&apos;m Juan Calle</h2>
              <div className="mb-5 mt-1 font-bold text-5xl flex">
                <h2 className="mr-2 text-cyan-700">Front-end</h2> Developer
              </div>
              <div className="mb-2 font-medium text-gray-500 whitespace-normal max-w-xl ">
                <h4>
                  Computer Science student, with passion for apps development, i
                  want to think and create things with software as the main tool
                  and give solution to the challenges that arrive.
                </h4>
                <button
                  className="mt-10 py-4 px-6 rounded-lg text-black bg-cyan-700 hover:bg-cyan-800 font-bold text-lg"
                  onClick={handleClickOpen}
                >
                  HIRE ME ➤
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="images/profilepic.png"
                className="m-auto mb-0 mx-12 w-96"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center flex-wrap">
            <Description
              title="My Knowledge"
              text="Basically, i got knowledge in web development, mobile development, game development, graphic design, containerization and rest api's."
            />
          </div>
          <div className="flex justify-center flex-wrap my-10">
            <Knowledge
              title="Web Development"
              text="Blog, E-Commerce"
              image="images/develop.png"
            />
            <Knowledge
              title="Rest API"
              text="API Consumption, API Creation"
              image="images/api.png"
            />
            <Knowledge
              title="Graphic Design"
              text="Photoshop, Illustrator"
              image="images/photoshop.png"
            />
            <Knowledge
              title="Game Design"
              text="Character Design, Props & Objects"
              image="images/game-development.png"
            />
            <Knowledge
              title="Mobile Development"
              text="Apps, Responsive Web Design"
              image="images/mobile.png"
            />
            <Knowledge
              title="Containerization"
              text="Docker, Kubernetes"
              image="images/docker.png"
            />
          </div>
        </section>
        <section>
          <div className="flex justify-center flex-wrap">
            <Description
              title="Education"
              text="My education consist in a technical bachelor in graphic and multimedia design and a computer science engineer, also a lot of online courses and auto-learing."
            />
          </div>
          <div className="bg-neutral-50">
            <Education
              place="I.E Maestro Fernando Botero"
              role="High School Student"
              date="Jan 2010 - Nov 2016"
              title="Technical Bachelor"
              description="My basic education was in the I.E Maestro Fernando Botero, where i studied a technical bachelor in graphic and multimedia design, i learned a lot of things about graphic design, web design, video editing, flash animation, photography and more."
            />
            <Education
              place="Universidad de Antioquia"
              role="University Student"
              date="Jun 2019 - Nov 2024"
              title="Computer Science Engineer"
              description="I'm currently studying computer science engineering in the Universidad de Antioquia, i have been studying for 4 years and i have 1 year left to finish my career."
            />
          </div>
        </section>
        <section>
          <div className="flex justify-center flex-wrap">
            <Description
              title="Portfolio"
              text="I have participate and lead a lot of projects, here are some of them."
            />
          </div>
          <div className="flex overflow-x-auto w-full">
            <Portfolio
              title="Career Recommendation"
              description="The purpose of this app is to help such students select a career track by providing a match-based scored recommendation of academic and professional routes, promoting the development of the government-aided quality educational system by reducing the student dropout."
              text="React, Azure, Python, Flask, Docker"
              image="images/career.png"
              link="https://github.com/dsceafit/ds-squads/tree/main/career-recommendation"
            />
            <Portfolio
              title="Avril App"
              description="Avril App is a solution, through a web access program, to the needs that have been identified for the sale of fuel at service stations (EDS)."
              text="React, Go, Docker, MySQL"
              image="images/avril.png"
              link="https://avrilapp.com"
            />
            <Portfolio
              title="Nashe Car"
              description="Nashe Car is a game made in Unity, where you have to drive a car through three different tracks, this game was created for the asignature of 'Comunicaciones II' in the Universidad de Antioquia."
              text="Unity, C#, Blender"
              image="images/Nashecar.png"
            />
            <Portfolio
              title="Security Data"
              description="Security Data is a game made in Java, where you have to prevent a hacker from stealing your data, but in a fun plataform game. This game was created for the asignature of 'Lógica y Representación I' in the Universidad de Antioquia."
              text="Java, Swing"
              image="images/securityData.png"
              link="https://github.com/Juanbc2/Security-Data-Game"
            />
            <Portfolio
              title="Dr Gato Veterinaria"
              description="This website was created for a veterinary clinic, where you can find information about the clinic, the services they offer, the products they sell and the contact information, this prototype was created for the asignature of 'Estructuras de Datos' in the Universidad de Antioquia."
              text="HTML, CSS, Javascript"
              image="images/drgato.png"
              link="https://dr-gato-veterinaria.web.app"
            />
          </div>
        </section>
        <footer className="text-center p-10 mb-0 w-full min-w-max m-2 bg-neutral-50">
          2023 All Rights Reserved. Juanbc2
        </footer>
      </main>
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
