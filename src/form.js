import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/background-image.jpeg';
import {useState} from 'react';


const styles = {
    ImageContainer: {
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflowY: 'scroll',
      justifyContent:'center',
      alignItems:'center',
      
    },
    Card: {
        marginTop: '5vh',
        marginLeft: '26.5vw',
        width: '47vw',
        height: '70vh',
        backgroundColor: '#333232',
        borderRadius: '2vw',
        display: 'flex',
        flexDirection: 'column',
      },
    InnerCard: {
        marginLeft:'2.5vw',
        width: '42vw',
        height: '5vh',
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
      },
    Text:{
        color: '#ffffff',
        fontFamily: 'Red Hat Display',
        textAlign: 'center',
    },
    CategoryText: {
      color: '#ffffff',
      fontFamily: 'Red Hat Display',
      textAlign: 'left',
      fontSize: '1.1vw',
      fontWeight: 'bold',
    },
    Input: {
      width: '30vw',
      height: '3vh',
      padding: '0.5vh 8px', /* small padding */
      border: '1px solid #505050',
      boxSizing: 'border-box',
      borderRadius: '0.5vw',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontSize: '0.75vw',
      fontFamily: 'Red Hat Display',
      outline: 'none',
      display: 'flex',
      alignItems: 'center', /* Vertically center */
    },
    TextContainer:{
        width: '13vw',
        height: '5vh',
        display: 'flex',
        textAlign:'center',
        justifyContent: 'left',
        alignItems: 'center',
    },
    InputContainer:{    
        width: '27vw',
        height: '5vh',
        display: 'flex',
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button: {
      cursor: 'pointer',
      width: '10vw',
      height: '2vw',
      padding: '0.4vw 3.5vw',
      border: '0',
      boxSizing: 'border-box',
      borderRadius: '100000px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#0000ff',
      color: '#ffffff',
      fontSize: '14px',
      fontFamily: 'Red Hat Display',
      fontWeight: '500',
      lineHeight: '24px',
      outline: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', /* Center horizontally */
    },
    Dropdown: {
      width: '30vw',
      height: '3vh',
      cursor: 'pointer',
      padding: '0.5vh 2px',
      border: '1px solid #505050',
      boxSizing: 'border-box',
      borderRadius: '8px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#ffffff ',
      //color: '#000000',
      fontSize: '0.75vw',
      fontFamily: 'Red Hat Display',
      //lineHeight: '16px',
      outline: 'none',
      color: 'grey',
    }
    
}

const defaultProps = {
  label: 'Select a Category',
  values: [
    'Chatbots',
    'Code Assistants',
    'AI Agents',
    'Image & Video Generation',
    'AI-led Marketing',
    'AI-powered Analytics',
    'API integrations',
    'AI in Healthcare',
    'AI design tools',
    'Robotics',
    'Workflow Automation',
    'AI based Social media',
    'AI in EdTech',
  ],
  years : [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 
    2020, 2021, 2022, 2023, 2024
]

};



const Form = () => {

    const navigate = useNavigate();
    const pageChange = () => {
        navigate('/');
    return
    
    }

    const [image, setImage] = useState(null);

    const handleChange = (e) =>{
      setImage(e.target.files[0]);
    }
    

    return (
        <div style={styles.ImageContainer}>

        <div
          style={{
            ...styles.Text,
            fontWeight: "bold",
            fontSize: "1.5vw",
            marginLeft: "-88vw",
            marginTop: "1vh",
            marginBottom: "-10vh",
            cursor: "pointer",
          }}
          onClick={() => pageChange()}
        >
          DiscoverAI
        </div>

            <div style={{...styles.Text, fontSize:'3vw', fontWeight:'bold', marginTop:'10vh'}}>
                Post your company
            </div>

            <div style={styles.Card}>  
            <div style={styles.InnerCard}>

            </div>


            <div style={styles.InnerCard}>

                <div style={styles.TextContainer}>
                <div style={styles.CategoryText}>
                    Name of the company
                </div>
                </div>

                <div style={styles.InputContainer}>
                <input style={styles.Input} placeholder="Your company name goes here..."/>
                </div>
                </div>   

            <div style={styles.InnerCard}>

            <div style={styles.TextContainer}>
                <div style={styles.CategoryText}>
                    Tagline
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Your Company's tagline goes here... "/>
                </div>
                

            </div>

            <div style={styles.InnerCard}>

                <div style={{...styles.TextContainer}}>
                <div style={styles.CategoryText}>
                    A brief description <br /> (100 characters only)
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Your Company's tagline goes here... "/>
                </div>
            </div>
            
            <br/>

            <div style={styles.InnerCard}>

            <div style={styles.TextContainer}>
                <div style={styles.CategoryText}>
                Select the category <br />
                your company belongs to
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <select style={styles.Dropdown} defaultValue="">
                <option value="" disabled hidden>{defaultProps.label}</option>
                {(defaultProps.values).map((value) => (
                <option value={value} key={value}>{value}</option>
                ))}
                </select>
            </div>

            </div>
            <div style={styles.InnerCard}>
            <div style={styles.TextContainer}>
                <div style={styles.CategoryText}>
                Product demo link
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Youtube Video Link... "/>
                </div>

            </div>
            <div style={styles.InnerCard}>

            <div style={styles.TextContainer}>
                <div style={styles.CategoryText}>
                Year Founded
                </div>
                </div>

                <div style={styles.InputContainer}>
                <select style={styles.Dropdown} defaultValue="">
                <option value="" disabled hidden>Select year</option>
                {(defaultProps.years).map((value) => (
                <option value={value} key={value}>{value}</option>
                ))}
                </select>
            </div>

            </div>
            <div style={styles.InnerCard}>
            <div style={styles.TextContainer}>
                <div style={styles.CategoryText}>
                Founder Names
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Founder Names... "/>
                </div>


            </div>
            <div style={styles.InnerCard}>
            <div style={styles.TextContainer}>
                <div style={styles.CategoryText}>
                Pricing Plans
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Pricing Plans... "/>
                </div>
            </div>
            <div style={styles.InnerCard}>
            <div style={styles.TextContainer}>
                <div style={styles.CategoryText}>
                Link to your website
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Website Link... "/>
                </div>



            </div>


            <div style={styles.InnerCard}>
            <div style={styles.TextContainer}>
                <div style={styles.CategoryText}>
                Company logo URL
                </div>
                </div>

                
                <div style={{...styles.InputContainer, justifyContent:'left'}}>
                <input type="file" onChange={handleChange} style={{color:'white'}}/>
                <button>Upload</button>
                </div>
            

            </div>
            <div style={styles.InnerCard}/>

            <div style={{...styles.InnerCard, justifyContent:'center',alignItems:'center'}}>

            <div style={{...styles.Button}} onClick={()=>pageChange()}>

                Submit

            </div>

            </div>
             
            </div>
        </div>
    );
}

export default Form;