import React, {useEffect, useState } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";




function ProductPage() {

const [proData, setPro] = useState([]);

const getData = async()=>{
getProducts().then((res)=>{
  setPro(res.proData)
})
.catch(err=>{
  console.log(err)
})
}

useEffect(()=>{
  getData()
},[])

const handleelt=()=>{
  const lth = data.sort((a,b)=>{
    if(a.price>b.price) return 1
    if(a.price < b.price) return -1
  })
  setPro([...lth])
}





  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      <div>
        <label>Per page</label>
        <select data-testid="limit-select">{page}</select>
      </div>
      <Pagination />
      {/* map products */}
      <ProductList  proData={proData}/>
     
    </div>
  );
}

export default ProductPage;
