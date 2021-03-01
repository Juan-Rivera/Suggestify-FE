import React, { useEffect } from 'react';
import SavedList from './SavedList'

const SavedSongs = (props) => {
    useEffect(() => {
        //axios call to get users saved songs from backend, will then set saved songs 
    })
    return(
        <div className='saved-songs'>
            <SavedList />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        savedSongs: state.savedSongs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //actions
    }
}
export default SavedSongs;