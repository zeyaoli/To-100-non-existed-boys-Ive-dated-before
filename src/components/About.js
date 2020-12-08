import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className='about'>
      <h1>Too 100 (non-existed) Boys I've dated before</h1>
      <h3>
        A Tinder Clone that tells my frustrating dating experiences with 100
        non-existed men whose dating profiles and stories are machine learning
        generated online.
      </h3>
      <h2>What is this project?</h2>
      <p>
        Men all have a well-framed dating app bio, however, we all had weird and
        frustrating dating story behind it. No matter what happened on our date,
        there’s only one ending - we never talked again. <br />
        The project explores the use of existing dataset on the Internet, as
        well as brings the awareness of dating data privacy to the audience.
      </p>
      <h2>How to play with the project?</h2>
      <p>
        Swipe! Use it as a normal Tinder. If you swipe right, you will get my
        dating story with the man. The store will be stored in the chat as well.
      </p>
      <h2> Tech Stack? </h2>
      <p> React, RunwayML, Tracey</p>
      <h2>Where is the Data from?</h2>
      <p>
        - Profile photos are pulled from StyleGan2 for{" "}
        <a href='https://github.com/NVlabs/stylegan2'>FFHQ dataset</a>, one of
        NVIDIA Research Projects. <br />- Names are aggregated from the data
        from{" "}
        <a href='http://www.ssa.gov/OACT/babynames/'>
          the social security administration
        </a>{" "}
        . 
        <br /> - Dating Bio and Stories:
        <a href='https://www.kaggle.com/andrewmvd/okcupid-profiles'>
          Ok-Cupid profiles datasets
        </a>{" "}
        from Kaggle, where contains around 60k users' dating profile
        information. From the open ended questions, we picked three most related
        ones, bio, fun fact and “what are you looking for” Then, we trained the
        models with GPT2 using Runway ML. <br />
        The bio is from the trained result directly while for the popup stories,
        we hand-picked data from both fun fact and “what are you looking for”
        models using prompts like”you are”,”what”,”I don’t like”etc., then, we
        took the data to CFG and generated the stories with a certain grammar:
        we (did an dating activity), (at one point), he said’(from the fun fact
        and what are you looking for)’ We never (talked/met) again.
      </p>
    </div>
  );
};

export default About;
