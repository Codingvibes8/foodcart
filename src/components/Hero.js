import Image from "next/image";



const Hero = () => {
  return (
      <section className='grid grid-cols-2 mt-16 max-w-[1536px] mx-auto'>

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
                        className="flex items-center justify-center bg-green-600 hover:bg-green-800 transition-colors uppercase gap-2 text-white px-4 py-2 rounded-full">
                        Order now

                    </button>
                    <button className="flex items-center border-0 gap-2 py-2 px-2 text-gray-900 bg-green-300 hover:bg-green-600 transition-colors font-semibold rounded-md">
                        Learn more

                    </button>
                </div>

            </div>

            {/*imageContainer*/}
            <div className="hidden flex-shrink-0 md:block mx-auto pt-10">
                {/*<Image src='/pizza.png' alt='pizza' width={400} height={400}/>*/}
            </div>
        </div>

      </section>
  )
}
export default Hero


