import { useNavigate } from "react-router-dom";
import dashboardBg from "../assets/dashboard-bg.jpg";

function Dashboard() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
<div
    className="min-h-screen bg-cover bg-center relative"
    style={{ backgroundImage: `url(${dashboardBg})` }}
>
<div className="absolute inset-0 bg-white/10"></div>
    <div className="relative">

            {/* Navbar */}
<div className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 text-white flex justify-between items-center px-8 py-5 shadow-xl">
                <h1 className="text-2xl font-bold">
                    ✈ Smart Trip
                </h1>

                <button
    onClick={handleLogout}
    className="
    px-6
    py-2.5
    rounded-xl
    font-semibold
    text-white
    bg-gradient-to-r
    from-emerald-500
    via-cyan-500
    to-blue-600
    hover:scale-105
    hover:shadow-xl
    transition-all
    duration-300
    "
>
    🚪 Logout
</button>

            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto mt-16">

                <h2 className="text-3xl font-bold mb-2">
                    Welcome, {user?.name} 👋
                </h2>

                <p className="text-gray-600 mb-8">
                    Plan your next adventure with AI.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

    {/* Create Trip */}

    <div
        onClick={() => navigate("/create-trip")}
className="
cursor-pointer
bg-gradient-to-br
from-emerald-50
via-cyan-50
to-sky-50
backdrop-blur-xl
rounded-3xl
shadow-xl
border
border-white/50
p-8
transition-all
duration-300
hover:-translate-y-3
hover:scale-105
hover:shadow-2xl
group
"    >

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl text-white shadow-lg mb-6">
            ✈️
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Create Trip
        </h3>

        <p className="text-gray-600 leading-7">
            Let AI generate a personalized travel itinerary based on your destination, budget, travel style, and duration.
        </p>

        <div className="mt-8 flex justify-end text-cyan-600 font-semibold group-hover:translate-x-2 transition-all">
            Explore →
        </div>

    </div>





    {/* Saved Trips */}

    <div
        onClick={() => navigate("/saved-trips")}
className="
cursor-pointer
bg-gradient-to-br
from-emerald-50
via-cyan-50
to-sky-50
backdrop-blur-xl
rounded-3xl
shadow-xl
border
border-white/50
p-8
transition-all
duration-300
hover:-translate-y-3
hover:scale-105
hover:shadow-2xl
group
"    >

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center text-3xl text-white shadow-lg mb-6">
            📖
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Saved Trips
        </h3>

        <p className="text-gray-600 leading-7">
            View, manage and revisit your saved travel plans anytime without generating them again.
        </p>

        <div className="mt-8 flex justify-end text-emerald-600 font-semibold group-hover:translate-x-2 transition-all">
            View →
        </div>

    </div>





    {/* Profile */}

    <div
        onClick={() => navigate("/profile")}
className="
cursor-pointer
bg-gradient-to-br
from-emerald-50
via-cyan-50
to-sky-50
backdrop-blur-xl
rounded-3xl
shadow-xl
border
border-white/50
p-8
transition-all
duration-300
hover:-translate-y-3
hover:scale-105
hover:shadow-2xl
group
"    >

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl text-white shadow-lg mb-6">
            👤
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-3">
            My Profile
        </h3>

        <p className="text-gray-600 leading-7">
            Access your profile information, view travel statistics, and securely manage your Smart Trip account.
        </p>

        <div className="mt-8 flex justify-end text-purple-600 font-semibold group-hover:translate-x-2 transition-all">
            Open →
        </div>

    </div>

</div>

            </div>
        </div>
        </div>
    );
}

export default Dashboard;