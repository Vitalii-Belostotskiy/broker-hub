import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineCastConnected } from 'react-icons/md';
import React from 'react';

interface HowItWorksDict {
  title: string;
  steps: string[];
}

export default function HowItWorks({ dict }: { dict: HowItWorksDict }) {
  const connectorIcons = [
    <IoIosPeople className='text-3xl text-amber-400' key='0' />,
    <MdOutlineCastConnected className='text-3xl text-amber-400' key='1' />,
    <FaHandshake className='text-3xl text-amber-400' key='2' />,
    <BsGraphUp className='text-3xl text-amber-400' key='3' />,
    <AiOutlineDollarCircle className='text-3xl text-amber-400' key='4' />,
  ];

  return (
    <section id='howItWorks' className='py-20 sm:py-28 bg-zinc-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white text-center mb-16'>{dict.title}</h2>

        {/* Mobile / tablet: vertical list */}
        <div className='grid sm:grid-cols-2 lg:hidden gap-6'>
          {dict.steps.map((step, i) => (
            <div key={i} className='flex items-center gap-4'>
              <div className='shrink-0 w-11 h-11 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-base'>
                {i + 1}
              </div>
              <p className='text-zinc-400 text-sm leading-relaxed'>{step}</p>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal timeline — circles + connector segments with icons */}
        <div className='hidden lg:flex items-start'>
          {dict.steps.map((step, i) => (
            <React.Fragment key={i}>
              {/* Step column */}
              <div className='flex-1 flex flex-col items-center text-center min-w-0'>
                <div className='w-11 h-11 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-base'>
                  {i + 1}
                </div>
                <p className='text-zinc-300 text-sm leading-relaxed mt-6'>{step}</p>
              </div>

              {/* Connector segment with icon — after every step; last one fades out */}
              <div className='shrink-0 w-16 h-11 flex items-center justify-center'>
                <div className='relative w-full flex items-center justify-center'>
                  <div
                    className={`absolute inset-x-0 h-px bg-gradient-to-r ${
                      i < dict.steps.length - 1
                        ? 'from-amber-400/20 via-amber-400/35 to-amber-400/20'
                        : 'from-amber-400/20 via-amber-400/35 to-transparent'
                    }`}
                  />
                  <div className='relative z-10 bg-zinc-950 px-1'>{connectorIcons[i]}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
