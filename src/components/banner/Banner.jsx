import React from "react";
const img = {
  slide1:
    "https://cf.shopee.vn/file/vn-50009109-fa79715264f5c973648d8096a8aa9773_xxhdpi",
  slide2:
    "https://cf.shopee.vn/file/vn-50009109-eb59c33017a7c1bdb9f89ade65a9ea47_xxhdpi",
  slide3:
    "https://cf.shopee.vn/file/vn-50009109-8166c1d75087b0875b7f1b61c54fd616_xxhdpi",
  slide4:
    "https://cf.shopee.vn/file/vn-50009109-ccafc6261ecb0b94bc5032bfa449d0f2_xxhdpi",
};

const Banner = () => {
  return (
    <div className="mx-[150px] mt-8">
      <div className="grid grid-col-3 grid-flow-col gap-2 grid-rows-2 h-[285px] w-full">
        <div className="row-span-3 col-span-2 mb-2">
          <img className="h-full w-full" src={img.slide1} />
        </div>
        <div className="">
          <img className="h-full w-full" src={img.slide2} />
        </div>
        <div>
          <img className="h-full w-full" src={img.slide3} />
        </div>
      </div>
      <div className="grid grid-flow-col items-center justify-between mt-5 px-6">
        <div className="banner-item">
          <img src="https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi" />
          <p> Miễn Hết Phí Ship Cho Mọi Đơn </p>
        </div>
        <div className="banner-item">
          <img src="https://cf.shopee.vn/file/vn-50009109-11d9732a464d895d3699ca40431d0bfd_xhdpi" />
          <p>Voucher Giảm Đến 200.000Đ</p>
        </div>
        <div className="banner-item">
          <img src="https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi" />
          <p>Hàng Hiệu Outlet Giảm 50%</p>
        </div>
        <div className="banner-item pb-5">
          <img src="https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi" />
          <p>Mã Giảm Giá</p>
        </div>
        <div className="banner-item pb-5">
          <img src="https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi" />
          <p>Bắt Trend - Giá Sốc</p>
        </div>
        <div className="banner-item">
          <img src="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi" />
          <p>Nạp Thẻ, Dịch Vụ & Khách Sạn</p>
        </div>
        <div className="banner-item">
          <img src="https://cf.shopee.vn/file/vn-50009109-485641d1582cdd6181f1725fb5421fee_xhdpi" />
          <p>Chọn Số Trúng 25.000 xu</p>
        </div>
        <div className="banner-item pb-5">
          <img src="https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi" />
          <p>Hàng Quốc Tế</p>
        </div>
        <div className="banner-item">
          <img src="https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi" />
          <p>Gì Cũng Rẻ - Mua Là Freeship</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
