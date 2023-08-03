import React from "react";

const img = {
  menClothes:
    "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
  womenClothes:
    "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
  kids: "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn",
  phone:
    "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
  tv: "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
  computer:
    "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
  camera:
    "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn",
  watch:
    "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
  shoes:
    "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
  home_appliances:
    "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
  sport:
    "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
  automotive:
    "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
  menBags:
    "https://down-vn.img.susercontent.com/file/18fd9d878ad946db2f1bf4e33760c86f_tn",
  toys: "https://down-vn.img.susercontent.com/file/ce8f8abc726cafff671d0e5311caa684_tn",
  pets: "https://down-vn.img.susercontent.com/file/cdf21b1bf4bfff257efe29054ecea1ec_tn",
  tools:
    "https://down-vn.img.susercontent.com/file/e4fbccba5e1189d1141b9d6188af79c0_tn",
  living:
    "https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn",
  beauty:
    "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn",
  health:
    "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn",
  womenShoes:
    "https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn",
  womenBags:
    "https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
  accessories:
    "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
  grocery:
    "https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn",
  books:
    "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn",
  kids_fashion:
    "https://down-vn.img.susercontent.com/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn",
  homecare:
    "https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763_tn",
  ticket:
    "https://down-vn.img.susercontent.com/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn",
};
const Categories = () => {
  return (
    <div className="bg-white mt-5 mx-[150px]">
      <div className="">
        <div className="font-sans border-[1px] border-gray-100 pl-6 uppercase text-[20px] text-gray-500 py-2">
          <h2>Categories</h2>
        </div>
        <div className="relative grid grid-rows-2 grid-flow-col z-[1] overflow-x-scroll">
          <div className="categories-item">
            <img src={img.menClothes} />
            <p>Men Clothes</p>
          </div>
          <div className="categories-item">
            <img src={img.phone} />
            <p>Mobile & Gadgets</p>
          </div>
          <div className="categories-item">
            <img src={img.tv} />
            <p>Consumer Electronics</p>
          </div>
          <div className="categories-item">
            <img src={img.computer} />
            <p>Computer & Accessories</p>
          </div>
          <div className="categories-item">
            <img src={img.camera} />
            <p>Cameras</p>
          </div>
          <div className="categories-item">
            <img src={img.watch} />
            <p>Watches</p>
          </div>
          <div className="categories-item">
            <img src={img.shoes} />
            <p>Men Shoes</p>
          </div>
          <div className="categories-item">
            <img src={img.home_appliances} />
            <p>Home Appliances</p>
          </div>
          <div className="categories-item">
            <img src={img.sport} />
            <p>Sport & Outdoor</p>
          </div>
          <div className="categories-item">
            <img src={img.automotive} />
            <p>Automotive</p>
          </div>
          <div className="categories-item">
            <img src={img.menBags} />
            <p>Men Bags</p>
          </div>
          <div className="categories-item">
            <img src={img.toys} />
            <p>Toys</p>
          </div>
          <div className="categories-item">
            <img src={img.pets} />
            <p>Pets</p>
          </div>
          <div className="categories-item">
            <img src={img.tools} />
            <p>Tools & Home Improvement</p>
          </div>
          <div className="categories-item">
            <img src={img.womenClothes} />
            <p>Women Clothes</p>
          </div>
          <div className="categories-item">
            <img src={img.kids} />
            <p>Mom, Kids & Babies</p>
          </div>
          <div className="categories-item">
            <img src={img.living} />
            <p>Home & Living</p>
          </div>
          <div className="categories-item">
            <img src={img.beauty} />
            <p>Beauty</p>
          </div>
          <div className="categories-item">
            <img src={img.health} />
            <p>Health</p>
          </div>
          <div className="categories-item">
            <img src={img.womenShoes} />
            <p>Women Shoes</p>
          </div>
          <div className="categories-item">
            <img src={img.womenBags} />
            <p>Women Bags</p>
          </div>
          <div className="categories-item">
            <img src={img.accessories} />
            <p>Fashion Accessories</p>
          </div>
          <div className="categories-item">
            <img src={img.grocery} />
            <p>Grocery</p>
          </div>
          <div className="categories-item">
            <img src={img.books} />
            <p>Books & Stationery</p>
          </div>
          <div className="categories-item">
            <img src={img.kids_fashion} />
            <p>Kid Fashion</p>
          </div>
          <div className="categories-item">
            <img src={img.homecare} />
            <p>Home Care</p>
          </div>
          <div className="categories-item">
            <img src={img.ticket} />
            <p>Tickets, Voucher & Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
