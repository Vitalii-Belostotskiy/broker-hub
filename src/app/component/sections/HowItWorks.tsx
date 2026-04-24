import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineCastConnected } from 'react-icons/md';
import React from 'react';
import AnimateIn from '../AnimateIn';

interface HowItWorksDict {
  title: string;
  steps: string[];
}

export default function HowItWorks({ dict }: { dict: HowItWorksDict }) {
  const connectorIcons = [
    <IoIosPeople className='text-3xl text-amber-500' key='0' />,
    <MdOutlineCastConnected className='text-3xl text-amber-500' key='1' />,
    <FaHandshake className='text-3xl text-amber-500' key='2' />,
    <BsGraphUp className='text-3xl text-amber-500' key='3' />,
    <AiOutlineDollarCircle className='text-3xl text-amber-500' key='4' />,
  ];

  return (
    <section id='howItWorks' className='h-full py-10 flex items-center bg-gray-100 scroll-mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <AnimateIn delay={0}>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8'>{dict.title}</h2>
        </AnimateIn>

        {/* Mobile / tablet: vertical list */}
        <div className='grid sm:grid-cols-2 lg:hidden gap-6'>
          {dict.steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 120}>
              <div className='flex items-center gap-4'>
                <div className='shrink-0 w-11 h-11 rounded-full bg-white border border-amber-500 flex items-center justify-center text-zinc-900 font-bold text-base'>
                  {i + 1}
                </div>
                <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>{step}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Desktop: horizontal timeline */}
        <div className='hidden lg:flex items-start'>
          {dict.steps.map((step, i) => (
            <React.Fragment key={i}>
              <AnimateIn delay={i * 150} className='flex-1 min-w-0'>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-26 h-26 rounded-full bg-white border border-amber-500 flex items-center justify-center text-zinc-900 font-bold text-base'>
                    {i + 1}
                  </div>
                  <p className='text-gray-600 text-sm leading-relaxed mt-6'>{step}</p>
                </div>
              </AnimateIn>

              <AnimateIn delay={i * 150 + 75} className='shrink-0 w-16 h-11 flex items-center justify-center'>
                <div className='relative mt-13 w-full flex items-center justify-center'>
                  <div
                    className={`absolute inset-x-0 h-px bg-gradient-to-r ${
                      i < dict.steps.length - 1
                        ? 'from-amber-300/60 via-amber-400/80 to-amber-300/60'
                        : 'from-amber-300/60 via-amber-400/80 to-transparent'
                    }`}
                  />
                  <div className='relative  z-10 bg-gray-100 px-1'>{connectorIcons[i]}</div>
                </div>
              </AnimateIn>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
