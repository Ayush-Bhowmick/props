import React from 'react'

export function Card({userName, btnName = "PROPS", text }) {
  return (
    <div className=" mt-3 w-[60px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[50px]  rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{userName}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {text || "yoo"}
        </p>
        <button
          type="button"
          className="mt-4 mb-6 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {btnName}
        </button>
      </div>
    </div>
  )
}
export default  Card;
