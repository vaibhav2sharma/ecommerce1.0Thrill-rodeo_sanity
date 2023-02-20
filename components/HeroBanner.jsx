import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3 className=''>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src = { urlFor(heroBanner.image)} alt="Trek-Image" className='hero-banner-image'/>

        <div>
          <Link href={`/product/${heroBanner.product}`}>

          <button className='btn' type='button'>
            {heroBanner.smallText}
          </button>

          </Link>


          <div className='desc'>

            <h5>
              Description
            </h5>
            <p>
              {heroBanner.desc
                
              }
            
            </p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default HeroBanner
