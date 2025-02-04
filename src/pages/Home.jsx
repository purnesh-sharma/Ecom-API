import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  let [products, setProducts] = useState([]);
  let getProduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        return res.data;
      })
      .then((finalRes) => {
        setProducts(finalRes.products);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);
  // const products = [
  //     {
  //       id: 1,
  //       name: 'Earthen Bottle',
  //       href: '#',
  //       price: '$48',
  //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
  //       imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  //     },
  //     {
  //       id: 2,
  //       name: 'Nomad Tumbler',
  //       href: '#',
  //       price: '$35',
  //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
  //       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  //     },
  //     {
  //       id: 3,
  //       name: 'Focus Paper Refill',
  //       href: '#',
  //       price: '$89',
  //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
  //       imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  //     },
  //     {
  //       id: 4,
  //       name: 'Machined Mechanical Pencil',
  //       href: '#',
  //       price: '$35',
  //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
  //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  //     },
  //     {
  //         id: 1,
  //         name: 'Earthen Bottle',
  //         href: '#',
  //         price: '$48',
  //         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
  //         imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  //       },
  //       {
  //         id: 2,
  //         name: 'Nomad Tumbler',
  //         href: '#',
  //         price: '$35',
  //         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
  //         imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  //       },
  //       {
  //         id: 3,
  //         name: 'Focus Paper Refill',
  //         href: '#',
  //         price: '$89',
  //         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
  //         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  //       },
  //       {
  //         id: 4,
  //         name: 'Machined Mechanical Pencil',
  //         href: '#',
  //         price: '$35',
  //         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
  //         imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  //       },
  //     // More products...
  //   ]
  return (
    <div>
      <Header />
      <h1 className="text-[40px] font-bold text-center">Our Products</h1>
      <div className=" max-w-[1320px] mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => {
          return <ProductItem product={product} key={product.id}/>;
        })}
      </div>
    </div>
  );
}

function ProductItem({ product }) {
  let { title, thumbnail, price, id } = product;
  return (
    <div>
      <Link to={'/product-detail/'+id}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            alt={title}
            src={thumbnail}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
      </Link>
    </div>
  );
}

export default Home;
