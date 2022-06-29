import './Company.module.css';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { removeCompany, changeEditCompany } from './companySlice';

function Company({ company }) {
    const dispatch = useDispatch();
    return (
        <>
            <tr key={company.id}>
                <td key={company.name}>{company.name}</td>
                <td key={company.title}>{company.title}</td>
                <td key={company.year}>{company.year}</td>
                <td key={company.order}>{company.order}</td>
                <td key="actions">
                    <button
                        onClick={() => dispatch(changeEditCompany({ ...company }))}
                    ><FiEdit /></button>
                    <button
                        onClick={() => dispatch(removeCompany({ "id": company.id }))}
                    >< FiTrash2 /></button>
                </td>
            </tr>
        </>
    );
}

export default Company;