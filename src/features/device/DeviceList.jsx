import Device from './Device';
import { useSelector, useDispatch } from 'react-redux';
import { addDevice, devices } from './deviceSlice';
import { useState } from 'react';
import { profile } from '../profile/profileSlice';

function DeviceList() {
    const dispatch = useDispatch();
    const deviceList = useSelector(devices);
    const profileAttr = (useSelector(profile));
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const device = { name, model, year };
        dispatch(addDevice(device))
        setName("");
        setModel("");
        setYear("");
    }
    return (
        <>
            <div><h2 style={{ display: "inline" }}>Devices </h2> <small> ({profileAttr.fullname})</small></div>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {deviceList.map(device => <Device key={device.id} device={device} />)}
                </tbody>
            </table>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Model' value={model} onChange={e => setModel(e.target.value)} />
                <input type="number" placeholder='Year' value={year} onChange={e => setYear(e.target.value)} />
                <input type="submit" value="Add Device" />
            </form>
        </>

    );
}

export default DeviceList;