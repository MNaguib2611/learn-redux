import './Profile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCompanyList } from '../company/companySlice';
import { changeProfile, profile } from './profileSlice';

import { useState } from 'react';


function Profile() {
    const dispatch = useDispatch();
    const profileAttr = (useSelector(profile));
    const [fullname, setFullname] = useState(profileAttr.fullname || "");
    const [dateOfBirth, setDateOfBirth] = useState(profileAttr.dateOfBirth || "");
    const companyCount = (useSelector(selectCompanyList)).length;


    const handleSubmit = (e) => {
        e.preventDefault();
        const profile = { fullname, dateOfBirth };
        dispatch(changeProfile(profile));
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                <input type="date" placeholder="Your Birth Year" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                <input type="number" value={companyCount} readOnly disabled />
                <input type="submit" value="Update Profile" />
            </form>
        </>
    );
}

export default Profile;