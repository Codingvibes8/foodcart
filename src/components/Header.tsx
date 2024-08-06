'use client';
import Link from "next/link";
import React from "react";





const Header = () => {

    return (
        <header className={'bg-green-600 w-full h-16 px-6 py-2 fixed top-0 left-0'}>
            <div className="md:flex items-center hidden justify-between">
                <nav className="flex items-center justify-center gap-8 text-gray-100 font-semibold">
                    <Link className="text-primary font-bold text-2xl font serif" href={'/'}>
                        FoodCart
                    </Link>
                    <Link href={'/'} className={'text-[1rem]'}>Home</Link>
                    <Link href={'/'} className={'text-[1rem]'}>Menu</Link>
                    <Link href={'/'} className={'text-[1rem]'}>About</Link>
                    <Link href={'/'} className={'text-[1rem]'}>Contact</Link>
                </nav>
                <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                    <Link href='/login' className='bg-red-700 hover:bg-red-500 rounded-2xl text-slate-100 px-4 py-2 transition-colors'>Login</Link>
                    <Link href='/register' className='bg-red-700 hover:bg-red-500 rounded-2xl text-slate-100 px-4 py-2 transition-colors'>Register</Link>
                </nav>


            </div>
        </header>


    )
}
export default Header


//import { useState} from "react";
//authlink props---status={status} userName={userName}
// import {CartContext} from "@/components/AppContext";
// import Bars2 from "@/components/icons/Bars2";
// import ShoppingCart from "@/components/icons/ShoppingCart";
// import {signOut, useSession} from "next-auth/react";

//useContext,
// function AuthLinks({status, userName}) {
//     if (status === 'authenticated') {
//         return (
//             <>
//                 <Link href={'/profile'} className="whitespace-nowrap">
//                     Hello, {userName}
//                 </Link>
//                 <button
//                     onClick={() => signOut()}
//                     className="bg-primary rounded-full text-white px-8 py-2">
//                     Logout
//                 </button>
//             </>
//         );
//     }
//     if (status === 'unauthenticated') {
//         return (
//             <>
//                 <Link href={'/login'}>Login</Link>
//                 <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">
//                     register
//                 </Link>
//             </>
//         );
//     }
// }

//function Header() {
    // const session = useSession();
    // const status = session?.status;
    // const userData = session.data?.user;
    // let userName = userData?.name || userData?.email;
    // const {cartProducts} = useContext(CartContext);
//const [mobileNavOpen, setMobileNavOpen] = useState(false);
    // if (userName && userName.includes(' ')) {
    //     userName = userName.split(' ')[0];
    // }
    //return (
      //  <header>
            {/*<button*/}
            {/*    className="p-1 border"*/}
            {/*    onClick={() => setMobileNavOpen(prev => !prev)}>*/}
            {/*    <Bars2/>*/}
            {/*</button>*/}

            {/*      <div className="flex gap-8 items-center">*/}
            {/*          <Link href={'/cart'} className="relative">*/}
            {/*              <ShoppingCart />*/}
            {/*              {cartProducts?.length > 0 && (*/}
            {/*                  <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">*/}
            {/*  {cartProducts.length}*/}
            {/*</span>*/}
            {/*              )}*/}
            {/*          </Link>*/}

            {/*      </div>*/}
            {/*  </div>*/}
            {/*{mobileNavOpen && (*/}
            {/*    <div*/}
            {/*        onClick={() => setMobileNavOpen(false)}*/}
            {/*        className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center">*/}
            {/*        <Link href={'/'}>Home</Link>*/}
            {/*        <Link href={'/menu'}>Menu</Link>*/}
            {/*        <Link href={'/#about'}>About</Link>*/}
            {/*        <Link href={'/#contact'}>Contact</Link>*/}
            {/*        /!*<AuthLinks status={status} userName={userName} />*!/*/}
            {/*    </div>*/}
            {/*)}
            <div className="hidden md:flex items-center justify-between">

                <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                   <AuthLinks  />
                    <p>ShoppingCart</p>
          {/*          <Link href={'/cart'} className="relative">*/}
            {/*              <ShoppingCart />*/}
            {/*              {cartProducts?.length > 0 && (*/}
            {/*                  <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">*/}
            {/*  {cartProducts.length}*/}
            {/*</span>*/}
            {/*              )}*/}
            {/*          </Link>*/}
{/*        </nav>*/}
{/*</div>*/}
{/*</header>*/}
{/*)*/}
{/*    ;*/}
{/*}*/}




