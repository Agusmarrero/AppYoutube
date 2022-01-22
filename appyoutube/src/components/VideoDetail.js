import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Footer from './Footer';
import InitialVideo from './InitialVideo';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom'
const VideoDetail = ({ video }) => {
    console.log(video)
    if (video.length === 0) {
        console.log('no tiene')
        return <InitialVideo />;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    // console.log(video)

    console.log(typeof (video));
    return (
        <div>
            {/* <Link to={`/video/${video.id.videoId}`}> */}
                <div className='embed'>
                    <iframe src={videoSrc} allowFullScreen title='Video player' />
                </div>
                <div className='segment'>
                    <h4 className='header'>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
                {/* <Footer /> */}
            {/* </Link> */}
        </div>

    )
}

export default VideoDetail;