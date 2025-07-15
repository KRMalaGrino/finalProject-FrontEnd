import sol from "../../images/sol.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <img className="about__avatar" src={sol} alt="author-avatar" />
        <div className="about__text-wrapper">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">bla bla bla</p>
          <p className="about__description">bla bla bla</p>
        </div>
      </div>
    </div>
  );
}

export default About;
