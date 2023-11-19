import React from 'react';
import { graphql, HeadProps } from 'gatsby';

export default function PageNotFount() {
  return (
    <>
      <div className={'h-screen w-full bg-[#633194] grid place-items-center'}>
        <div className={'text-gray-300 text-[4rem]'}>
          <p>🫠I should have prepared that page🫠</p>
        </div>
      </div>
    </>
  );
};