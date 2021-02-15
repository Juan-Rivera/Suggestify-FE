import React from 'react';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

// redux stuff
import { connect } from 'react-redux';


const Search = () => {
    return (
        <div className='search'>
            {/* give setList action here */}
            <SearchBar />
            {/* give list from state here */}
            <SearchList />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        //songs list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //add songs(to list) and save songs actions
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Search)