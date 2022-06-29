import './App.css';
import CompanyList from './features/company/CompanyList';
import CompanyForm from './features/company/CompanyForm';
import Profile from './features/profile/Profile';
import DeviceList from './features/device/DeviceList';

function App() {
  return (
    <div className="row" >

      <div className="column left-div" style={{ backgroundColor: "#bbb" }}>
        <div className='column-left '>
          <h2>profile</h2>
          <Profile />
        </div>
        <div className='column-left '>
          <DeviceList />
        </div>
      </div >

      <div className="column left-div" style={{ backgroundColor: "#aaa" }} >
        <div className='column-left '>
          <CompanyList />
        </div>
        <div className='column-left '>
          <CompanyForm />
        </div>

      </div >


    </div >
  );
}

export default App;
