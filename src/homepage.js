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
//import logo from './assets/logo-main.png';
// import styled from 'styled-components';


const size = (a) =>{
  return `calc((${a}vh + ${a}vw) / 2)`;
}

const isPhone = window.innerWidth <= 600;

const styles = {
  ImageContainer: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    dispay:'flex',
    justifyContent:'center',
    alignItems:'center',
    //overflowY: 'scroll',
  },
  Button: {
    cursor: 'pointer',
    top: size(2.5),
    right: size(2.5),
    width: 'auto',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '100000px',
    backgroundColor: '#0000ff',
    color: '#ffffff',
    //fontSize: `calc((1vh + 1vw) / 2)`,
    fontFamily: 'Red Hat Display',
    //fontWeight: 'bold',
    outline: 'none',
    position:'absolute',
    overflow: 'hidden',
    padding: '0.5vw 1vw',

  },
  Text: {
    color: '#ffffff',
    fontFamily: 'Red Hat Display',
    textAlign: 'center',
  },
  Input: {
    //position: 'absolute',
    //top: size(42),
    //left: '51%', 
    //transform: 'translateX(-52%)',
    width: '50vw',
    height: size(3),
    border: '0',
    padding: '0px 1vw',
    borderRadius: '100000px',
    backgroundColor: '#ffffff',
    color: '#030303',
    fontSize: size(1.25),
    fontFamily: 'Red Hat Display',
    outline: 'none',
  },
  IconBoxOuter: {
    position: 'absolute',
    width :size(50),
    height :size(30),
    top: size(42),
    left: '44.5%', 
    transform: 'translateX(-42%)',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  IconBoxInner: {
    width: size(10),
    height: size(30),
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  IconImage: { 
    width: size(5),
    height: size(5),
    borderRadius: '100000px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '-5.5vw',
  },
  IconText: {
    cursor: 'pointer',
    color: '#838383',
    fontSize: size(1.25), 
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

  const handleKeyPress = (event) => {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.key === 'Enter') {
      // Call the PageChange function
      pageChange("three");
    }
  }

  return (
    <div style={styles.ImageContainer}>
    <button style={styles.Button} onClick={() => pageChangeForm()}> 
      Post your Company
    </button>
    <div style={{...styles.Text, position:'absolute', fontSize: size(6.5), top:size(25), fontWeight:'bold',  left: '50%', transform: 'translateX(-50%)'}}>
      DiscoverAI
    </div>
    <div style={{...styles.Text, position:'absolute', fontSize:size(2), top:size(35), fontWeight:'bold',  left: '50%', transform: 'translateX(-50%)'}}>
      Discover your favorite AI companies around the world
    </div>

    <div style={{position: 'absolute', top: size(42), left: '50%', transform: 'translateX(-50%)', width: size(75), height: size(3), justifyContent:'center', alignItems:'center', display:'flex'}}>
  <form style={{ display: 'flex', alignItems: 'center' }}>
    <input style={styles.Input} placeholder='Describe what you are looking for' onKeyDown={handleKeyPress}/>
    <button type='submit' onClick={() => pageChange("three")} style={{marginLeft:size(-3.5),backgroundColor:'transparent',border:'0'}}>
      <img src={searchIcon} style={{width: size(1.3), height: size(1.3)}} />
    </button>
  </form>
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
    <div style={{...styles.IconBoxInner,height:size(10),justifyContent:'left'}}>
    <div style={{...styles.IconText, fontWeight:'bold'}}>
    ... and more
    </div>
    </div>
    </div>
    <div style={{...styles.Text, fontSize:size(1.25), position:'absolute', top: '95vh', left: '50%', transform: 'translateX(-50%)'}}>
    Designed and built with Love and Care
    </div>
    </div>
    
  );
};

export default Homepage;


// <div>
//       <img src={searchIcon} style={{width: '1.2vw', height: '1.2vw', position: 'absolute', top: '55.95vh', left: '74.5%', transform: 'translateX(-52%)'}} onClick={()=>pageChange("three")}/>
//     </div>