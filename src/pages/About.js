import React from 'react';

import WomanImg from '../img/about/woman.png';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

const About = () => {
  return ( 
  <motion.section 
   initial={{ opacity: 0, y: '100%' }} 
   animate={{ opacity: 1, y: 0 }}
   exit={{ opacity: 0, y: '100%' }}
   transition={transition1}
   className='section  '>
    <div className='container mx-auto h-full relative'>
      <div className=' flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24
      text-center lg:text-left lg:pt-16 '>
        <div className='flex-1 max-h-96 lg:max-h-max
        order-2 lg:order-none overflow-hidden'>
           <img src={WomanImg} alt=''/>
        </div>
        <motion.div 
        initial={{ opacity: 0, y: '-80%' }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-80%' }}
        transition={transition1}
        className='flex-1 pt-36 pb-14 lg:pt-0 
        lg:w-auto z-10 flex flex-col justify-center
        items-center lg:items-start'>
           <h1 className='h1 text-[50px]'> About me</h1>
           <p className='mb-10 max-w-sm'>Lorem Ipsum is simply 
             dummy text of the printing . Lorem Ipsum has been the industry's 
             standard <b>dummy text ever since the 1500s</b>, 
             when an unknown printer took a galley of type 
             and scrambled it to make a type book. 
             <br/>
             <br/>
             the leap into electronic 
             typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release
             of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software. 
           </p>
           <Link to={'/portfolio'} className='btn mb-[10px] bg-[#b10404]'>View my work</Link>
        </motion.div>
      </div>
    </div>
   </motion.section>
  );
};

export default About;
