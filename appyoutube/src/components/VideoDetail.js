import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Footer from './Footer';
import InitialVideo from './InitialVideo';
import { Link } from 'react-router-dom'
import { useVideoContext } from "../context/context"
import VideoList from './VideoList';

const VideoDetail = ({handleVideoSelect, video }) => {

    const {videoItem, videosList, videoSelect} = useVideoContext()

    console.log(videoItem)
    // if (video.length === 0 ) {
    //     console.log('no tiene')
    //     return <InitialVideo />;
    // }
    
    const videoSrc = `https://www.youtube.com/embed/${videoItem.id.videoId}`;
    // console.log(video)

    console.log(typeof (video));

    // const [count, setCount] = useState(0)

    function count (){
        console.log('+1')
    }
    return (
        
        <div>
                <div className='embed'>
                    <iframe src={videoSrc} allowFullScreen title='Video player' />
                </div >
                <div className='col-12 col-c-12 col-x-12 col-s-12'>
                    <h4 className='header'>{videoItem.snippet.title}</h4>
                    <p>{videoItem.snippet.description}</p>
                </div>
                <VideoList handleVideoSelect={videoSelect} videos={videosList} />
                
                {/* <Footer /> */}
        </div>

    )
}

export default VideoDetail;