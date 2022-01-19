import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBBtn  } from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='container' style={{height:896}} >
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid '>

                    <div className="ui row">
                        <div className="video-detail">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="video-list" style={{backgroundColor:'#ebeaed'}}>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                        
                    </div>
                    <MDBBtn style={{float:'right'}} color='#ff0303' rounded>ATRÁS</MDBBtn>
                </div>
            </div>
        )
    }
}

export default App;