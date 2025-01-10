import React from 'react';
import Title from '../Components/Title';

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'PRIVACY'} text2={'POLICY'} />
      </div>

      {/* Main Content Section */}
      <div className="my-10 flex flex-col gap-6 text-gray-600">
        <ul className="list-disc pl-5">
          <li className="mb-4">
            <b>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</b> <br />
            When you purchase something from our store, as part of the buying and selling process, 
            we collect the personal information you give us such as your name, address, and email address. 
            When you browse our store, we also automatically receive your computer’s internet protocol (IP) 
            address in order to provide us with information that helps us learn about your browser and 
            operating system. Email marketing (if applicable): With your permission, we may send you emails 
            about our store, new products, and other updates.
          </li>

          <li className="mb-4">
            <b>SECTION 2 - CONSENT</b> <br />
            <u>How do you get my consent?</u> <br />
            When you provide us with personal information to complete a transaction, verify your credit card, 
            place an order, arrange for a delivery, or return a purchase, we imply that you consent to our 
            collecting it and using it for that specific reason only. If we ask for your personal information 
            for a secondary reason, like marketing, we will either ask you directly for your expressed consent 
            or provide you with an opportunity to say no. <br /><br />
            <u>How do I withdraw my consent?</u> <br />
            If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for 
            the continued collection, use, or disclosure of your information, at any time, by contacting us at 
            [imppacksbp@gmail.com] or mailing us at: [D-14,IDCO INDUSTRIAL ESTATE BARAIPALI,SAMBALPUR ORISSA]
            </li>

          <li className="mb-4">
            <b>SECTION 3 - DISCLOSURE</b> <br />
            We may disclose your personal information if we are required by law to do so or if you violate our 
            Terms of Service.
          </li>

          <li className="mb-4">
            <b>SECTION 4 - PAYMENT</b> <br />
            We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. 
            The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing 
            payment. Your purchase transaction data is only used as long as is necessary to complete your purchase 
            transaction. After that is complete, your purchase transaction information is not saved. <br /><br />
            Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards 
            Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover. 
            PCI-DSS requirements help ensure the secure handling of credit card information by our store and its 
            service providers. For more insight, you may also want to read the terms and conditions of Razorpay on 
            <a href="https://razorpay.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer"> https://razorpay.com</a>.
          </li>

          <li className="mb-4">
            <b>SECTION 5 - THIRD-PARTY SERVICES</b> <br />
            In general, the third-party providers used by us will only collect, use, and disclose your information 
            to the extent necessary to allow them to perform the services they provide to us. However, certain 
            third-party service providers, such as payment gateways and other payment transaction processors, 
            have their own privacy policies. We recommend that you read their privacy policies so you can understand 
            the manner in which your personal information will be handled by these providers.
          </li>

          <li className="mb-4">
            <b>SECTION 6 - SECURITY</b> <br />
            To protect your personal information, we take reasonable precautions and follow industry best practices 
            to make sure it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed.
          </li>

          <li className="mb-4">
            <b>SECTION 7 - COOKIES</b> <br />
            We use cookies to maintain the session of your user. It is not used to personally identify you on other websites.
          </li>

          <li className="mb-4">
            <b>SECTION 8 - AGE OF CONSENT</b> <br />
            By using this site, you represent that you are at least the age of majority in your state or province 
            of residence, or that you are the age of majority in your state or province of residence and you have 
            given us your consent to allow any of your minor dependents to use this site.
          </li>

          <li className="mb-4">
            <b>SECTION 9 - CHANGES TO THIS PRIVACY POLICY</b> <br />
            We reserve the right to modify this privacy policy at any time, so please review it frequently. 
            Changes and clarifications will take effect immediately upon their posting on the website. 
          </li>

          <li className="mb-4">
            <b>QUESTIONS AND CONTACT INFORMATION</b> <br />
            If you would like to access, correct, amend, or delete any personal information we have about you, 
            register a complaint, or simply want more information contact our Privacy Compliance Officer at 
            [imppacksbp@gmail.com] or by mail at [D-14,IDCO INDUSTRIAL ESTATE BARAIPALI,SAMBALPUR ORISSA].
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
