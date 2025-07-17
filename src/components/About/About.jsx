import sol from "../../images/sol.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <img className="about__avatar" src={sol} alt="author-avatar" />
        <div className="about__text-wrapper">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Hi, my name is Ryan . A passionate fullstack developer from Trenton
            , New Jersey . When i was fresh out of highschool I attended SAE
            Institute in NYC for 9 months where I would obtain my certificate of
            audio technology . Since graduating in 2014, I've released over 200
            songs, 15 EPs and 9 albums of original compositions and lyrics
            released on all streaming platforms . I've traveled all over the
            country performing anywhere I could be heard . Recorded in over 30
            different recording studio spaces . Shot & edited over 50 music
            videos & over 100 vlogs . Wrote, performed & engineered all kinds of
            genres . Experimented in various other realms as well . In 2024 I
            decided to attend TripleTen Bootcamp to further my skills and
            knowledge in the computer world . I now am fluent in many coding
            languages such as react, javascript, node.js, html & css . 6
            complete websites later , and I am now on my final project . After
            submission I will be entering the career accelaration program where
            I will meet with career advisors who will help me land a job in tech
            .
          </p>
          <p className="about__description">
            TripleTen has laid the foundation for my career as a software
            engineer . Most of what I know about coding has been because of
            TripleTen . I am looking forward to the future that is bright .{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
