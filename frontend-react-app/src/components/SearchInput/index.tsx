import * as React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

interface SearchInputProps {
  onChange: (str)=>void
}

export default function SearchInput({onChange}:SearchInputProps) {
  const [keyword, setKeyword] = React.useState<string>("");
  const quickSeachItems = ['water', 'candy', 'chicken', 'fish']
  return (
    <div  className='bg-white shadow-md rounded-lg  p-4'>
      <div className="flex rounded-md shadow-sm ">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <input
            value={keyword}
            onChange={e=>{
              setKeyword(e.target.value)
            }}
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-none rounded-l-md border-0 py-2 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Food Item"
          />
        </div>
        <button
          onClick={()=>{
            onChange(keyword)
            setKeyword("")
          }}
          type="button"
          className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <MagnifyingGlassIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />

        </button>
      </div>
      <div className='w-full pt-4 overflow-x-auto'>

        <div className='flex flex-wrap gap-2'>
          <span>quick search:</span>
          {
            quickSeachItems.map((item) => (
              <button  
                onClick={()=>{
                  onChange(item)
                }}
                key={item} 
                className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
              >
                {item}
              </button>
            ))
          }
        </div>

      </div>
    </div>
  )
}