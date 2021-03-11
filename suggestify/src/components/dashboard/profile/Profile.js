import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
import { fetchProfile } from '../../../store/actions/ProfileActions';

const ProfileHolder = props => {

    const { push } = useHistory();

    const date = new Date();
    const time = date.getHours();
    const [greet, setGreet] = useState("");

    useEffect(() => {
        props.fetchProfile(localStorage.getItem('id'));
    }, [])

    useEffect(() => {
        if (time >= 12) {
            setGreet("Good Afternoon");
        } else if (time < 12) {
            setGreet("Good Morning");
        }
    }, [])

    const updateProfile = e => {
        push(`/dashboard/update-profile/${localStorage.getItem('id')}`)
    }

    return (
        <div className="profile">
            <p className="greet">{greet}, {props.profile.name}</p>
            <p className="username">{props.profile.username}</p>
            <button className="button" onClick={updateProfile}>SETTINGS</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.Profilereducer.profile
    }
}

export default connect(mapStateToProps, { fetchProfile }) (ProfileHolder)