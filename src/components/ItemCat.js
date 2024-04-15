import React, { useEffect } from "react";
// import Card from "./Card";
import { useDispatch } from "react-redux";
// import * as actions from "../store/actions";
import { UseSelector, useSelector } from "react-redux";

const ItemCat = () => {
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
          Đồ dùng cho mèo
        </p>
        <span className="font-semibold text-[20px] text-[#000000]">
          Xem tất cả
        </span>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-[50px]">
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



export default ItemCat;
