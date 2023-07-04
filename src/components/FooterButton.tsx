import React from 'react';

export default function FooterButton ({ 
  children, displayText, onClickFn, onHoverFn 
} : {
  children : any,
  displayText : string,
  onClickFn : (...args: any[]) => any,
  onHoverFn : (...args: any[]) => any,
}) {

  // assert : a button is returned which takes in a 'displaySvg' and a 'displayText' 
  //          and displays them
  // 
  //          also execute the onClick function when onClick and execute the onHoverFn
  //          when hovering. 

  return (
    <button className = 'btn-footer'>
        <div className='w-full flex flex-row content-center justify-center flex-wrap'>
          <div className='mx-1 my-auto'>
            {children}
          </div>
          <p className='text-xs mx-1 font-sans'>
            {displayText}
          </p>
        </div>
    </button>
  );

}