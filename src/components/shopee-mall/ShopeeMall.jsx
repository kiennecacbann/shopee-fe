import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const ShopeeMall = () => {
  return (
    <div className="mx-[150px] bg-white mt-5">
      <div className="">
        <div className=" ">
          <div className="border-b-[1px] border-solid border-gray-200">
            <div className="flex justify-between items-center mx-6 ">
              <div className="flex items-center space-x-4 text-[17px] py-4">
                <a className=" uppercase text-[#d0011b] font-semibold text-[1.0625rem] leading-4 block cursor-pointer">
                  Shopee Mall
                </a>
                <div className="flex space-x-5">
                  <div className="flex items-center border-l-[1px] border-gray-300 pl-5 border-solid">
                    <img
                      className="h-5 w-5 mr-1"
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png"
                    />
                    7 Day Returns
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-5 w-5 mr-1"
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/511aca04cc3ba9234ab0e4fcf20768a2.png"
                    />{" "}
                    100% Authentic
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-5 w-5 mr-1"
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/16ead7e0a68c3cff9f32910e4be08122.png"
                    />{" "}
                    Free Shipping
                  </div>
                </div>
              </div>
              <div className="flex items-center text-[#d0011b] cursor-pointer">
                See All
                <MdOutlineKeyboardArrowRight className="bg-[#d0011b] text-white ml-2 h-5 w-5 rounded-full" />
              </div>
            </div>
          </div>
          <div className="mt-3 ml-4 grid grid-cols-3">
            <div>
              {/**img*/}
              <img src="https://cf.shopee.vn/file/vn-50009109-3a148f9b54afe669725bdafa0d15f536" />
            </div>
            <div className="col-span-2">
              {/**list san pham*/}
              <ul className="banner-shopeemall-item-list">
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
                <li className="banner-shopeemall-item">
                  <div className="banner-shopeemall-items">
                    <Link>
                      <div className="relative">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3c6349e79c127ee7cf33979769f593e6_xhdpi" />
                      </div>
                    </Link>
                    <div className="absolute bottom-[14px] left-14 text-[#d0011b] text-[18px] text-center items-center leading-7">
                      Buy 1 get 1
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopeeMall;
