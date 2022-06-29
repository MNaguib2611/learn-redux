import { configureStore } from '@reduxjs/toolkit';
import ProfileReducer from '../features/profile/profileSlice';
import CompanyReducer from '../features/company/companySlice';
import DeviceReducer from '../features/device/deviceSlice';

export default configureStore({
    reducer: {
        profile: ProfileReducer,
        company: CompanyReducer,
        device: DeviceReducer,
    },
});
