import React from 'react';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

// redux stuff
import { connect } from 'react-redux';
import { fetchSongs } from '../../../store/actions/SLActions';
import { addSong } from '../../../store/actions/SSActions';


const Search = (props) => {
    
    return (
        <div className='search'>
            {/* give setList action here */}
            <SearchBar handleSearch={props.fetchSongs}/>
            {/* give list from state here */}
            <SearchList searchList={props.searchList} handleSave={props.addSong}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        searchList: state.SLreducer.searchList
    }
}

export default connect(mapStateToProps, {fetchSongs, addSong}) (Search)