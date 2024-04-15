import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Đã sửa 'UseSelector' thành 'useSelector'
// import * as actions from "../store/actions";
// import PaperCard from "./PaperCard";

const Knowledge = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(actions.getNews());
//   }, [dispatch]); // Thêm 'dispatch' vào mảng dependencies của useEffect

  // Sử dụng 'useSelector' để lấy 'news' từ Redux store
//   const { news } = useSelector((state) => state.paper);

  return (
    <div className="px-12">
      <div className="flex justify-between items-center mb-[50px]">
        <p className="text-[#2E2437] font-bold text-[40px]">
          Kiến thức chăm sóc chó mèo
        </p>
        <span className="font-semibold text-[20px] text-[#000000]">
          Xem tất cả
        </span>
      </div>
      <div className="flex justify-between">
        {/* Kiểm tra 'news' trước khi sử dụng phương thức 'slice'
        {news && news.slice(0, 3).map((item) => (
          <PaperCard
            key={item?._id}
            img={item?.imgTitle}
            name={item?.title}
            content={item?.heading[0]?.content}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Knowledge;
