import React, { useState } from "react";
import useUserStore from "../store/useLoginStore";

function Login() {
    const [username, setUsername] = useState("");
    const { login } = useUserStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            login(username);
        }
    };

    return (
        <div className="border w-[250px] p-3 rounded-xl items-center ml-5 " >
            <h1>7. User Authentication (Login/Logout)
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name kriting"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="py-2 px-3 outline-0 border-2 border-blue-500 mb-2 rounded-md"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-1 px-3 rounded-md ml-2"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
