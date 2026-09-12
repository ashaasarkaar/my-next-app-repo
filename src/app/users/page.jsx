import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'All Users',
  description: 'All Users are here to discuss about this project',
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return (
        <div>
            <h1>Users are coming here</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    users.map(user => <div key={user.id} className="card bg-info text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <Link href={`/users/${user.id}`} >
                                    <button className="btn">Show Details Info</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;