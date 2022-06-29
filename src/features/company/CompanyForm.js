import { addCompany, editCompany, updateCompany, changeEditCompany } from './companySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';



function CompanyForm() {
    const companyToBeEdited = useSelector(editCompany);
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [order, setOrder] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const company = { id, name, title, year, order };
        if (id) {
            dispatch(updateCompany(company));
        } else {
            dispatch(addCompany(company));
        }
        setId("");
        setName("");
        setTitle("");
        setYear("");
        setOrder("");
        dispatch(changeEditCompany(null));
    }



    useEffect(() => {
        if (!!companyToBeEdited) {
            setId(companyToBeEdited.id);
            setName(companyToBeEdited.name);
            setTitle(companyToBeEdited.title);
            setYear(companyToBeEdited.year);
            setOrder(companyToBeEdited.order);
        }
    }, [companyToBeEdited]);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Company Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Your Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
            <input type="number" placeholder="Order" value={order} onChange={(e) => setOrder(e.target.value)} required />
            <input type="submit" value={id ? "Edit" : "Submit"} />
        </form>
    );
}

export default CompanyForm;