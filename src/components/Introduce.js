import React from 'react'
import intro1 from '../assets/imgs/intro-1.png'
import intro2 from '../assets/imgs/intro-2.png'
import intro3 from '../assets/imgs/intro-3.png'
import intro4 from '../assets/imgs/intro-4.png'
import intro5 from '../assets/imgs/intro-5.png'
import introDog from '../assets/imgs/intro-dog.png'
import introCat from '../assets/imgs/intro-cat.png'

import { Link } from "react-router-dom";


const Introduce = () => {
  return (
    <>
    <div className='mb-[45px]'>
      <div className='flex w-full bg-homePink justify-between mb-3'>
        <div className='flex flex-col ml-[100px] mt-[140px] w-[526px]'>
            <span className='text-[50px] font-extrabold'>
                SIÊU THỊ THÚ CƯNG
            </span>
            <span className='text-[55px] font-extrabold text-[#9676B2]'>
                PETVILLAGE
            </span>
            <p className='text-[#92888F] text-[20px] mt-12 text-justify'>
            PetVillage là chuỗi pet shop thú cưng tại TP.HCM, Hà Nội với nhiều
              chi nhánh cửa hàng chuyên cung cấp đồ dùng, quần áo thức ăn, sữa
              tắm và các phụ kiện Chó cảnh, Mèo cảnh, Cá cảnh. Với chất lượng
              dịch vụ tốt nhất luôn được khách hàng tin tưởng sẽ là điểm đến lý
              tưởng và tuyệt vời dành cho vật nuôi.
            </p>
            <div className='flex mt-[60px] gap-5 mb-[130px]'>
                <span className='bg-[#F04F3C] w-[183px] h-[60px] rounded-[60px] text-white text-[20px] font-bold flex justify-center items-center '>
                    <Link>Khuyến mãi</Link>
                </span>
                <button className='w-[183px] h-[60px] rounded-[60px] text-[#F04F3C] text-[20px] font-bold border-[1px] border-[#F04F3C]'>
                    Dịch vụ
                </button>
            </div>
        </div>
        <div className='relative w-[800px]'>
            <img 
            src={intro1} 
            alt="introduce1"
            width={567}
            height={567}
            className='absolute top-[50px] right-[50px]'
            />
            <img 
            src={intro5} 
            alt="introduce5"
            width={90}
            height={90}
            className='absolute top-[530px] right-[524px]'
            />
            <img 
            src={intro4} 
            alt="introduce4"
            width={140}
            height={140}
            className='absolute top-[617px] right-[367px]'
            />
            <img
              src={intro3}
              width={218}
              height={218}
              alt="introduce 3"
              className="absolute top-[308px] right-[549px] "
            />
            <img
              src={intro2}
              width={323}
              height={323}
              alt="introduce 2"
              className="absolute top-[407px] right-[27px] "
            />
        </div>
      </div>
      <div className='flex justify-between mx-3'>
        <Link>
        <img 
        src={introDog} 
        alt="dog"
        width={720}
        height={258}
        className='shadowItem'
        />
        </Link>
        <Link>
        <img 
        src={introCat} 
        alt="cat"
        width={720}
        height={258}
        className='shadowItem'
        />
        </Link>
      </div>
      </div>
    </>
  )
}

export default Introduce