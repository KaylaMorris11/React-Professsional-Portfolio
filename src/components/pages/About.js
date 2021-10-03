import React from "react";
import "../styles/About.css";
import { FaUserAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="container">
      <h3>About Me</h3>
      <p>
        <FaUserAlt />
      </p>
      <p>
        A Junior Full Stack Developer in training that is a lover of learning,
        improving, and problem solving. I'm most often found playing video
        games, attempting to learn a new language, listening to music, watching
        anime and, of course, coding. These things are what make me happiest! I
        plan to continue to strengthen my knowledge and skills in the front and
        back end. My plan is also to obtain my bachelor's in Computer Science by
        2026.
      </p>
    </div>
  );
}
