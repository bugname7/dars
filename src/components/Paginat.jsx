import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getUsers = async ({ queryKey }) => {
    const [_key, page] = queryKey;
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`
    );
    return response.data;
};

function Paginat() {
    const [page, setPage] = useState(1);

    const { data: users, isLoading, isError } = useQuery({
        queryKey: ['users', page],
        queryFn: getUsers,
    });

    const handlePrevious = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    const handleNext = () => {
        setPage((item) => item + 1);
    };

    return (
        <div className="p-4 border w-[350px] ml-5 mb-5 mt-5 rounded-xl">
            <h1>3. Pagination (sahifalash) qilish
            </h1>

            {isLoading && <p>Loading...</p>}
            {isError && <p>Error mavjud!</p>}

            {users && (
                <ul >
                    {users.map((user) => (
                        <li key={user.id} className='bg-black  w-[300px] text-white mb-2 p-2 rounded-md'>{user.name}</li>
                    ))}
                </ul>
            )}

            <div className="flex space-x-4 mt-4 ">
                <button
                    className="bg-red-500 hover:bg-red-600 rounded-md cursor-pointer text-white px-4 py-2 rounded-xl disabled:opacity-50"
                    onClick={handlePrevious}
                    disabled={page === 1}
                >
                    Prev
                </button>
                <span> {page}</span>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
                    onClick={handleNext}
                    disabled={page === 5}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Paginat;
