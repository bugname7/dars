import React from 'react'
import GetUser from './components/GetUser'
import Paginet from './components/Paginat'
import PostUser from './components/PostUser'
import Zustand from './store/Zustand'
import Todos from './components/Todos.'
import useModalStore from './store/useModalStore'
import Modal from './components/Modal'
import useLoginStore from './store/useLoginStore'
import Login from './components/Login'
function App() {
  const { user, logout } = useLoginStore();

  const { openModal } = useModalStore();
  return (
    <div>
      <div className='border rounded-xl mt-5 ml-5 w-[220px] p-5 mb-5 '>  <h1>6. Modal oynani boshqarish
      </h1><button
        onClick={openModal}
        className="bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 shadow-md"
      >
          shu yerni bosing
        </button>
      </div> {user ? (
        <div className='border w-[250px] p-3 rounded-md mt-3'>
          <p className="mb-4">hush kelibsiz! {user.username}</p>
          <button
            onClick={logout}
            className="bg-blue-500 text-white py-1 px-3 rounded-xl hover:bg-red-600"
          >
            Chiqish
          </button>
        </div>
      ) : (
        <Login />
      )}

      <Modal />
      <Todos />
      <Zustand />
      <GetUser />
      <Paginet />
      <PostUser />
    </div>
  )
}

export default App
