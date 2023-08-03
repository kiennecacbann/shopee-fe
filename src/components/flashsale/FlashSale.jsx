import React from "react";
import { AiOutlineRight } from "react-icons/ai";
const img = {
  src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-litkyycned5823",
};
const FlashSale = () => {
  return (
    <div className="mx-[150px] mt-5 bg-white">
      <div className="flex items-center justify-between pt-5">
        <div className="flex items-center gap-3">
          <div
            style={{
              backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/fb1088de81e42c4e538967ec12cb5caa.png')`,
            }}
            className="ml-6 bg-[50%] pl-[16px] w-[120px] h-[40px] inline-block bg-contain bg-no-repeat"
          ></div>
          <div>
            <span className="font-mono text-xl">
              <span className="bg-black text-white">02</span>:
              <span className="bg-black text-white">00</span>:
              <span className="bg-black text-white">00</span>
            </span>
          </div>
        </div>
        <div className="mr-6 text-[#ee4c2c] hover:cursor-pointer text-[17px]">
          <button className="flex items-center">
            See All
            <AiOutlineRight />  
          </button>
        </div>
      </div>
      <div className="grid md:grid-rows-1 grid-rows-1 grid-flow-col overflow-x-scroll overflow-y-hidden pb-6 touch-pan-y">
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="relative ml-6 max-h-[400px] max-w-[200px] justify-center items-center flex-col mt-2">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
        <div className="flashsale-item">
          <div className="">
            <div className="items-center justify-center flex relative">
              <img className="w-[170px] h-[170px]" src={img.src} />
            </div>
            <div
              className="flashsale-item-before "
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/1ea7594a0e6dbc0cdb8640b83a1079bb.png')`,
              }}
            ></div>
            <div className="flashsale-item-price">
              <span className="text-[17px]">₫</span>
              <span className="text-[17px]">15.090.000</span>
            </div>
          </div>
          <div className="flashsale-item-sell">
            <div
              className="absolute text-white h-[16px] w-full items-center text-center
                    justify-center flex text-[.75rem] uppercase font-bold left-0 top-0 z-[3]"
            >
              SELLING FAST
            </div>
            <div
              className="absolute w-[10%] h-[16px] bg-no-repeat bg-cover z-[2] bg-[100%] block top-0 left-0 rounded-3xl"
              style={{
                backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png')`,
              }}
            ></div>
            <div className="bg-[#ffbda6] absolute h-[16px] w-full block left-0 top-0 z-[1] rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
