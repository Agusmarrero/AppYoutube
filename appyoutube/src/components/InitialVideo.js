import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Footer from './Footer';
import '../App.css'
import SearchBar from './SearchBar';
const InitialVideo = () => {
  
    return (
        <div>
     
            <div className='video-detail' style={{ marginTop: 10, padding:0}}>
                <img style={{ height: 220 }} src="https://i.ibb.co/2cqwvsS/VIDEO.png" alt="VIDEO" border="0"></img>
              
            </div>
            <div style={{marginTop:275}}>
            {/* <Footer /> */}
            </div>
          
        </div>


    )
}

export default InitialVideo;