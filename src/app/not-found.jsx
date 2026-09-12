import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='border-4 border-amber-400'>
             <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
        </div>
    );
};

export default NotFound;