import React from 'react';
import { MDBCol } from "mdbreact";
import { BsSearch } from 'react-icons/bs';
import "bootstrap/dist/css/bootstrap.css";
import 'mdbreact/dist/css/mdb.css';
import './SearchBar.css';
class Searchbar extends React.Component {
    state = {
        term: 'SEARCH'
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui '>

                <form onSubmit={this.handleSubmit} className='ui form' style={{textAlign:'center'}}>
                <img src="https://i.ibb.co/K73sGcW/iconyt.png" alt="iconyt" border="0"></img>
                    <div className="input-group rounded">
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term} className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span className="input-group-text border-0 search-icon" id="search-addon">
                            <BsSearch />
                        </span>

                    </div>

                </form>

            </div>
        )
    }
}
export default Searchbar;