import React from 'react'
import{Products,HeroBanner,Navbar,Footer,FooterBanner,Cart,Layout} from '../components/index'
import  {client} from '../lib/client'
const Home = ({products,bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner ={bannerData.length&& bannerData[0]} />
    

    <div className='products-heading'>
      <h2>Best Treks</h2>
      <p>Diffrent Treks </p>
    </div>

    
    <div className='products-container'>
      {products?.map((product)=><Products key={product._id} Product ={product} />)}
    </div>

    
  

    <FooterBanner footerBanner={bannerData && bannerData[0] }/>
    
    </>
       
    
  )
}


export const getServerSideProps =async () => {
  const query = '*[_type== "product"]';
  const products = await client.fetch(query)
  const bannerQuery = '*[_type== "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return {

    props:{products,bannerData}

  }

}

export default Home
