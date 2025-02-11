import React from 'react';
import Title from '../Components/Title';

const ShippingDeliveryPolicy = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'SHIPPING'} text2={'AND DELIVERY POLICY'} />
      </div>

      {/* Main Content Section */}
      <div className="my-10 flex flex-col gap-6 text-gray-600">
        <ul className="list-decimal pl-5">
          <li className="mb-4">
            <b>Order Processing Time:</b> <br />
            All orders are processed within 1-2 business days (excluding weekends and holidays). 
            You will receive a confirmation email once your order has been shipped. In case of high order volume, 
            there may be slight delays. Please allow additional days for processing during such times.
          </li>

          <li className="mb-4">
            <b>Shipping Charges:</b> <br />
            The shipping fee for your order is calculated based on the total weight of the products you’ve selected. Each product has a weight per unit, and when you select the quantity, we multiply the weight of that product by the quantity to get the total weight. The total weight is then multiplied by a rate of ₹45 per kilogram to calculate the final shipping cost. This ensures that the shipping fee is accurately determined based on the total weight of the items in your cart.
          </li>

          <li className="mb-4">
            <b>Delivery Locations:</b> <br />
            We ship to most locations within India. However, delivery to remote or restricted areas 
            may take longer or may not be possible. In such cases, we will contact you to arrange an alternative solution.
          </li>

          <li className="mb-4">
            <b>Delivery Time:</b> <br />
            Standard shipping typically takes 3-7 business days after the order is processed. 
            Expedited shipping options are available at an additional cost and can take 1-3 business days. 
            Please note that delivery times may vary based on the destination and carrier services.
          </li>

          <li className="mb-4">
            <b>Tracking Your Order:</b> <br />
            Once your order is shipped, you will receive a tracking number via email or SMS. 
            Use this tracking number to monitor the status of your shipment on the courier's website.
          </li>

          <li className="mb-4">
            <b>Damaged or Lost Shipments:</b> <br />
            If your shipment arrives damaged, please contact our Customer Service team within 24 hours 
            of receiving the order. For lost shipments, we will work with the courier to resolve the issue and ensure 
            a replacement or refund is provided, if applicable.
          </li>

          <li className="mb-4">
            <b>International Shipping:</b> <br />
            At this time, we only ship within India. We are working to expand our services to international locations soon.
          </li>

          <li className="mb-4">
            <b>Incorrect Address:</b> <br />
            Please ensure that the shipping address provided is accurate and complete. 
            We are not responsible for orders delivered to incorrect or incomplete addresses provided by the customer. 
            In case of such errors, additional shipping charges may apply.
          </li>

          <li className="mb-4">
            <b>Custom Delays and Duties:</b> <br />
            For certain products, delivery may be subject to customs clearance or additional local taxes. 
            Customers are responsible for any customs duties or taxes applicable at the delivery location.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShippingDeliveryPolicy;
