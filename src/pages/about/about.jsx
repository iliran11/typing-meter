import React from 'react';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import ListItem from './ListItem';
import aboutMeList from './aboutMeList';
import openProjectList from './openProjectList';
import contact from './assets/contact.svg';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import openSource from './assets/open-source.svg';

export default function AboutMe(props) {
  return (
    <div id="about-me">
      <section>
        <h1>
          <Avatar src={'./liran.jpg'} style={{ height: null, width: null }} />{' '}
          Hi, My name is Liran.
        </h1>
        <Divider />
        <p>
          I have created this application out of my love to fast typing.<br />{' '}
          it's just fun to type really fast! Please invest in good and healthy
          keyboard.
        </p>
        <p>My second personal motiviation is my experimental journey with:</p>
        <ul>
          {aboutMeList.map(item => {
            return <ListItem icon={item.img}>{item.text}</ListItem>;
          })}
        </ul>
      </section>
      <Divider style={{ height: 3 }} />
      <section>
        <h1>
          <img src={contact} alt={'contact me'} /> How to Reach Me
        </h1>
        <p>
          It would be my pleasure to be contact and discuss anything. from
          typing fast topics, feature requests to other projects endevours.
          Please look out for me in the following platforms:
        </p>
        <div className="social-grid">
          <img src={facebook} className="social-item" alt="facebook" />
          <img src={linkedin} className="social-item" alt="linkedin" />
          <img src={github} className="social-item" alt="github" />
        </div>
      </section>
      <Divider style={{ height: 3 }} />
      <section>
        <h1>
          <img src={openSource} alt={'bugs reports'} />Open Source Porject
        </h1>
        <Divider />
        <p>
          This Project is hosted on github as Open Source. So you can read the
          code and even contribute. or fix bugs.
        </p>
        <ul>
          {openProjectList.map(item => {
            return <ListItem icon={item.img}>{item.text}</ListItem>;
          })}
        </ul>
      </section>

      {/* <video
        loop
        autoPlay
        muted
        src="/6241712_MotionElements_women-s-hands-typing-on-computer-keyboard_preview.MP4">
        Sorry, your browser doesn't support embedded videos.
      </video> */}
    </div>
  );
}
