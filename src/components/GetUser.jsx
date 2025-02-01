import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
function GetUser() {
    function getUsers() {
        return axios('https://jsonplaceholder.typicode.com/users')
    }
    const { data, isLoading, isError } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    })
    return (
        <div className='bg-blue-100 w-[300px] mt-5 text-center border rounded-xl ml-5'>
            <h1>1. API ma'lumotlarini olish va yuklanish holatini boshqarish
            </h1>
            {
                isError && <p>Error mavjud!</p>
            }
            {
                isLoading && <p>Loading...</p>
            }
            {
                data?.data.length > 0 && data?.data.map((user) => {
                    return <ul key={user.id}>{user.name}</ul>
                })
            }
        </div>
    )
}

export default GetUser
