import React from 'react';
import Title from '../Components/Title';

const PricingDetails = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'PRICING'} text2={'DETAILS'} />
      </div>

      {/* Main Content Section */}
      <div className="my-10 flex flex-col gap-6 text-gray-600">
        <ul className="list-decimal pl-5">
          <li className="mb-4">
            <b>Product and Service Costs:</b> <br />
            All prices listed on our website are in INR (Indian Rupees) and are inclusive of any applicable discounts. 
            The price displayed on the product or service page is the final cost of the item, unless additional charges 
            (e.g., taxes, shipping) are explicitly mentioned.
          </li>

          <li className="mb-4">
            <b>Taxes and Fees:</b> <br />
            Prices are exclusive of applicable taxes, such as GST or other state-level taxes, which will be calculated 
            at checkout. Any additional fees (such as service fees or shipping charges) will also be displayed during 
            the checkout process to ensure full transparency.
          </li>

          <li className="mb-4">
            <b>Shipping and Delivery Charges:</b> <br />
            Shipping costs depend on the product’s size, weight, and delivery location. Standard shipping charges 
            will be added to the cart during checkout and displayed as part of the total price.
          </li>

          <li className="mb-4">
            <b>Discounts and Offers:</b> <br />
            Any discounts or promotional offers applied to a product will be reflected in the final price. 
            Please check the “Offers and Promotions” section during checkout for details on active discounts.
          </li>

          <li className="mb-4">
            <b>Subscription Pricing:</b> <br />
            For subscription-based services, pricing is displayed on the product page and varies based on the 
            selected plan (monthly, quarterly, or annually). Subscriptions are auto-renewed unless canceled by the customer.
          </li>

          <li className="mb-4">
            <b>Currency and International Pricing:</b> <br />
            Currently, all transactions are processed in INR. If you are purchasing from outside India, the 
            displayed prices will be converted to your local currency by your payment provider, and additional 
            international transaction fees may apply.
          </li>

          <li className="mb-4">
            <b>Refunds and Adjustments:</b> <br />
            In case of any refunds or adjustments, the refund amount will be processed based on the original 
            price paid, including applicable taxes or fees. Please refer to our Refund Policy for more details.
          </li>

          <li className="mb-4">
            <b>Price Changes:</b> <br />
            Prices of products and services are subject to change without prior notice. However, the price 
            you see at the time of purchase will remain valid for that transaction.
          </li>

          <li className="mb-4">
            <b>Terms and Conditions:</b> <br />
            Please note that all prices are subject to our terms and conditions. By purchasing a product or 
            service, you agree to these terms. For more information, visit our Terms and Conditions page.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingDetails;
