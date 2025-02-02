import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';

import HomePage from './components/HomePage';
import RideResultsPage from './components/RideResultsPage';
import RideDetailsPage from './components/RideDetailsPage';
import TripDetailsPage from './components/TripDetailsPage';
import PaymentSummaryPage from './components/PaymentSummaryPage';
import FeedbackPage from './components/FeedbackPage';

import Home from './components/LoginAndRegister/Home';
import Admin from './components/LoginAndRegister/Admin';
import User from './components/LoginAndRegister/User';
import Register from './components/LoginAndRegister/Register';
import Logout from './components/LoginAndRegister/Logout';

import Dashboard from './components/Admin/Dashboard';
import IssueManagement from './components/Admin/IssueManagement';
import PolicyManagement from './components/Admin/PolicyManagement';
import Reports from './components/Admin/Reports';
import RideMonitoring from './components/Admin/RideMonitoring';
import UserManagement from './components/Admin/UserManagement';

import Profile from './components/UserContext/Profile';
import Layout from './components/Layout/Layout';
import SearchMap from './components/Map/SearchMap';
import PostMap from './components/Map/PostMap';

import Developers from './components/DevelopersAndDocumentation/Developers';
import UserDocumentation from './components/DevelopersAndDocumentation/UserDocumentation';
import DeveloperDocumentation from './components/DevelopersAndDocumentation/DeveloperDocumentation';
import APIDocumentation from './components/DevelopersAndDocumentation/APIDocumentation';

import PostRideDetails from './components/Post_Ride_Components/PostRideDetails';
import PostRidePaymentSummaryPage from './components/Post_Ride_Components/PaymentConfirmation';
import PostRideFeedbackPage from './components/Post_Ride_Components/DriverFeedback';

import UserDashboard from './components/UserContext/UserDashboard';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />

                    {/* Login and Register Routes */}
                    <Route path="/login" element={<Home />} />
                    <Route path="/login/register" element={<Register />} />
                    <Route path="/login/user" element={<User />} />
                    <Route path="/login/admin" element={<Admin />} />
                    <Route path="/logout" element={<Logout />} />

                    {/* User Routes */}
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/user-dashboard" element={<UserDashboard />} />

                    {/* Search Routes */}
                    <Route path="/search-ride" element={<SearchMap />} />
                    <Route path="/ride-results" element={<RideResultsPage />} />
                    <Route path="/ride-details" element={<RideDetailsPage />} />
                    <Route path="/trip-details" element={<TripDetailsPage />} />
                    <Route path="/payment-summary" element={<PaymentSummaryPage />} />
                    <Route path="/feedback" element={<FeedbackPage />} />
                    {/* Post Routes */}
                    <Route path="/post-ride" element={<PostMap />} />
                    <Route path="/post-ride-details" element={<PostRideDetails />} />
                    <Route path="/post-payment-summary" element={<PostRidePaymentSummaryPage />} />
                    <Route path="/post-driver-feedback" element={<PostRideFeedbackPage />} />

                    {/* Developer and Documentation Routes */}
                    <Route path="/developer" element={<Developers />} />
                    <Route path="/user-documentation" element={<UserDocumentation />} />
                    <Route path="/developer-documentation" element={<DeveloperDocumentation />} />
                    <Route path="/api-documentation" element={<APIDocumentation />} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/admin/issue-management" element={<IssueManagement />} />
                    <Route path="/admin/policy-management" element={<PolicyManagement />} />
                    <Route path="/admin/reports" element={<Reports />} />
                    <Route path="/admin/ride-monitoring" element={<RideMonitoring />} />
                    <Route path="/admin/user-management" element={<UserManagement />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
