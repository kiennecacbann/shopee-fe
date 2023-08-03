import React, { useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { GrNotification, GrLanguage } from 'react-icons/gr'
import { BiHelpCircle } from 'react-icons/bi'
import { RiArrowDownSLine } from 'react-icons/ri'
import images from '../../constants/images';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-[150px] bg-[#f84d31]'>
            <div className=' flex justify-between items-center text-white text-[17px] pt-2'>
                <div className='flex items-center justify-between space-x-4'>
                    <Link>
                        <div className='text-[14px]'><p>Seller Centre</p></div>
                    </Link>
                    <div className='text-[14px]'>
                        <p>Download</p>
                    </div>
                    <div className='text-[14px]'>
                        <p>Follow us on</p>
                    </div>
                    <div className='flex space-x-2 text-[16px]'>
                        <a className='cursor-pointer'><BsFacebook /></a>
                        <a className='cursor-pointer'><AiFillInstagram /></a>
                    </div>
                </div>
                <div></div>
                <ul className='flex items-center justify-between space-x-4'>
                    <li>
                        <Link>
                            <div className='flex items-center space-x-1 text-[14px]'>
                                <GrNotification className='' />
                                <span>
                                    Notifications
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className='flex items-center space-x-1 text-[14px]'>
                                <BiHelpCircle className='text-[20px]' />
                                <span>Help</span>
                            </div>
                        </Link>

                    </li>
                    <li>
                        <Link>
                            <div className='flex items-center space-x-1 text-[14px]'>
                                <GrLanguage />
                                <span>English</span>
                                <RiArrowDownSLine />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className='flex items-center space-x-1 cursor-pointer text-[14px]'>
                            <img src={images.user} className='h-5 w-5 rounded-sm' />
                            <span>Kiennecacban</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex'>
                    <div className='mr-10'>
                        <img className='w-30 h-14 cursor-pointer' src={images.logo} />
                    </div>
                    <div className='w-[840px] h-[40px] mt-2 flex bg-white items-center justify-between relative box-border p-[2px] rounded-sm'>
                        <div className='flex-1'>
                            <form>
                                <input className='w-full box-border leading-3 text-[14px] outline-none ml-4' placeholder='MUA 360ML TẶNG 600ML ' />
                            </form>
                        </div>
                        <div className='p-[1px]'>
                            <button className='min-w-[60px] max-w-[190px] h-9  items-center justify-center flex bg-[#fb5533]'><AiOutlineSearch className=' text-white' /></button>
                        </div>
                    </div>
                </div>
                <div className='mr-10'>
                    <AiOutlineShoppingCart className='text-[35px] text-white cursor-pointer' />
                </div>
            </div>
            <div className=' justify-between flex items-start mx-[220px] text-[15px] text-white cursor-pointer'>
                <a className=''>Phone</a>
                <a className=''>Phone</a>
                <a className=''>Phone</a>
                <a className=''>Phone</a>
                <a className=''>Phone</a>
                <a className=''>Phone</a>
                <a className=''>Phone</a>
                <a className=''>Phone</a>
                <a className=''>Phone</a>
            </div>

        </div>
    )
}

export default Header