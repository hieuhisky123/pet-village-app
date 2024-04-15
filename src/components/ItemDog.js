import React, { useEffect } from "react";
// import Card from "./Card";
import { useDispatch } from "react-redux";
// import * as actions from "../store/actions";
import { UseSelector, useSelector } from "react-redux";
import test1 from '../assets/imgs/test1.jpg'

const ItemDog = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(actions.getProducts());
  // }, [dispatch]);

  // Sử dụng useSelector để lấy giá trị 'products' từ Redux store
  // const { products } = useSelector((state) => state.app);

  return (
    <div className="px-12">
      <div className="flex justify-between items-center mb-[50px]">
        <p className="text-[#2E2437] font-bold text-[40px]">
          Đồ dùng cho chó
        </p>
        <span className="font-semibold text-[20px] text-[#000000]">
          Xem tất cả
        </span>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-[50px]">
        <div>
        <img src={test1} alt=""/>
        <span>Bánh thưởng Vegebrand gặm sạch răng 7 Dental Effects 160g</span>
        </div>
        <img src={test1} alt=""/>
        <img src={test1} alt=""/>
        <img src={test1} alt=""/>

        {/* Kiểm tra 'products' trước khi sử dụng */}
        {/* {products !== null && products.slice(0, 8).map((item) => (
          <Card
            key={item?._id}
            image={item?.image}
            name={item?.name}
            bought={item?.bought}
            price={item?.price}
            discount={item?.discount}
          />
        ))} */}
      </div>
    </div>
  );
};



export default ItemDog;
