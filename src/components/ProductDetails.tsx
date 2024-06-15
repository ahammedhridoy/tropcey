import React from 'react';

const ProductDetails = ({ labels, life, storage, ingredient, labelFooter } : any) => {

  const getFirstString = (str : string) => {
    let final = ""
    const strArr = str.split(" ");
    for(let i = 0;i < strArr.length - 1 ; i ++) {
      final = i === 0 ? final + strArr[i] : final + " " + strArr[i];
    }
    return final
  }

  return (
    <div className="p-4 w-full">
      <div className="w-full flex justify-end items-start">
        <div>
          <div className="flex space-x-4">
            {labels.map((label : any, index : number) => (
              <div key={index} className="bg-[#0a2847] w-[112px] h-[112px] rounded-full flex justify-center items-center">
                <div className='bg-white w-[104px] h-[104px] rounded-full flex justify-center items-center'>
                  <div className="bg-[#0a2847] w-[96px] h-[96px] rounded-full flex justify-center items-center font-black overflow">
                    {label.length < 8 ? label : <div className='flex-col justify-center items-center '>
                      {
                        label === 'NO PRESERVATIVE' ? <>
                        <p className='text-lg text-center'>No</p>
                        <p className='text-[10px] text-center '>PRESERVATIVE</p>
                        </> : <>
                        <p className='text-[10px] text-center'>{getFirstString(label)}</p>
                        <p className='text-lg text-center '>{label.split(" ")[label.split(" ").length - 1]}</p>
                        </>
                      }
                    </div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {labelFooter ? <div>
            <h6 className='bg-white text-black py-2 px-5 mt-3 rounded-full text-[12px] text-center'> <b>Note-</b>{labelFooter}</h6>
          </div> : null }
        </div>
        <div className="text-left ml-10">
          <div className="text-sm text-black text-left mb-2"><h4><strong className='text-black font-black'>Shelf Life</strong></h4> <h5>{life}</h5></div>
          <div className="text-sm text-black text-left mb-2"><h4><strong className='text-black font-black'>Storage</strong></h4> <h5>{storage}</h5></div>
          <div className="text-sm text-black text-left mb-2"><h4><strong className='text-black font-black'>Ingredient</strong></h4> <h5>{ingredient}</h5></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
