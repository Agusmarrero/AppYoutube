import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { useVideoContext } from "../context/context"
import { Link } from 'react-router-dom'
import VideoList from './VideoList';
import Button from 'react-bootstrap/Button'
const VideoDetail = () => {

    const { videoItem, videosList, videoSelect, notVideosList, backButton } = useVideoContext()
    const videoSrc = `https://www.youtube.com/embed/${videoItem.id.videoId}`;
    
    return (
        <div>

            <div style={{ padding: 15 }}>
               
                <Link to='/'>
                
                    {backButton ?  "":  <><Button variant="danger" onClick={() => notVideosList()} >ATRÁS</Button><label style={{color:'red', marginLeft:5}}>DETALLE DEL VIDEO</label></>}
                </Link>
            </div>
           
            <div className='col-x-5' style={{border:'3px solid red', marginLeft:5, borderRadius:10, marginBottom:5, marginRight:5}}>
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <iframe src={videoSrc} allowFullScreen title='Video player' />
                </div >
                <div className='col-12 col-c-12 col-x-12 col-s-12'>
                    <h4 className='header'>{videoItem.snippet.title}</h4>
                    <p>{videoItem.snippet.description}</p>
                </div>
            </div>
            <div className='col-x-6' style={{border:'3px solid red', marginLeft:5, borderRadius:10}}>
                <VideoList handleVideoSelect={videoSelect} videos={videosList} />
            </div>

        </div>

    )
}

export default VideoDetail;