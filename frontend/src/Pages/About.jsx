import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque est cupiditate nisi, culpa mollitia omnis aut quae quo eveniet corrupti assumenda dolorem, labore ut! Ratione quaerat quia cupiditate in eum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, accusantium, incidunt fuga vel neque praesentium molestiae sint fugit minus dolorem eligendi excepturi nam itaque perspiciatis beatae magnam quos voluptate eum!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dolorum alias ab pariatur, eveniet ipsum enim doloribus quod deserunt laudantium voluptatibus necessitatibus dignissimos veniam reiciendis eos qui earum mollitia assumenda.</p>
        </div>

      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY CHOOSE'} text2={'CORROVATIVE PACKAGING'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div  className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Corrugated Packaging Supports Preservation:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam, recusandae mollitia architecto, voluptas sunt corporis nam quis quia ea omnis exercitationem rerum impedit vero, tempore beatae minus illum hic?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Preservation of Comestibles:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam, recusandae mollitia architecto, voluptas sunt corporis nam quis quia ea omnis exercitationem rerum impedit vero, tempore beatae minus illum hic?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Preservation of Consumer Products:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam, recusandae mollitia architecto, voluptas sunt corporis nam quis quia ea omnis exercitationem rerum impedit vero, tempore beatae minus illum hic?</p>
          </div>
          
        </div>
        {/* <Newsletterbox/> */}
    </div>
  )
}

export default About