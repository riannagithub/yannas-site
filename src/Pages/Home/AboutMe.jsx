export default function AboutMe() {
  // Define the desired background color
  const sectionStyle = {
    backgroundColor: "#86608E", // Replace with your desired color
  };

  return (
    <section id="AboutMe" className="about--section" style={sectionStyle}>
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            "Hello! I'm Rianna inshort Yhanniee, a passionate front-end developer with a knack for turning creative designs into functional and engaging web experiences. I thrive on the collaboration between design and code, working closely with web designers to bring their visions to life. Proficient in HTML, CSS, and JavaScript, I specialize in crafting responsive and user-friendly interfaces. I enjoy the dynamic nature of web development and take pride in ensuring that websites not only look great but also deliver a seamless and enjoyable user experience. Let's build something amazing together!"
          </p>
          <p className="hero--section-description">
            Rianna Marie Batersal
          </p>
        </div>
      </div>
    </section>
  );
}
