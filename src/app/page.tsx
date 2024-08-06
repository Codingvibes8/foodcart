"use client"

import HeroMenu from "@/src/components/HeroMenu";
import Hero from "@/src/components/Hero";
import SectionHeaders from "@/src/components/SectionHeader";


export default function Home() {


  return (
      <>
          <Hero/>
          <HeroMenu/>
          <section className='text-center mt-6'>
              <SectionHeaders mainHeader={'Our Story'} subHeader={'About Us'}/>

              <div className='max-w-md mx-auto mt-4 text-gray-600 flex flex-col gap-4'>
                  <p>ipsum dolor sit amet consectetur adipisicing elit.
                      Aperiam recusandae odio laboriosam facilis laborum minus,
                      illum nostrum quos incidunt eum quidem accusamus deleniti autem
                      error eius quaerat ad, accusantium placeat</p>
                  <p>ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae
                      odio laboriosam facilis laborum minus,
                      illum nostrum quos </p>
                  <p>ipsum dolor sit amet consectetur adipisicing elit.
                      Aperiam recusandae odio laboriosam facilis laborum minus,
                      illum nostrum quos incidunt
                  </p>
              </div>
          </section>
          <section className='text-center my-14 text-2xl'>
              <SectionHeaders mainHeader="Don't Hesitate" subHeader='Contact Us'/>

              <div className='mt-8 '>
                  <a className='text-2xl underline text-gray-500 mb-14' href='tel:+44 765 89677'>Call : +44 765 89677</a>

              </div>
          </section>

      </>
  );

}