/** @format */

import Link from "next/link";

const Header = () => {
    return (
        <nav className='flex flex-row justify-between items-center bg-black text-white p-4 gap-4 mx-auto'>
            <h1 className='text-3xl font-bold'>Next App</h1>
            <ul className='flex flex-row gap-4'>
                <li className='uppercase hover:underline'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='uppercase hover:underline'>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
