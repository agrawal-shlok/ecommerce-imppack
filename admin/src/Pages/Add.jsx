import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendurl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('Bakery Box')
    const [subcategory, setSubcategory] = useState('kg')
    const [bestseller, setBestseller] = useState(false)

    const [sizes, setSizes] = useState([])

    const onsubmithandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("subcategory", subcategory)
            formData.append("bestseller", bestseller)
            formData.append("sizes", JSON.stringify(sizes))

            // Append images to the 'image[]' field as an array
            image1 && formData.append("image", image1)
            image2 && formData.append("image", image2)
            image3 && formData.append("image", image3)
            image4 && formData.append("image", image4)

            const response = await axios.post(`${backendurl}/api/product/add`, formData, {
                headers: { token }
            })

            if(response.data.success){
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice('')
            } else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error("Error submitting form: ", error.response ? error.response.data : error.message);
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onsubmithandler} className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='mb-2'>Upload Image</p>

                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
                    </label>

                    <label htmlFor="image2">
                        <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
                    </label>

                    <label htmlFor="image3">
                        <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
                    </label>

                    <label htmlFor="image4">
                        <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
                    </label>
                </div>
            </div>

            {/* Rest of the form remains unchanged */}
            <div className='w-full'>
                <p className='mb-2'>Product Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product Description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' placeholder='Write Content here' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Product Category</p>
                    <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
                        <option value="Bakery Box">Bakery Box</option>
                        <option value="Gift Box">Gift Box</option>
                        <option value="Sweet Box">Sweet Box</option>
                        <option value="Custom Box">Custom Box</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Sub Category</p>
                    <select onChange={(e) => setSubcategory(e.target.value)} className='w-full px-3 py-2'>
                        <option value="kg">1 Kg</option>
                        <option value="halfkg">1/2 Kg</option>
                        <option value="quaterkg">250 gm</option>
                        <option value="others">others</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Product Price</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='250' />
                </div>
            </div>

            <div>
                <p className='mb-2'>Product Sizes</p>
                <div className='flex gap-3'>
                    <div onClick={() => setSizes(prev => prev.includes("kg") ? prev.filter(item => item !== "kg") : [...prev, "kg"])}>
                        <p className={`${sizes.includes("kg") ? "bg-blue-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>1 Kg</p>
                    </div>

                    <div onClick={() => setSizes(prev => prev.includes("halfkg") ? prev.filter(item => item !== "halfkg") : [...prev, "halfkg"])}>
                        <p className={`${sizes.includes("halfkg") ? "bg-blue-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>1/2 Kg</p>
                    </div>

                    <div onClick={() => setSizes(prev => prev.includes("quaterkg") ? prev.filter(item => item !== "quaterkg") : [...prev, "quaterkg"])}>
                        <p className={`${sizes.includes("quaterkg") ? "bg-blue-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>250 gm</p>
                    </div>
                </div>
            </div>

            <div className='flex gap-2 mt-2'>
                <input onChange={(e) => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
                <label className='cursor-pointer' htmlFor="bestseller">Add to Bestseller</label>
            </div>

            <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
        </form>
    )
}

export default Add
