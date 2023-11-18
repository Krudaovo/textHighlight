import React from 'react';

type LayoutChildrenType = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutChildrenType) {
  return (
    <>
      <div className='font-roboto'>
        {children}
      </div>
    </>
  );
};