'use client';
import SectionHeaders from "@/src/components/SectionHeader";
 import MenuItem from "@/src/components/Menu/MenuItem";
import Image from "next/image";


export default function HeroMenu() {

    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute left-0 -top-[70px] text-left -z-10">
                    <Image src={'/sallad.png'} width={109} height={189}  alt={'sallad'} />
                </div>
                <div className="absolute -top-[100px] right-0 -z-10">
                    <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
                </div>
            </div>
            <div className="text-center mt-8 flex flex-col">
                <SectionHeaders
                    subHeader='check out'
                    mainHeader='Our Best Sellers' />
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8'>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>

        </section>
    );
}