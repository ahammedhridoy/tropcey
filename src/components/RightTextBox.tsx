import React from 'react'
import DynamicTable from './DynamicTable'
import ProductDetails from './ProductDetails'
import ProductRecommendation from './ProductRecommendation'

export default function RightTextBox({ details, isFull, isSpread } : any) {
  return (
    <div className='mt-[64px] w-[55%] flex flex-col justify-center items-center pr-[128px]'>
      <h1 className="text-4xl font-bold text-black mb-1">{details.title}</h1>
      {details?.subTitle ? <h2 className="text-xl font-bold text-black mb-2">{details.subTitle}</h2> : null }
      {isSpread ? <div className='bg-[#f0f5ff] p-2 rounded-xl mb-1 w-[250px]'>
        <h2 className="text-5 font-bold text-[#2a406b] text-center">{details?.subTitleSupport}</h2>
      </div> : null }
      {details?.description ? <h3 className="text-sm text-center text-black font-semibold mb-2">{details.description}</h3> : null }
      <DynamicTable headers={details.table.header} rows={details.table.row} />
      <ProductDetails labels={details.label} life={details.life} storage={details.storage} ingredient={details.ingredient} labelFooter={details?.labelFooter}/>
      <ProductRecommendation imgUrls={details?.recommendations} isFull={isFull}/>
    </div>
  )
}
