import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import './Home.scss'
import Category from './../../components/category/Category';
import Product from '../../components/product/Product';
import { axiosClient } from '../../utils/axiosClient';
import { useSelector } from 'react-redux';

function Home() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const [topProducts,setTopProducts]=useState(null);

  async function fetchdata(){
    
    const topProductsResponse= await axiosClient.get('/products?filters[isTopPick][$eq]=true&populate=image')

    
    setTopProducts(topProductsResponse.data.data)
    // console.log(categoryResponse);
    // console.log(topProductsResponse);
  }



  useEffect(()=>{
      fetchdata()
  },[])
  return (
    <div className="Home">
     <Hero/>
     <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
           <p className="subheading">Shop from the best, Film and TV Posters Collection.
           </p>
           <div className="content">
           {categories?.map((category) => (
                        <Category key={category.id} category={category} />
                    ))}
             
          </div>
        </div>
     </section>

     <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
           <p className="subheading">Shop from the best, Film and TV Posters Collection.
           </p>
           <div className="content">
           {topProducts?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
             
            
           </div>
        </div>
     </section>
    </div>
  )
}

export default Home
