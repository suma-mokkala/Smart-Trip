import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSavedTrips } from "../api/saveTripApi";

import profileBg from "../assets/profile-bg.jpg";
import LoadingSpinner from "../components/LoadingSpinner";

function Profile() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [loading, setLoading] = useState(true);
    const [tripCount, setTripCount] = useState(0);

    useEffect(() => {
        fetchTrips();
    }, []);

    const fetchTrips = async () => {

        try {

            setLoading(true);

            const response = await getSavedTrips();

            setTripCount(response.data.trips.length);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");

    };

    if (loading) {

        return <LoadingSpinner />;

    }

    return (

<div
    className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end pr-30"
    style={{
        backgroundImage: `url(${profileBg})`
    }}
>

    {/* Bright Background */}

    <div className="absolute inset-0 bg-white/10"></div>

    {/* Profile Card */}

    <div
        className="
relative
w-full
max-w-sm
rounded-3xl
bg-white/70
backdrop-blur-xl
border border-white/30
shadow-2xl
p-7
"
    >

        {/* Avatar */}

        <div className="flex justify-center mb-6">

            

        </div>

        {/* Heading */}
<h1
    className="
    text-2xl
    font-bold
    text-center
    bg-gradient-to-r
    from-emerald-600
    via-cyan-600
    to-blue-700
    bg-clip-text
    text-transparent
    mb-2
    "
>
    My Profile
</h1>

        <p className="text-center text-gray-700 mt-3 mb-8">
            Welcome back to Smart Trip
        </p>

        {/* Details */}

        <div className="space-y-5">

            <div className="bg-white/80 rounded-2xl p-5 shadow-lg">

                <p className="text-gray-500 text-sm">
                    Full Name
                </p>

                <h2 className="text-xl font-bold text-gray-800">
                    {user?.name}
                </h2>

            </div>

            <div className="bg-white/80 rounded-2xl p-5 shadow-lg">

                <p className="text-gray-500 text-sm">
                    Email Address
                </p>

                <h2 className="text-xl font-bold text-gray-800 break-all">
                    {user?.email}
                </h2>

            </div>

            <div className="bg-white/80 rounded-2xl p-5 shadow-lg">

                <p className="text-gray-500 text-sm">
                    Saved Trips
                </p>

                <h2 className="text-xl font-bold text-gray-800">
                    {tripCount}
                </h2>

            </div>

        </div>

        {/* Logout */}

        <button
            onClick={handleLogout}
            className="
            w-full
            mt-8
            py-3
            rounded-xl
            font-bold
            text-white
            bg-gradient-to-r
            from-emerald-500
            via-cyan-500
            to-blue-600
            hover:scale-105
            hover:shadow-2xl
            transition-all
            duration-300
            "
        >
            🚪 Logout
        </button>

    </div>

</div>

);
}

export default Profile;