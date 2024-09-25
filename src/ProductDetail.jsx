import React, { useEffect, useState } from "react";
import Header from "./pages/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImg,setmainImg] = useState('')

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
        setmainImg(response.data.thumbnail)
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />

      <div className="grid grid-cols-[40%_auto] gap-3 max-w-[1320px] mx-auto">
        <div>
          <img
            src={mainImg}
            alt=""
            className="border-2 w-full border-[#ccc] rounded-[20px]"
          />
          <div className="flex gap-2">
               {product.images.map((img)=>{
                    return <img onClick={()=>setmainImg(img)} src={img} alt="" className=" my-5 w-[30%] border" />
                    })}
          </div>
        </div>
        <div className="border bg-orange-200 rounded-[20px]">
          <h1 className=" text-center my-5 font-bold text-[40px]">Product Detail</h1>
          <p className="m-[40px_40px] text-lg text-[30px] font-sans"> Product Name : {product.title}</p>
          <p className="m-[40px_40px] text-lg text-[30px] font-sans"> Price : $ {product.price}</p>
          <p className="m-[40px_40px] text-lg text-[30px] font-sans"> Category : {product.category}</p>
          <p className="m-[40px_40px] text-lg text-[30px] font-sans"> Brand :{product.brand}</p>
          <p className="m-[40px_40px] text-lg text-[30px] font-sans"> Shipping Information : {product.shippingInformation}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
