import React from 'react';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

// redux stuff
import { connect } from 'react-redux';
// actions
import { setSearchList, saveSong } from '../../../redux/actions/actions';


const Search = (props) => {
    console.log(props)
    return (
        <div className='search'>
            {/* give setList action here */}
            <SearchBar handleSearch={props.setSearchList}/>
            {/* give list from state here */}
            <SearchList handleSave={props.saveSong} searchList={props.searchList}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        searchList: state.searchList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSearchList: (songs) => {
            dispatch(setSearchList(songs))
        } ,
        saveSong: (song) => {
            dispatch(saveSong(song))
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Search)