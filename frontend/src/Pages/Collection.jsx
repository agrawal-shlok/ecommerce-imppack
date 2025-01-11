import React, { useContext, useEffect, useState } from 'react';
import { Shopcontext } from '../Context/Shopcontext';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import Productitem from '../Components/Productitem';

const Collection = () => {
  const { products, search, showsearch } = useContext(Shopcontext);
  const [showfilter, setShowfilter] = useState(false);
  const [filterproducts, setFilterproducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sorttype, setSorttype] = useState('relevant');

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyfilter = () => {
    let productscopy = products.slice();
    if (category.length > 0) {
      productscopy = productscopy.filter((item) => category.includes(item.category));
    }

    if (showsearch && search) {
      productscopy = productscopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilterproducts(productscopy);
  };

  const sortproduct = () => {
    let fpcopy = filterproducts.slice();

    switch (sorttype) {
      case 'low-high':
        setFilterproducts(fpcopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterproducts(fpcopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyfilter();
        break;
    }
  };

  useEffect(() => {
    applyfilter();
  }, [category, search, showsearch, products]);

  useEffect(() => {
    sortproduct();
  }, [sorttype]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* FILTER OPTIONS */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowfilter(!showfilter)}>
          FILTERS
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} />
        </p>

        {/* CATEGORY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bakery Box'} onChange={togglecategory} /> Bakery Box
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Gift Box'} onChange={togglecategory} /> Gift Box
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Sweet Box'} onChange={togglecategory} /> Sweet Box
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Custom Box'} onChange={togglecategory} /> Custom Box
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* PRODUCT SORT */}
          <select onChange={(e) => setSorttype(e.target.value)} className='border-2 border-gray-300 text-sm px-2 '>
            <option value="relevant">Sort by Relevant</option>
            <option value="low-high">Sort by Low to High</option>
            <option value="high-low">Sort by High to Low</option>
          </select>
        </div>

        {/* MAP PRODUCTS */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterproducts.map((item, index) => (
              <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Collection;
