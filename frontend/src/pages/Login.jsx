import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";
import authBg from "../assets/auth-bg.jpg";
import Swal from "sweetalert2";
function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await loginUser({
                email,
                password,
            });

            localStorage.setItem("token", response.data.token);

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

Swal.fire({
    title: "Smart Trip",
    text: "Login Successful!",
    icon: "success",
    confirmButtonColor: "#06b6d4"
});
            navigate("/dashboard");

        } catch (error) {
            alert(
                error.response?.data?.message || "Login Failed"
            );
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-end bg-cover bg-center bg-no-repeat relative px-40"
            style={{
                backgroundImage: `url(${authBg})`
            }}
        >
            {/* Brighter Overlay */}
            <div className="absolute inset-0 bg-white/20"></div>

            {/* Login Card */}
            <div className="relative w-full max-w-md px-4">

                {/* Gradient Background */}
<div className="rounded-3xl shadow-2xl">
                    {/* White Form */}
                    <div className="bg-blue-50 rounded-3xl shadow-2xl p-8">

                        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                            ✈ Smart Trip
                        </h1>

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 rounded-xl border border-gray-300 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-4 rounded-xl border border-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            onClick={handleLogin}
                            className="w-full py-4 rounded-xl text-lg font-semibold text-white
                            bg-linear-to-r
                            from-emerald-500
                            via-teal-500
                            to-cyan-600
                            hover:scale-105
                            hover:shadow-xl
                            transition-all duration-300"
                        >
                            Login
                        </button>

                        <p className="text-center mt-6 text-gray-600">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="text-blue-600 font-bold hover:text-blue-800 transition-all"
                            >
                                Register
                            </Link>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;