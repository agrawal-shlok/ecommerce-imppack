import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendurl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Bakery Box');
    // const [subcategory, setSubcategory] = useState(['1 Kg']);
    const [bestseller, setBestseller] = useState(false);
    const [weight, setWeight] = useState('');
    const [sizes, setSizes] = useState([]);

    const onsubmithandler = async (e) => {
        e.preventDefault();

        if (!weight) {
            setWeight(100); // Default weight
        }

        if (!name || !description || !price || !weight) {
            toast.error('Please fill in all required fields');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('category', category);
            // formData.append('subcategory', JSON.stringify(subcategory));
            formData.append('bestseller', bestseller);
            formData.append('sizes', JSON.stringify(sizes));
            formData.append('weight', weight);

            image1 && formData.append('image', image1);
            image2 && formData.append('image', image2);
            image3 && formData.append('image', image3);
            image4 && formData.append('image', image4);

            const response = await axios.post(`${backendurl}/api/product/add`, formData, {
                headers: { token },
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setName('');
                setDescription('');
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(false);
                setPrice('');
                setWeight('');
                setSizes([]);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error submitting form: ', error.response?.data || error.message);
            toast.error(error.response?.data?.message || 'An error occurred while adding the product');
        }
    };

    const handleSubcategoryChange = (e) => {
        const value = e.target.value;
        setSubcategory((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    return (
        <form onSubmit={onsubmithandler} className="flex flex-col w-full items-start gap-3">
            <div>
                <p className="mb-2">Upload Image</p>
                <div className="flex gap-2">
                    {[image1, image2, image3, image4].map((img, index) => (
                        <label key={index} htmlFor={`image${index + 1}`}>
                            <img
                                className="w-20"
                                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                                alt=""
                            />
                            <input
                                onChange={(e) => {
                                    const handlers = [setImage1, setImage2, setImage3, setImage4];
                                    handlers[index](e.target.files[0]);
                                }}
                                type="file"
                                id={`image${index + 1}`}
                                hidden
                            />
                        </label>
                    ))}
                </div>
            </div>

            <div className="w-full">
                <p className="mb-2">Product Name</p>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="w-full max-w-[500px] px-3 py-2"
                    type="text"
                    placeholder="Type here"
                    required
                />
            </div>

            <div className="w-full">
                <p className="mb-2">Product Description</p>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="w-full max-w-[500px] px-3 py-2"
                    placeholder="Write Content here"
                    required
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                <div className="w-full sm:w-[200px]">
                    <p className="mb-2">Product Category</p>
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        className="w-full px-3 py-2"
                    >
                        <option value="Bakery Box">Bakery Box</option>
                        <option value="Gift Box">Gift Box</option>
                        <option value="Sweet Box">Sweet Box</option>
                        <option value="Custom Box">Custom Box</option>
                    </select>
                </div>

                {/* <div className="w-full sm:w-[200px]">
                    <p className="mb-2">Sub Category</p>
                    <select
                        multiple
                        onChange={handleSubcategoryChange}
                        value={subcategory}
                        className="w-full px-3 py-2"
                    >
                        <option value="1 Kg">1 Kg</option>
                        <option value="1/2 Kg">1/2 Kg</option>
                        <option value="250 gm">250 gm</option>
                    </select>
                </div> */}

                <div className="w-full sm:w-[200px]">
                    <p className="mb-2">Product Price</p>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        className="w-full px-3 py-2 sm:w-[120px]"
                        type="number"
                        placeholder="25"
                        required
                    />
                </div>
                <div className="w-full sm:w-[200px]">
                    <p className="mb-2">Product Weight</p>
                    <input
                        onChange={(e) => setWeight(e.target.value)}
                        value={weight}
                        className="w-full px-3 py-2 sm:w-[120px]"
                        type="number"
                        placeholder="100"
                        required
                    />
                </div>
            </div>

            <div className="w-full">
                <p className="mb-2">Product Sizes</p>
                <div className="flex gap-3 flex-wrap">
                    {['1 Kg', '1/2 Kg', '250 gm'].map((size) => (
                        <div
                            key={size}
                            onClick={() =>
                                setSizes((prev) =>
                                    prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]
                                )
                            }
                        >
                            <p
                                className={`${
                                    sizes.includes(size) ? 'bg-blue-300' : 'bg-slate-200'
                                } px-3 py-1 cursor-pointer`}
                            >
                                {size}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Custom Size Input */}
                <div className="flex items-center mt-3">
                    <input
                        type="text"
                        className="px-3 py-2 border w-full max-w-[200px]"
                        placeholder="Enter custom size"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.target.value.trim() !== '') {
                                const customSize = e.target.value.trim();
                                if (!sizes.includes(customSize)) {
                                    setSizes((prev) => [...prev, customSize]);
                                }
                                e.target.value = '';
                            }
                        }}
                    />
                    <p className="ml-2 text-sm text-gray-500">Press Enter to add</p>
                </div>

                {/* Display Selected Sizes */}
                <div className="mt-3">
                    <p className="mb-2">Selected Sizes:</p>
                    <div className="flex gap-2 flex-wrap">
                        {sizes.map((size, index) => (
                            <div
                                key={index}
                                className="bg-blue-300 px-3 py-1 cursor-pointer rounded flex items-center"
                                onClick={() => setSizes((prev) => prev.filter((item) => item !== size))}
                            >
                                {size}
                                <span className="ml-2 text-sm text-red-500">×</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-2 mt-2">
                <input
                    onChange={() => setBestseller((prev) => !prev)}
                    checked={bestseller}
                    type="checkbox"
                    id="bestseller"
                />
                <label className="cursor-pointer" htmlFor="bestseller">
                    Add to Bestseller
                </label>
            </div>

            <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
                ADD
            </button>
        </form>
    );
};

export default Add;
