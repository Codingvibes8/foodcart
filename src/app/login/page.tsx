"use client"

import {useState} from 'react'




export default function LoginPage()  {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitHandler = (e)=>{
        e.preventDefault()
         fetch('/api/login',{
             method:'POST',
             body:JSON.stringify({email,password}),
             headers:{'Content-type':'application/json'}
         })
    }




    return (
        <div className={'mt-28 flex flex-col items-center justify-center'}>
            <h1 className={'text-center text-3xl mb-8'}>
                LoginPage
            </h1>
            <h1 className={'text-center text-3xl mb-8'}>
                FoodCart
            </h1>
            <form className={'w-full px-10'}>
                <input type={'email'}
                       placeholder={'email'}
                       value={'email'}
                       onChange={e => setEmail(e.target.value)}
                />
                <input type={'password'}
                       placeholder={'password'}
                       value={'password'}
                       onChange={e => setPassword(e.target.value)}
                />
                <button type={'submit'}
                        handleSubmit={submitHandler}>
                    Submit
                </button>
            </form>


        </div>
    );
};
