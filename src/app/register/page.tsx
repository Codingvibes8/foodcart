"use client"
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link'

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(e:ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json'
            }
        });
    }

    return (
        <div className="mt-28 flex flex-col items-center justify-center">
            <h1 className="text-center text-3xl mb-8">FoodCart</h1>
            <h1 className="text-center text-2xl mb-8">RegisterPage</h1>
            <form className="block w-full mx-auto md:max-w-lg px-10">
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={handleFormSubmit}>
                    Register
                </button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center">
                    <Image src="/google.png" alt="" width={24} height={24} />
                    Login with Google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account?{' '}
                    <Link className="underline" href="/login">
                        Login here &raquo;
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;

