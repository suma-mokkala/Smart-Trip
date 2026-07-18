import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CreateTrip from "../pages/CreateTrip";
import TripDetails from "../pages/TripDetails";
import SavedTrips from "../pages/SavedTrips";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
<Route
    path="/dashboard"
    element={
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>
    }
/>      
<Route
    path="/create-trip"
    element={
        <ProtectedRoute>
            <CreateTrip />
        </ProtectedRoute>
    }
/>

      <Route path="/trip/:id" element={<TripDetails />} />
      <Route
    path="/saved-trips"
    element={
        <ProtectedRoute>
            <SavedTrips />
        </ProtectedRoute>
    }
/>
<Route
 path="/trip-details"
 element={<TripDetails/>}
/>
<Route path="/profile" element={<Profile />} />
<Route
    path="/saved-trips"
    element={<SavedTrips />}
/>
<Route
    path="/profile"
    element={
        <ProtectedRoute>
            <Profile />
        </ProtectedRoute>
    }
/>      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default AppRoutes;