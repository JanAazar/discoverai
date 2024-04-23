import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/background-image.jpeg';
import searchIcon from './assets/search-icon.png';
import agents from './assets/agent.png';
import analytics from './assets/analytics.png';
import chatbots from './assets/chatbot.png';
import codeassitants from './assets/code-assistant.png';
import marketing from './assets/marketing.png';
import image_video from './assets/image-video-generator.jpg';

const styles = {
  ImageContainer: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflowY: 'scroll',
  },
  Button: {
    cursor: 'pointer',
    top: '2vh',
    left: '87vw',
    width: '12vw',
    height: '2.6vw',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '100000px',
    backgroundColor: '#0000ff',
    color: '#ffffff',
    fontSize: '1vw',
    fontFamily: 'Red Hat Display',
    fontWeight: 'bold',
    outline: 'none',
    position:'absolute',
  },
  Text: {
    color: '#ffffff',
    fontFamily: 'Red Hat Display',
    textAlign: 'center',
  },
  Input: {
    position: 'absolute',
    top: '55vh',
    left: '51%', 
    transform: 'translateX(-52%)',
    width: '50vw',
    height: '2.5vw',
    border: '0',
    padding: '0px 1vw',
    borderRadius: '100000px',
    backgroundColor: '#ffffff',
    color: '#030303',
    fontSize: '1vw',
    fontFamily: 'Red Hat Display',
    outline: 'none',
  },
  IconBoxOuter: {
    position: 'absolute',
    width :'35vw',
    height :'18vh',
    top: '67vh',
    left: '44.5%', 
    transform: 'translateX(-42%)',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  IconBoxInner: {
    width: '6vw',
    height: '10vw',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  IconImage: { 
    width: '4vw',
    height: '4vw',
    borderRadius: '100000px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '-5.5vw',
  },
  IconText: {
    cursor: 'pointer',
    color: '#838383',
    fontSize: '1vw', 
    fontFamily: 'Red Hat Display',
    textAlign: 'center', 
    marginTop: '-0.3vw'}
};


const Homepage = () => {

  const navigate = useNavigate();

  const pageChange = (number) => {
    //navigate(`/results/${category}`);
    navigate(`/result_${number}`);
    //navigate('/result_one');

  };

  const pageChangeForm = () => {
    navigate('/form');
  }

  return (
    <div style={styles.ImageContainer}>
    <button style={styles.Button} onClick={() => pageChangeForm()}> 
      Post your Company
    </button>
    <div style={{...styles.Text, position:'absolute', fontSize:'5vw', top:'35vh', fontWeight:'bold',  left: '51%', transform: 'translateX(-52%)'}}>
      DiscoverAI
    </div>
    <div style={{...styles.Text, position:'absolute', fontSize:'1.5vw', top:'47vh', fontWeight:'bold',  left: '51%', transform: 'translateX(-52%)'}}>
      Discover your favorite AI companies around the world
    </div>
    <input style={styles.Input} placeholder='Describe what you are looking for' />
    <div>
      <img src={searchIcon} style={{width: '1.2vw', height: '1.2vw', position: 'absolute', top: '55.95vh', left: '74.5%', transform: 'translateX(-52%)'}} onClick={()=>pageChange("three")}/>
    </div>
    <div style={styles.IconBoxOuter}>
      <div style={styles.IconBoxInner} onClick={() => pageChange("one")}>
        <img src={chatbots} style={styles.IconImage} />
        <br />
        <div style={styles.IconText}>AI</div>
        <div style={styles.IconText}>Chatbots</div>
      </div>
      <div style={styles.IconBoxInner} onClick={() => pageChange("two")}> 
        <img src={codeassitants} style={styles.IconImage} />
        <br />
        <div style={styles.IconText}>Code</div>
        <div style={styles.IconText}>Assistants</div>
      </div>
      <div style={styles.IconBoxInner} onClick={() => pageChange("three")}>
        <img src={agents} style={styles.IconImage} />
        <br />
        <div style={styles.IconText}>AI</div>
        <div style={styles.IconText}>Agents</div>
      </div>
      <div style={styles.IconBoxInner} onClick={() => pageChange("four")}>
        <img src={image_video} style={styles.IconImage} />
        <br />
        <div style={styles.IconText}>Image</div>
        <div style={styles.IconText}>Generation</div>
      </div>
      <div style={styles.IconBoxInner} onClick={() => pageChange("five")}>
        <img src={marketing} style={styles.IconImage} />
        <br />
        <div style={styles.IconText}>AI-led</div>
        <div style={styles.IconText}>Marketing</div>
      </div>
      <div style={styles.IconBoxInner} onClick={() => pageChange("six")}>
        <img src={analytics} style={styles.IconImage} />
        <br />
        <div style={styles.IconText}>AI-powered</div>
        <div style={styles.IconText}>Analytics</div>
      </div>
    </div>
    <div style={{...styles.IconText, position:'absolute', fontSize:'1.5vw',top:'69vh',left:'65.5vw', fontWeight:'bold'}}>
    ... and more
    </div>
    <div style={{...styles.Text, fontsize:'1.5vw', position:'absolute', top: '95vh', left: '50%', transform: 'translateX(-50%)'}}>
    Designed and built with Love and Care
    </div>
    </div>
    
  );
};

export default Homepage;

