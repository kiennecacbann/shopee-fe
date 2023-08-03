import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const Help = () => {
  return (
    <div>
      <div>
        <nav className="bg-white">
          <div className="flex items-center mx-[250px] py-2">
            <Link>
              <img
                className="w-[120px] h-16 mr-[11px]"
                src={images.logo_login}
              />
            </Link>
            <span className="text-[#ee4d2d] text-[17px] border-l-[1px] border-orange-600 leading-5 pl-[11px] ">
              Trung tâm Hỗ trợ Shopee VN
            </span>
          </div>
        </nav>
      </div>
      <div className="bg-[#ef4d2c]">
        <div className="py-12 items-center justify-center flex-col flex">
          <div>
            <h1 className="text-white text-[36px]">
              Xin chào, Shopee có thể giúp gì cho bạn?
            </h1>
          </div>
          <div className="help-search">
            <div className="flex-1 ">
              <input
                className="help-search-input"
                placeholder="Nhập từ khóa hoặc nội dung cần tìm"
              />
            </div>
            <div className="help-search-img">
              <AiOutlineSearch className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[250px]">
        <div className="mt-5">
          <div className="py-3">
            <h2 className="text-[24px] font-medium">Danh mục</h2>
          </div>
          <div className="grid grid-cols-4 grid-flow-row">
            <Link>
              <div className="help-categories">
                <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/690d84d4103544139d22ba177c6dca97.png" />
                <div>Mua sắm cùng Shopee</div>
              </div>
            </Link>
            <Link>
              <div className="help-categories">
                <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/c2fb3ede3472487c82131982f5ab8cbf.png" />
                <div>Khuyến Mãi & Ưu Đãi</div>
              </div>
            </Link>
            <Link>
              <div className="help-categories">
                <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/a7c785163abc4abcbeeaefcb5bc54cc1.png" />
                <div>Thanh Toán</div>
              </div>
            </Link>
            <Link>
              <div className="help-categories">
                <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/a0747397630545a7ae270dadfe73ecf5.png" />
                <div>Đơn Hàng & Vận Chuyển</div>
              </div>
            </Link>
            <Link>
              <div className="help-categories">
                <img
                  alt=""
                  src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/f2bc745edbfd4d7095d87da7dade354a.png"
                />
                <div>Trả Hàng & Hoàn Tiền</div>
              </div>
            </Link>
            <Link>
              <div className="help-categories">
                <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/83c742e5e2cb4f108ea4ee942aa68af2.png" />
                <div>Thông Tin Chung</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-[250px] my-10">
        <div>
          <div>
            <h2 className="text-[24px] font-medium">Câu hỏi thường gặp</h2>
          </div>
          <div className="">
            <Link>
              <div className="help-questions">
                [Dịch vụ] Làm sao để liên hệ Chăm sóc Khách hàng (CSKH) ?
              </div>
            </Link>
            <Link>
              <div className="help-questions">
                [Cảnh báo lừa đảo] Mua sắm an toàn cùng Shopee
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f5] items-center justify-center">
        <div className="pt-8">
          <div className="help-info">
            Bạn có muốn tìm thêm thông tin gì không?
          </div>
          <div className="help-info-items">
            <div className="help-info-item">
              <div className="help-info-item-img">
                <BsTelephone className="" />
              </div>
              <div className="text-[14px]">19001221</div>
            </div>
            <div className="help-info-item">
              <div className="help-info-item-img">
                <AiOutlineMail />
              </div>
              <div className="text-[]">
                <b className="text-[14px]">Email</b>
                <p className="text-[12px]">Gửi câu hỏi của bạn!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-[250px] flex items-center justify-between py-5">
          <div className="text-[12px]">© 2021 Shopee. Tất cả các quyền được bảo lưu.</div>
          <div className="flex items-center">
            <div className="flex items-center px-2">
              <img className="h-10 w-10" src={images.logofb} />
              <img className="h-8 w-8" src={images.logo_insta} />
            </div>
            <div className="flex items-center">
              <Link>
                <div className="border-x-[1px] border-black px-2 text-[12px]">Shopee Policy</div>
              </Link>
              <Link>
                <div className="border-r-[1px] border-black px-2 text-[12px]">Service Requirement</div>
              </Link>
              <Link>
                <div className="border-r-[1px] border-black px-2 text-[12px]">Privacy Policy</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
