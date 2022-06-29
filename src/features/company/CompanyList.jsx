import './Company.module.css';
import Company from './Company';
import { useSelector } from 'react-redux';
import { selectCompanyList } from './companySlice';
import { profile } from '../profile/profileSlice';

function CompanyList() {
    const companyList = useSelector(selectCompanyList);
    const profileAttr = (useSelector(profile));

    return (
        <>
            <div><h2 style={{ display: "inline" }}>Companies </h2> <small> ({profileAttr.fullname})</small></div>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Order</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companyList.map(company => <Company key={company.id} company={company} />)}
                </tbody>
            </table>
        </>

    );
}

export default CompanyList;