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
    <button className = 'btn-footer border-r border-divider px-2'>
        <div className='w-full flex flex-row content-center justify-center flex-nowrap'>
          <div className='mr-1 my-auto'>
            {children}
          </div>
          <p className='text-xs font-sans whitespace-nowrap'>
            {displayText}
          </p>
        </div>
    </button>
  );

}