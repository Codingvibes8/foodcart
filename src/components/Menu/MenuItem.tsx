import Image from "next/image";


export default function MenuItem()  {
    return (
        <div className='rounded-md bg-gray-300 hover:bg-red-300 hover:shadow-md hover:shadow-blue-400 p-2 flex flex-col items-center justify-center'>
            <Image src='/pizza.png' width={80} height={80} alt='nice pizza' />
            <h4 className='font-semibold my-2'>nice pizza</h4>
            <p className='text-gray-500 text-sm mb-2'>Delicious,Mouthwatering,Tasty pizza</p>
            <button className='text-white rounded-lg bg-green-600 px-4 py-2'>Add To Cart £10</button>
        </div>
    );
};
