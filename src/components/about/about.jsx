import React from 'react';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import ListItem from './ListItem';
import aboutMeList from './aboutMeList';
import contact from './assets/contact.svg';

export default function AboutMe(props) {
  return (
    <div id="about-me">
      <section>
        <h1>
          <Avatar src={'./liran.jpg'} size={100} /> Hi, My name is Liran.
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
          <img src={contact} /> How to Reach Me
        </h1>
        <Divider />
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
