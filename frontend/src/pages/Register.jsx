import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/authApi";
import authBg from "../assets/auth-bg.jpg";
import Swal from "sweetalert2";
function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {

            const response = await registerUser({
                name,
                email,
                password
            });

Swal.fire({
    title: "Smart Trip",
    text: response.data.message,
    icon: "success",
    confirmButtonColor: "#06b6d4"
});
            navigate("/");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }

    };

    return (

        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end pr-32"
            style={{ backgroundImage: `url(${authBg})` }}
        >

            <div className="w-full max-w-md">

                <div className="bg-gradient-to-br from-emerald-50 via-cyan-50 to-sky-50 rounded-3xl shadow-2xl p-8">

                    <h1 className="text-5xl font-extrabold text-center mb-2 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                        🌍 Smart Trip
                    </h1>

                    <p className="text-center text-gray-600 mb-8">
                        Create your Smart Trip account
                    </p>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                    />

                    <button
                        onClick={handleRegister}
                        className="w-full py-3 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        Create Account
                    </button>

                    <p className="text-center mt-6 text-gray-700">
                        Already have an account?{" "}
                        <Link
                            to="/"
                            className="font-semibold text-cyan-700 hover:text-blue-700"
                        >
                            Login
                        </Link>
                    </p>

                </div>

            </div>

        </div>

    );
}

export default Register;