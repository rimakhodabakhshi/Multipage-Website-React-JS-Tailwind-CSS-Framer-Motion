import React from 'react';

import WomanImg from '../img/contact/woman.png';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';


const Contact = () => {
  return( 
     <motion.section 
     initial={{ opacity: 0, y: '100%' }} 
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: '100%' }}
     transition={transition1}
     className='section bg-white '>
     <div className='flex flex-col lg:flex-row h-full
     items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
       <div className=''></div>

       <div className='lg:flex-1 lg:pt-1 px-50'>
         <h1 className='h1 text-[70px]' >Contact me</h1>
         <p className='mb-12' >I would love to get suggestions from you.</p>
         <form className='flex flex-col gap-y-3'>
            <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your name'/>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your email address'/>
            </div>
            <input className='outline-none border-b border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your message'/>
            <button className='btn mb-[30px] mx-auto 
            lg:mx-0 self-start bg-[#b10404]'> Send it </button>    
         </form>
        </div>
       <motion.div 
       
       initial={{ opacity: 0, y: '100%' }} 
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: '100%' }}
       transition={ transition1 }
       className='lg:flex-1'>
         <img src={WomanImg} alt=''/>
       </motion.div>
     </div>
  </motion.section >
  );
};

export default Contact;
