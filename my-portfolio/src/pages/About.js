import React from "react";
import "./Style.css";

function About() {
  return (
    <div className="container">
      <div className="block">
        <h1 className="is-family-monospace title is-1 is-size-3-mobile">
          About Me
        </h1>
      </div>
      <div className="columns">
        <img
          className="column bio-pic"
          src="images/IMG_2059.JPG"
          alt="Thomas Maglaris standing next to Michael Jordan poster"
        ></img>
        <div className="column">
          <p className="is-family-monospace has-text-weight-semibold">
            Hello and welcome! <br></br>
            <br></br> My name is Thomas Maglaris and this is my personal webpage
            that I built myself using React! I am currently enrolled in the full
            stack development bootcamp through The University of Adelaide and
            proud of the progress I am making as a web developer. <br></br>
            <br></br> In my spare time you will find me either watching or
            playing sports. My favourite sport is basketball and I've watched
            NBA religiously since I was a kid, hence why the photo on the left
            is my standing next to a Michael Jordan poster when I visited the
            Willis Tower in Chicago. In recent years I have been playing a lot
            of golf although you couldn't tell if you've ever watched me play{" "}
            <i className="fas fa-grin-squint-tears funny-icon"></i>
            <i className="fas fa-grin-squint-tears funny-icon"></i>
            <i className="fas fa-grin-squint-tears funny-icon"></i> <br></br>
            <br></br> Once I gain enough experience and confidence as a full
            stack developer I wish to utilise these skills to help others with
            their web development needs.
          </p>
        </div>
      </div>
      <div className="columns detail-info">
        <div className="column is-three-fifths">
          <h2 className="is-family-monospace has-text-weight-bold is-size-4">
            Want to know more?
          </h2>
          <ul className="is-family-monospace has-text-weight-semibold">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:thomasmaglaris@gmail.com">
                thomasmaglaris@gmail.com
              </a>
            </li>
            <li>
              <strong>Mobile: 0413 641 113</strong>
            </li>
            <li>
              <strong>Github Repository:</strong>{" "}
              <a href="https://github.com/thomasmaglaris">Click Here!</a>
            </li>
            <li>
              <strong>Linked In Profile:</strong>{" "}
              <a href="https://www.linkedin.com/in/thomas-maglaris-61b671b3/">
                Click Here!
              </a>
            </li>
            <li>
              <strong>Resume:</strong>{" "}
              <a href="https://drive.google.com/file/d/1zk_9gzBG1y64jVuef22D6Dx3SFukpu0O/view?usp=sharing">
                Click Here!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
