export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rianna Marie Batersal</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">WEB FRONT-end</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
           Cum Laude
            <br />
As a front-end developer, my role involves collaborating closely with web designers to bring visual concepts to life on the web. Using design tools like Adobe XD or Sketch, I have the skills to turn static designs into dynamic and responsive web pages. It's my job to ensure that the user interface not only looks appealing but also functions seamlessly, providing an engaging and interactive experience for users.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
