import { useState } from 'react'
import React from 'react'
import productData  from '../products.json'


const title = (
    <h2>Find a Product From<span>Thousands</span> Available</h2>
)


const desc = "We have the largest range and collection of products"
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "2.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];

const Banner = () => {
    const [searchInput, setSearchInput ] = useState("");
    const [filteredProducts, setfilteredProducts ] = useState("productData");
    //console.log(productData);
    
    const handleSearch = e => {
        console.log(e.target.value);
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);
    }

    const filtered = productData.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setfilteredProducts(filtered);

  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                {title}
                <form >
                    <input type="text" name='search' id="search" placeholder='Search your product' value={searchInput} onChange={handleSearch} />
                </form>
                <p>{desc}</p>
                <ul className='lab-ul'>

                </ul>

            </div>
            </div> 
    </div>
  )
}

export default Banner
