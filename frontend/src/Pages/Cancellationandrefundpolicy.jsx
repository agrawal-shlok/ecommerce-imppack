import React from 'react';
import Title from '../Components/Title';

const CancellationRefundPolicy = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'CANCELLATION'} text2={'AND REFUND POLICY'} />
      </div>

      {/* Main Content Section */}
      <div className="my-10 flex flex-col gap-6 text-gray-600">
        <ul className="list-decimal pl-5">
          <li className="mb-4">
            <b>Order Cancellations:</b> <br />
            Cancellations will be considered only if the request is made within the same day of placing the order. 
            However, the cancellation request may not be entertained if the orders have been communicated to the 
            vendors/merchants and they have initiated the process of shipping them.
          </li>

          <li className="mb-4">
            <b>Cancellations for Perishable Items:</b> <br />
            Ekyaq does not accept cancellation requests for perishable items like flowers, eatables, etc. However, 
            refund or replacement can be made if the customer establishes that the quality of the product delivered is not good.
          </li>

          <li className="mb-4">
            <b>Damaged or Defective Items:</b> <br />
            In case of receipt of damaged or defective items, please report the same to our Customer Service team. 
            The request will, however, be entertained once the merchant has checked and determined the same at their 
            own end. This should be reported within the same day of receipt of the products.
          </li>

          <li className="mb-4">
            <b>Products Not Matching Expectations:</b> <br />
            In case you feel that the product received is not as shown on the site or as per your expectations, 
            you must bring it to the notice of our Customer Service team within the same day of receiving the product. 
            The Customer Service Team, after looking into your complaint, will take an appropriate decision.
          </li>

          <li className="mb-4">
            <b>Warranty Issues:</b> <br />
            In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
          </li>

          <li className="mb-4">
            <b>Refund Processing:</b> <br />
            In case of any refunds approved by Ekyaq, it will take 3-4 days for the refund to be processed and credited 
            to the end customer.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
