import React from "react";

const StackBanner = () => {
  return (
    <div className="mx-[150px] mt-5 bg-white items-center justify-center flex">
      <ul>
        <li>
          <div className="relative block h-full w-full">
            <img
              className="w-full h-full block"
              src="https://cf.shopee.vn/file/sg-50009109-4a245a7757957f4490861d2f856857c1"
              alt="Stack Banner"
            />
            <div className="flex absolute w-full h-full top-0 left-0">
              <a
                href="https://shopee.vn/focallure.vn"
                index="0"
                style={{ flexGrow: 33.3333 }}
                className="inline-block overflow-hidden flex-grow-[1]"
              ></a>
              <a
                href="https://shopee.vn/m/sale-cuoi-thang-don-luong-ve"
                index="1"
                style={{ flexGrow: 33.3333 }}
                className="inline-block overflow-hidden flex-grow-[1]"
              ></a>
              <a
                href="https://shopee.vn/m/khung-gio-san-sale"
                index="2"
                style={{ flexGrow: 33.3333 }}
                className="inline-block overflow-hidden flex-grow-[1]"
              ></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StackBanner;
