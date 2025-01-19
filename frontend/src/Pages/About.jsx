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
            <p>Welcome to Imppack, where innovation meets excellence in packaging solutions! Based in Sambalpur, Odisha, we are a dynamic startup dedicated to manufacturing premium-quality boxes tailored to meet diverse needs across industries.</p>
            <p>At Imppack, we blend advanced technology with meticulous craftsmanship to deliver durable, eco-friendly, and customizable packaging options that stand out for their quality and reliability. Whether it’s for retail, shipping, or specialized requirements, our boxes are designed to ensure safety and aesthetic appeal for your products.</p>
            <p>As a young and passionate team, we are driven by a commitment to customer satisfaction, continuous improvement, and sustainable practices. Our vision is to redefine packaging by setting new benchmarks in quality and innovation, catering to businesses of all sizes with solutions that truly make an impact.</p>
            <p>Join us in creating a future where every package delivers more than just a product—it delivers trust. Choose Imppack, your partner in premium packaging!</p>
            {/* <b className='text-gray-800'>Our Mission</b> */}
            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dolorum alias ab pariatur, eveniet ipsum enim doloribus quod deserunt laudantium voluptatibus necessitatibus dignissimos veniam reiciendis eos qui earum mollitia assumenda.</p> */}
        </div>

      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY CHOOSE'} text2={'CORROVATIVE PACKAGING'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div  className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Corrugated Packaging Supports Preservation:</b>
              <p className='text-gray-600'>Shipping damages can cost businesses thousands of dollars, but corrugated packaging offers a reliable solution. Its durable design protects products from rough handling and transit challenges, ensuring they arrive in perfect condition.Used across industries, corrugated materials safeguard items while reducing the risk of loss or damage. This not only prevents financial setbacks but also builds trust with your customers.By delivering products safely and on time, corrugated packaging boosts sales and strengthens your brand’s reputation. Protect your goods—and your bottom line—with corrugated packaging.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Preservation of Comestibles:</b>
              <p className='text-gray-600'>Corrugated cardboard is gaining popularity for shipping produce due to its ability to preserve freshness, aroma, appearance, and taste better than plastic. It extends shelf life by keeping external moisture out, preventing spoilage during long shipments.This benefits the entire supply chain, reducing food waste and boosting sales. Additionally, studies show that corrugated packaging positively influences consumer purchasing behavior, making it an attractive option for grocery stores.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Preservation of Consumer Products:</b>
              <p className='text-gray-600'>Corrugated cardboard packaging ensures products are shipped safely with added padding and customizable designs. Its flexibility allows companies to tailor packaging to fit specific products, providing better protection and care during transit.</p>
          </div>
          
        </div>
        {/* <Newsletterbox/> */}
    </div>
  )
}

export default About