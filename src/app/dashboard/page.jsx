import React from 'react';

export const metadata = {
  title: 'My DashBoard',
  description: '...',
}

const DashBoardPage = () => {
    return (
        <div>
            <h1 className='text-3xl text-purple-600 border-2 border-red-500 p-20 my-10'>This is Our DashBoard Page.</h1>
        </div>
    );
};

export default DashBoardPage;