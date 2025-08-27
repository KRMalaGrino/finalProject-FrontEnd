import sol from "../../images/sol.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <img className="about__avatar" src={sol} alt="author-avatar" />
        <div className="about__text-wrapper">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Hi , I'm Ryan Malagrino — a passionate full-stack developer from
            Trenton , New Jersey, now based in Oregon . My creative journey
            began right after high school when I attended SAE Institute in New
            York City , earning a certificate in Audio Technology in 2014 .
            Since then , I've released over 200 songs , 15 EPs , and 9 albums
            across all streaming platforms . I've performed nationwide, recorded
            in more than 30 studios , and produced over 50 music videos and 100
            vlogs . From writing and engineering to experimenting with diverse
            genres , I've explored many creative avenues . In 2024 , I shifted
            my focus to tech and enrolled in the TripleTen Bootcamp to deepen my
            skills in web development . I'm now fluent in technologies like
            JavaScript , React , Node.js , HTML , and CSS . With six complete
            websites under my belt , I'm currently working on my final project .
            After graduation , I'll be joining the Career Acceleration Program ,
            where I'll receive personalized guidance to land my first role in
            tech . I'm excited to bring my creativity , dedication , and
            problem-solving mindset into the tech world .
          </p>
          <p className="about__description">
            TripleTen has been the launchpad for my journey into web development
            , giving me the tools , confidence , and real-world experience to
            turn lines of code into something meaningful . Nearly everything I
            know about programming today was sparked and shaped by their
            curriculum . Now, I'm looking ahead with excitement as I carve out
            my future as a software engineer .{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
