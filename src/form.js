import {react} from 'react';
import { useNavigate} from 'react-router-dom';
import backgroundImage from './assets/background-image.jpeg';

const styles = {
    ImageContainer: {
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflowY: 'scroll',
    },
    Card: {
        marginTop: '5vh',
        marginLeft: '25vw',
        width: '50vw',
        height: '75vh',
        backgroundColor: '#333232',
        borderRadius: '5vw',
        display: 'flex',
        flexDirection: 'column',
      },
    InnerCard: {
        marginTop: '1vw',
        marginLeft: '5vw',
        width: '40vw',
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
    Input: {
        width: '30vw',
        height: '3vh',
        padding: '0px 8px',
        border: '1px solid #505050',
        boxSizing: 'border-box',
        borderRadius: '0.2vw',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize: '1vw',
        fontFamily: 'Red Hat Display',
        outline: 'none',
        borderRadius: '0.5vw',
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
      }
    
}


const Form = () => {

    const navigate = useNavigate();
    const pageChange = () => {
        navigate('/');
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

                <div style={styles.TextContainer}>
                <div style={{...styles.Text, fontSize:'1.1vw'}}>
                    Company Name
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Your company name goes here..."/>
                </div>
                </div>   

            <div style={styles.InnerCard}>

            <div style={styles.TextContainer}>
                <div style={{...styles.Text, fontSize:'1.1vw'}}>
                    Tagline
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Your Company's tagline goes here... "/>
                </div>
                

            </div>

            <div style={styles.InnerCard}>

            <div style={styles.TextContainer}>
                <div style={{...styles.Text, fontSize:'1.1vw',justifyContent:'left'}}>
                Industry category
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Best suited industry category... "/>
                </div>

            </div>
            <div style={styles.InnerCard}>
            <div style={styles.TextContainer}>
                <div style={{...styles.Text, fontSize:'1.1vw',justifyContent:'left'}}>
                Youtube video link
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Youtube Video Link... "/>
                </div>

            </div>
            <div style={styles.InnerCard}>

            <div style={styles.TextContainer}>
                <div style={{...styles.Text, fontSize:'1.1vw',justifyContent:'left'}}>
                Year Founded
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Year Founded"/>
                </div>

            </div>
            <div style={styles.InnerCard}>
            <div style={styles.TextContainer}>
                <div style={{...styles.Text, fontSize:'1.1vw',justifyContent:'left'}}>
                Founder Names
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Founder Names... "/>
                </div>


            </div>
            <div style={styles.InnerCard}>
            <div style={styles.TextContainer}>
                <div style={{...styles.Text, fontSize:'1.1vw',justifyContent:'left'}}>
                Pricing Plans
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Pricing Plans... "/>
                </div>
            </div>
            <div style={styles.InnerCard}>
            <div style={styles.TextContainer}>
                <div style={{...styles.Text, fontSize:'1.1vw',justifyContent:'left'}}>
                Link to your website
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Website Link... "/>
                </div>



            </div>
            <div style={styles.InnerCard}>
            <div style={styles.TextContainer}>
                <div style={{...styles.Text, fontSize:'1.1vw',justifyContent:'left'}}>
                Company logo URL
                </div>
                </div>

                <div style={styles.InputContainer} place>
                <input style={styles.Input} placeholder="Company Logo URL... "/>
                </div>


            </div>
            <div style={styles.InnerCard}/>

            <div style={styles.InnerCard}>

            <div style={{...styles.Button, marginLeft:'15vw'}} onClick={()=>pageChange()}>
                Submit

            </div>

            </div>
             
            </div>
        </div>
    );
}

export default Form;