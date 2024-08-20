import React from 'react'

const Navbar = () => {
  return (
    <>  
        <div className='flex justify-around items-center  mx-auto container   p-8'>
            <div className='flex justify-center items-center gap-2 '>
                <img src="/images/brandlogo.png" alt="logo" />
                <p className='text-xl font-bold'>Brand Name</p>
            </div>

            <ul className='flex gap-5 text-[14px]'>
                <li>COLLECTIONS</li>
                <li>ACCESSORIES</li>
                <li>BLOG</li>
                <li>CONTACT US</li>
            </ul>
          <div className='flex gap-10 items-center '>
            <img src="/images/search.png" alt="" srcset="" />
            <img src="/images/person.png" alt="" srcset="" />
            <img src="/images/local_mall.png" alt="" srcset="" />
          </div>
        </div>
    </>
  )
}

export default Navbar