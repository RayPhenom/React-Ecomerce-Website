import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResults = 'Showing 01-12 of 139 Results'
import Data from "../products.json"
import ProductCards from './ProductCards'
import Pagination from './Pagination'

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage =10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct )

  const paginate=(pageNumber) =>{
    setCurrentPage(pageNumber)

  }


  return (
    <div>
        <PageHeader title="Our Exemplary Shop" curPage="Shop"/>
        <div className='shop-page padding-tb'>
          <div className="container">
            <div className="row justify-content-center">
              <div className='col-lg-8 col-12'>

                <article>
                  <div className='shop-title d-flex flex-wrap justify-content-between'>
                    <p>{showResults}</p>
                    <div className={'product-view-mode ${GridList ? "gridActive" :"listActive" }'}>
                      <a className='grid' onClick={() => setGridList(!GridList)}>
                        <i className='icofont-ghost'>

                        </i>
                      </a>
                      <a className='list' onClick={() => setGridList(!GridList)}>
                        <i className='icofont-listine-dots'>

                        </i>
                      </a>

                    </div>

                  </div>
                  <div>
                    <ProductCards GridList={GridList} products={products}/>

                  </div>

                  <Pagination

                  productsPerPage ={productsPerPage}
                  totalProducts = {products.length}
                  paginate = {paginate}
                  activePage={currentPage}
                  />

                </article>

              </div>
              <div className='col-lg-4 col-12'>
                right side

              </div>

            </div>
          </div>

        </div>
      
    </div>
  )
}

export default Shop
