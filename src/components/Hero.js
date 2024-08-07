import Image from "next/image";



export default function Hero() 
{
  return (
      <section className='.hero mt-16 max-w-[1536px] mx-auto'>
      <div className='w-full mx-auto flex  px-10'>
          {/*textContainer*/}
            <div className={'flex flex-col pt-10'}>
                <h1 className="text-3xl font-semibold">
                    <span className={'text-primary'}>Elevate Every Moment With </span>
                    <br/>
                    <span className="text-green-800">
           Our Pizza
          </span>
                </h1>

                <p className="my-6 text-gray-700 text-lg max-w-md mx-auto">
                    Pizza: The Simple Joy That Completes Your Day!
                </p>


                <div className="flex gap-4 text-sm">
                    <button
                        className="flex items-center justify-center bg-red-700 hover:bg-red-500 transition-all  duration-300 uppercase gap-2 text-slate-100 px-4 py-2 rounded-full">
                        Order now

                    </button>
                    <button className="flex items-center border-0 gap-2 py-2 px-4 text-slate-100 bg-red-500 hover:bg-red-400 transition-colors font-semibold rounded-md">
                        Learn more

                    </button>
                </div>

            </div>

            {/*imageContainer*/}
            <div className="relative px-10 py-20 flex-shrink-0">
                <Image src='/pizza.png'  width={400} height={400}  alt={'sallad'} />
            </div>
        </div>

      </section>
  )
}


