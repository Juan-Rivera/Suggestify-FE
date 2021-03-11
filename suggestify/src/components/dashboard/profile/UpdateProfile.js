import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchProfile, updateProfile } from '../../../store/actions/ProfileActions';

const UpdateForm = props => {
    const [profile, setProfile] = useState({name: '', username: ''});

    useEffect(() => {
        props.fetchProfile(localStorage.getItem('id'));
    }, [])
    
    const handleChange = e => {
        e.persist();
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newProfile = {
            name: profile.name,
            username: profile.username
        }
        props.updateProfile(newProfile, localStorage.getItem('id'))
    }

    return(
        <div>
            <h2>Update Profile</h2>
            <form className="form">
                <div className="name">
                    <input type="text"
                    className="username"
                        name="name"
                        placeholder="Update Name"
                        onChange={handleChange}
                        value={profile.name} />
                </div>

                <input type="text"
                    name="username"
                    placeholder="Update Username"
                    onChange={handleChange}
                    value={profile.username} />

                <button className="button" onClick={handleSubmit}>UPDATE</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        profile: state.Profilereducer.profile
    }
}

export default connect(mapStateToProps, { fetchProfile, updateProfile }) (UpdateForm)