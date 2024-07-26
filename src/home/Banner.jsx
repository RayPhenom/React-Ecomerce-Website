import React from 'react'


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
  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                {title}

            </div>
            </div> 
    </div>
  )
}

export default Banner
