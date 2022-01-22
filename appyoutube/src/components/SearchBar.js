import React from 'react';
import { BsSearch } from 'react-icons/bs';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import 'mdbreact/dist/css/mdb.css';
import './SearchBar.css';
import VideoDetail from './VideoDetail';
class Searchbar extends React.Component {
    state = {
        term: 'SEARCH'
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
      console.log('aca')
    }

    render() {
        return (
            <div className='search-bar ui '>
                 
                <form  className='ui form' style={{textAlign:'center'}}>
                <img src="https://i.ibb.co/K73sGcW/iconyt.png" alt="iconyt" border="0"></img>
                    <div className="input-group rounded">
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term} className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                       
                        <button className="input-group-text border-0 search-icon" id="search-addon" onClick={this.handleSubmit}>
                 
                            <BsSearch style={{cursor:'pointer'}}  />
                     
                        </button>
                        
                    </div>

                </form>
               
            </div>
        )
    }
}
export default Searchbar;