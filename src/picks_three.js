import React from "react";
import backgroundImage from "./assets/background-image.jpeg";
import inner_icon from "./inner_icon";
import data from "./company_data.js";
import { useNavigate} from 'react-router-dom';

const styles = {
  ImageContainer: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflowY: "scroll",
  },
  scrollContainer: {
    backgroundColor: "transparent",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    flexDirection: "column",
    overflowY: "scroll",
    textAlign: "center",
    justifyContent: "center",
  },
  Text: {
    color: "#ffffff",
    fontFamily: "Red Hat Display",
  },
  Input: {
    marginTop: "12vh",
    width: "55vw",
    height: "2.5vw",
    border: "0",
    padding: "0px 1vw",
    borderRadius: "100000px",
    backgroundColor: "#ffffff",
    color: "#030303",
    fontSize: "1vw",
    fontFamily: "Red Hat Display",
    outline: "none",
  },
  OuterIcon: {
    marginTop: "3vh",
    width: "85vw",
    height: "72vh",
    backgroundColor: "transparent",
    marginLeft: "7.5vw",
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  },
  InnerIcon: {
    width: "27vw",
    height: "72vh",
    backgroundColor: "#333232",
    opacity: 0.85,
    borderRadius: "2vw",
    display: "flex",
    flexDirection: "column",
    aligntItems: "center",
  },
  InnerTop: {
    width: "27vw",
    height: "10.5vh",
    backgroundColor: "transparent",
    opacity: 0.85,
    borderRadius: "2vw",
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  },
  IconBottom: {
    width: "25vw",
    height: "3vw",
    backgroundColor: "transparent",
    marginLeft: "1.1vw",
  },
  IconImage: {
    width: "3.5vw",
    height: "3.5vw",
    borderRadius: "100000px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop:'1vw'
  },
  IconImageContainer: {
    width: "6vw",
    height: "5vw",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  IconTopTextBox: {
    width: "18vw",
    height: "2vh",
    marginLeft: "-7vw",
  },
  taglineContainer: {
    width: "18vw",
    height: "1vh",
    marginLeft: "-3.5vw",
    display: "flex",
    justifyContent: "left",
  },
  Button: {
    cursor: 'pointer',
    width: '10vw',
    height: '2vw',
    padding: '0.25vw 1.5vw',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '100000px',
    backgroundColor: '#0000ff',
    color: '#ffffff',
    fontSize: '1vw',
    fontFamily: 'Red Hat Display',
    outline: 'none',
  }
};

function getCompaniesByCategory(data, category) {
  const companies = [];
  
  for (const key in data) {
      if (data.hasOwnProperty(key)) {
          if (data[key]['Category'] === category) {
              companies.push(data[key]['name']);
          }
      }
  }
  return companies;
}

const Picks_three = () => {

  //const {category} = useParams()
  const company_list = getCompaniesByCategory(data, 'AI Agents');
  const navigate = useNavigate();

  const pageChange = () => {
    navigate('/');
  };

  return (
    <div style={styles.ImageContainer}>
      <div style={styles.scrollContainer}>
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
        <input style={styles.Input} placeholder="Search for AI companies" />
        <div
          style={{
            ...styles.Text,
            marginTop: "4vh",
            fontWeight: "bold",
            fontSize: "2.5vw",
          }}
        >
          Top Picks by DiscoverAI
        </div>
        <div style={styles.OuterIcon}>


        <div>
         {inner_icon ({company_name: company_list[0], data:data, styles:styles})}
        </div>

        <div>
         {inner_icon ({company_name: company_list[1], data:data, styles:styles})}
        </div>

        <div>
         {inner_icon ({company_name: company_list[2], data:data, styles:styles})}
        </div>

        </div>
        <div style={styles.OuterIcon}>

        <div>
         {inner_icon ({company_name: company_list[3], data:data, styles:styles})}
        </div>
        <div>
         {inner_icon ({company_name: company_list[4], data:data, styles:styles})}
        </div>
        <div>
         {inner_icon ({company_name: company_list[5], data:data, styles:styles})}
        </div>

        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Picks_three;













