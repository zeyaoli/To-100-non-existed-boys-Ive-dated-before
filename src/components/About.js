import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className='about'>
      <h1>To 100 (Non-existed) Boys I've Dated Before</h1>
      <h3>
        A Tinder Clone tells my frustrating dating experiences with 100
        non-existed men whose dating profiles and stories are machine learning
        generated online.
      </h3>
      <div className='folded'>
        <h2>What is this project?</h2>
        <p>
          Men all have a well-framed dating app bio. However, we all had a weird
          and frustrating dating story behind it. No matter what happened on our
          date, there's only one ending - we never talked again. <br />
          The project explores using existing datasets on the Internet and
          brings awareness of dating data privacy to the audience.
        </p>
      </div>
      <div className='folded'>
        <h2>How to play with the project?</h2>
        <p>
          <b>Swipe!</b> Use it as a regular Tinder. If you swipe right, you will
          get my dating story with the man you matched. The chat stores all the
          men you connect with and the dating story behind them.
        </p>
      </div>
      <div className='folded'>
        <h2> Tech Stack? </h2>
        <p> React, RunwayML, Tracey</p>
      </div>
      <div className='folded'>
        <h2>Where do we get the data?</h2>
        <ul>
          <li>
            Profile photos are from StyleGan2 for{" "}
            <a href='https://github.com/NVlabs/stylegan2'>FFHQ dataset</a>, one
            of NVIDIA Research Projects.
          </li>
          <li>
            Names are aggregated from{" "}
            <a href='http://www.ssa.gov/OACT/babynames/'>
              the social security administration
            </a>
            . 
          </li>
          <li>
            Dating Bio is trained from{" "}
            <a href='https://www.kaggle.com/andrewmvd/okcupid-profiles'>
              Ok-Cupid profiles datasets
            </a>{" "}
            from Kaggle, where contains around 60k users' dating profile
            information. From the open-ended questions, we picked the three most
            related ones, bio, fun fact, and "what are you looking for" Then, we
            trained the models with GPT2 using Runway ML.
          </li>
          <li>
            Dating stories are trained from the 'what are you looking for' and
            fun fact categories of the Ok-Cupid profiles dataset. We put the
            training result into Tracey, a context-free grammar, and generated
            the story with particular grammar.
          </li>
        </ul>
      </div>
      <div className='folded'>
        <h2>Who made this?</h2>
        <li>
          Web Designer and Developer: <a href='https://zeyaoli.com'>Zeyao Li</a>
        </li>
        <li>
          Data Collection and Training:{" "}
          <a href='https://www.tianxuzhou.xyz/'>Tianxu Zhou</a> and{" "}
          <a href='https://zeyaoli.com'>Zeyao Li</a>
        </li>
      </div>
    </div>
  );
};

export default About;
