import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./DreamlessBanner.scss";
import StyleContext from "../../contexts/StyleContext";

const SERIES = "https://dreamless.micromedia-ai.com/";
const PRESS = "https://dreamless.micromedia-ai.com/#press";

export default function DreamlessBanner() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main dreamless-main" id="dreamless">
        <a className="dreamless-banner" href={SERIES} target="_blank" rel="noopener noreferrer">
          <img
            src={require("../../assets/images/dreamless-banner.jpg")}
            alt="Dreamless: The Hush. Kai at his window at night with Tofu, his rice-cooker robot, over a quiet city."
            width="1500"
            height="500"
          />
        </a>
        <div className={isDark ? "dark-mode dreamless-text" : "dreamless-text"}>
          <h2 className="dreamless-title">Now showing: Dreamless: The Hush</h2>
          <p>
            My new project is an anime series made entirely with AI. Everyone who dreams falls asleep smiling and
            never wakes; Kai hasn't dreamed in years, so he's one of the few still awake.
          </p>
          <p>
            I built the AI agents that write, draw, voice, score and edit every episode through MicroMedia.ai, my
            one-person AI studio, and I review each one before it goes out. Season 1 is 28 one-minute episodes, a new
            one every day since 20 October 2026.
          </p>
          <p className="dreamless-links">
            <a href={SERIES} target="_blank" rel="noopener noreferrer">Watch the series</a>
            <a href={PRESS} target="_blank" rel="noopener noreferrer">Press kit</a>
            <a href="https://micromedia-ai.com/" target="_blank" rel="noopener noreferrer">MicroMedia.ai</a>
          </p>
        </div>
      </div>
    </Fade>
  );
}
