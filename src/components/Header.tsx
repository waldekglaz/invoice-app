import React from 'react'
import Logo from '../assets/logo.svg'
import Avatar from '../assets/image-avatar.jpg'
import Moon from '../assets/icon-moon.svg'
import Sun from '../assets/icon-sun.svg'

export default function Header() {
  return (
    <header className="flex justify-between bg-slate-800">
      <div className="bg-indigo-500 p-6 rounded-r-2xl ">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <button>
          <img className="mr-6" src={Moon} alt="" />
        </button>
        <div className="p-[20px] border-l-[1px] border-slate-700">
          <img className="w-8 rounded-full " src={Avatar} alt="profile picture" />
        </div>
      </div>
    </header>
  )
}
