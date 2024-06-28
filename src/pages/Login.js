import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);  // Reset any previous error
        try {
            const response = await fetch('http://localhost:8081/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: email, password: password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Login successful!');
            } else {
                setError(data.message || 'Une erreur s\'est produite durant la connexion');
            }
        } catch (error) {
            setError('Une erreur s\'est produite durant la connexion');
        }
    };

    return (
        <div className="bg-[#FFF5E8] h-screen flex flex-col justify-between">
            <Header />
            <div className="max-w-md flex items-center flex-col">
                <h1 className="text-2xl font-bold text-center p-5">Login</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleLogin} className={"flex flex-col items-center p-8"} style={{ minWidth: '400px' }}>
                    <div className="mb-4 flex flex-col justify-between w-full p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
                            Utilisateur
                        </label>
                        <input
                            className="input input-bordered"
                            type="text"
                            id="user"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ border: "1px solid gray", borderRadius: "5px" }}
                        />
                    </div>
                    <div className={"mb-4 flex flex-col justify-between w-full p-4"}>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="input input-bordered"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ border: "1px solid gray", borderRadius: "5px" }}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="btn border-2 border-indigo-500">
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
                </p>
            </div>
            <Footer />
        </div>
    );
}
