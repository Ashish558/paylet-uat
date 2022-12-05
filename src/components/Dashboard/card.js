import React from 'react'

export default function Card({ title, num, id }) {


   return (
      <div className='col-12 col-md-3' style={{ marginBottom: '18px' }} >
         <div id={id} className="MerchantRight_stat__EdXej pt-2" >
            <h5> {title} </h5>
            <h1> {num} </h1>
            <div className="flex">
               <div className="w-1/2" style={{
                  height: '1px',
                  backgroundColor: 'white'
               }}></div>
               <div className="w-1/2" style={{
                  height: '1px',
                  backgroundColor: 'rgb(177,177,177)'
               }}></div>
            </div>
            <div className="MerchantRight_desc__NFwi6">
               70% increase
            </div>
         </div>
      </div>
   )
}
