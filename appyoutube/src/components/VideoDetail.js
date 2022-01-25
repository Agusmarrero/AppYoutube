import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { useVideoContext } from "../context/context"
import { Link } from 'react-router-dom'
import VideoList from './VideoList';
import Button from 'react-bootstrap/Button'
const VideoDetail = () => {

    const { videoItem, videosList, videoSelect } = useVideoContext()
    const videoSrc = `https://www.youtube.com/embed/${videoItem.id.videoId}`;

    return (
        <div>
            <div style={{padding:15}}>
                <Link to='/'>
                    <Button variant="danger" >ATRÁS</Button>
                </Link>
            </div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
                <iframe src={videoSrc} allowFullScreen title='Video player' />
            </div >
            <div className='col-12 col-c-12 col-x-12 col-s-12'>
                <h4 className='header'>{videoItem.snippet.title}</h4>
                <p>{videoItem.snippet.description}</p>
            </div>
            <VideoList handleVideoSelect={videoSelect} videos={videosList} />

        </div>

    )
}

export default VideoDetail;