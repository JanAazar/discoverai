const inner_icon = ({data,company_name,styles}) => {
    
    return (
    <div style={styles.InnerIcon}>
              <div style={styles.InnerTop}>
                <div style={styles.IconImageContainer}>
                  <img src={data[company_name].icon} style={styles.IconImage} />
                </div>
                <div style={styles.IconTopTextBox}>
                <div style={{...styles.taglineContainer, height:'3vw'}}>
                  <div
                    style={{
                      ...styles.Text,
                      fontSize: "1vw",
                      fontWeight: "bold",
                      marginTop: "1.5vw",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    {data[company_name].name}
                  </div>
                  </div>
                  <div style={styles.taglineContainer}>
                    <div style={{ ...styles.Text, fontSize: "0.8vw", textAlign:'left' }}>
                      {data[company_name].tagline}
                    </div>
                </div>
                </div>
              </div>
              <div style={{...styles.IconBottom, height:'5vw'}}>
                <div style={{ ...styles.Text, fontSize: "1vw", textAlign:'left'}}>
                  {data[company_name].description}
                </div>
                </div>
                <div style={{...styles.IconBottom, height:'13vw', marginTop:'2vh'}}>
                <iframe
              title='First-Video'
              width='100%'
              height='100%'
              src={data[company_name].video_url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                </div>
                <div style={{...styles.IconBottom, marginTop:'1vh',height:'11vw'}}>
                  <div style={{...styles.Text, textAlign:'left', fontSize:`1rem`}}>
                    <div style={{marginBottom: '0.5em'}}>
                      <span style={{fontWeight:'bold'}}>Category:</span> {data[company_name].Category}
                    </div>
                    <div style={{marginBottom: '0.5em'}}>
                      <span style={{fontWeight:'bold'}}>Founded:</span> {data[company_name].Founded}
                    </div>
                    <div style={{marginBottom: '0.5em'}}>
                      <span style={{fontWeight:'bold'}}>Founders:</span> {data[company_name].Founders}
                    </div>
                    <div style={{marginBottom: '0.5em'}}>
                      <span style={{fontWeight:'bold'}}>Special Features:</span> {data[company_name].Special_Features}
                    </div>
                    <div style={{marginBottom: '0.5em'}}>
                      <span style={{fontWeight:'bold'}}>Pricing Plans:</span> {data[company_name].Pricing_Plans}
                    </div>
                  </div>
                  </div>

                  <div style={{...styles.IconBottom, marginTop:'1vh',backgroundColor:'transparent',alignItems:'center',display:'flex',justifyContent:'center'}}>
                  <div style={styles.Button}>
                    <a href={data[company_name].website} style={{textDecoration:'none', color:'white'}}>Visit Website</a>
                  </div>
                  </div>
                  
        </div>
        )
}





export default inner_icon;

