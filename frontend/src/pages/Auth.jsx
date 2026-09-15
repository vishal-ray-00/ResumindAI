import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/api";

const Auth = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            if (isLogin) {
                const data = await loginUser({
                    email: formData.email,
                    password: formData.password,
                });

                localStorage.setItem("token", data.token);
                window.dispatchEvent(new Event("auth-changed"));
                navigate("/analyzer");
            } else {
                await registerUser({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                });

                setIsLogin(true);
                setFormData({ username: "", email: formData.email, password: "" });
            }
        } catch (error) {
            setErrorMessage(error.message || "Unable to connect to the backend");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#030608] text-white">
            {/* Background glow - same style as landing page */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-[-200px] left-[-150px] h-[600px] w-[600px] rounded-full bg-[#7CFF00]/10 blur-[140px]" />

                <div className="absolute right-[-150px] bottom-[-250px] h-[650px] w-[650px] rounded-full bg-cyan-400/5 blur-[150px]" />

                <div className="absolute top-[25%] right-[20%] h-[350px] w-[350px] rounded-full bg-green-400/5 blur-[120px]" />
            </div>

            {/* Auth section */}
            <main className="relative z-10 flex min-h-[calc(100vh-116px)] items-center justify-center px-5 py-20">
                <div className="w-full max-w-[460px]">
                    {/* Small badge */}
                    <div className="mb-7 flex justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-gray-300 backdrop-blur-md">
                            <span>✦</span>

                            <span>AI-Powered Resume Analysis</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                            {isLogin ? (
                                <>
                                    Welcome <span className="text-[#9CFF3B]">Back</span>
                                </>
                            ) : (
                                <>
                                    Create Your <span className="text-[#9CFF3B]">Account</span>
                                </>
                            )}
                        </h1>

                        <p className="mt-4 text-base text-gray-400 md:text-lg">
                            {isLogin
                                ? "Sign in to continue analyzing your resume."
                                : "Get started with AI-powered resume analysis."}
                        </p>
                    </div>

                    {/* Card */}
                    <div className="rounded-[28px] border border-white/[0.09] bg-[#080C0F]/80 p-7 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-9">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Username - Register only */}
                            {!isLogin && (
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-300">Username</label>

                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter your username"
                                        required
                                        className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-white transition outline-none placeholder:text-gray-600 focus:border-[#9CFF3B]/60 focus:ring-2 focus:ring-[#9CFF3B]/10"
                                    />
                                </div>
                            )}

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-white transition outline-none placeholder:text-gray-600 focus:border-[#9CFF3B]/60 focus:ring-2 focus:ring-[#9CFF3B]/10"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Password</label>

                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-white transition outline-none placeholder:text-gray-600 focus:border-[#9CFF3B]/60 focus:ring-2 focus:ring-[#9CFF3B]/10"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 h-13 w-full rounded-full bg-[#96FF00] text-base font-bold text-black transition duration-200 hover:bg-[#A7FF29] hover:shadow-[0_0_35px_rgba(150,255,0,0.3)] active:scale-[0.98]"
                            >
                                {isSubmitting ? "Sending..." : isLogin ? "Sign In" : "Create Account"}
                            </button>

                            {errorMessage && <p className="mt-3 text-center text-sm text-red-400">{errorMessage}</p>}
                        </form>

                        {/* Switch Login/Register */}
                        <div className="mt-7 text-center">
                            <p className="text-sm text-gray-500">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}

                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsLogin(!isLogin);

                                        setFormData({
                                            username: "",
                                            email: "",
                                            password: "",
                                        });
                                    }}
                                    className="ml-2 font-semibold text-[#9CFF3B] transition hover:text-[#B6FF66]"
                                >
                                    {isLogin ? "Sign Up" : "Sign In"}
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Bottom text */}
                    <p className="mt-6 text-center text-xs text-gray-600">Your resume data is securely processed.</p>
                </div>
            </main>
        </div>
    );
};

export default Auth;
