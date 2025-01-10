import React from 'react';
import Title from '../Components/Title';

const TermsAndConditions = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'TERMS AND'} text2={'CONDITIONS'} />
      </div>

      {/* Main Content Section */}
      <div className="my-10 flex flex-col gap-6 text-gray-600">
        <ul className="list-disc pl-5">
          <li className="mb-4">
            The content of the pages of this website is subject to change without notice.
          </li>
          <li className="mb-4">
            Neither we nor any third parties provide any warranty or guarantee as to the accuracy, 
            timeliness, performance, completeness, or suitability of the information and materials 
            found or offered on this website for any particular purpose. You acknowledge that such 
            information and materials may contain inaccuracies or errors, and we expressly exclude 
            liability for any such inaccuracies or errors to the fullest extent permitted by law.
          </li>
          <li className="mb-4">
            Your use of any information or materials on our website and/or product pages is entirely 
            at your own risk, for which we shall not be liable. It shall be your own responsibility 
            to ensure that any products, services, or information available through our website and/or 
            product pages meet your specific requirements.
          </li>
          <li className="mb-4">
            Our website contains material which is owned by or licensed to us. This material includes, 
            but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is 
            prohibited other than in accordance with the copyright notice, which forms part of these 
            terms and conditions.
          </li>
          <li className="mb-4">
            All trademarks reproduced in our website which are not the property of, or licensed to, 
            the operator are acknowledged on the website.
          </li>
          <li className="mb-4">
            Unauthorized use of information provided by us shall give rise to a claim for damages and/or 
            be a criminal offense.
          </li>
          <li className="mb-4">
            From time to time, our website may also include links to other websites. These links are 
            provided for your convenience to provide further information.
          </li>
          <li className="mb-4">
            You may not create a link to our website from another website or document without Ekyaq’s 
            prior written consent.
          </li>
          <li className="mb-4">
            Any dispute arising out of use of our website and/or purchase with us and/or any engagement 
            with us is subject to the laws of India.
          </li>
          <li className="mb-4">
            We shall be under no liability whatsoever in respect of any loss or damage arising directly 
            or indirectly out of the decline of authorization for any transaction, on account of the 
            cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank 
            from time to time.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
