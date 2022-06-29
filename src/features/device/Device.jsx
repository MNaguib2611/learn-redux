import {  removeDevice } from './deviceSlice';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

function Company({ device }) {
    const dispatch = useDispatch();
    return (
        <>
            <tr key={device.id}>
                <td key={device.name}>{device.name}</td>
                <td key={device.model}>{device.model}</td>
                <td key={device.year}>{device.year}</td>
                <td key="actions">
                    <button
                        onClick={() => dispatch(removeDevice({ "id": device.id }))}
                    >< FiTrash2 /></button>
                </td>
            </tr>
        </>
    );
}

export default Company;