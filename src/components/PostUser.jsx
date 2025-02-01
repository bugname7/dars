import React from 'react';
import { QueryClient, QueryClientProvider, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const queryClient = new QueryClient();

function PostUser() {
    const queryClient = useQueryClient();
    const { mutate, isLoading, isError } = useMutation({
        mutationFn: (user) => axios.post('https://jsonplaceholder.typicode.com/users', user),
        onError(error) {
            console.log(error);
        },
        onSuccess() {
            console.log('Hammasi joyida');
            queryClient.invalidateQueries(['user']);
        },
        onSettled() {
            console.log('Amal bajarildi');
        },
        retry: 2,
    });

    function handleSave() {
        const user = {
            name: 'bobur',
        };
        mutate(user);
    }

    return (
        <div className='border  w-[200px] p-3 ml-5 mb-5 rounded-xl'>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error mavjud!</p>}
            <h1>2. Ma'lumot yuborish va refetch qilish
            </h1>
            <button
                className="bg-black py-1 px-3 rounded-md text-center cursor-pointer hover:bg-gray-600 text-white"
                onClick={handleSave}
            >
                refetch
            </button>
        </div>
    );
}

export default PostUser;
