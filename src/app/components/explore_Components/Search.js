
import React from 'react'
import { Search } from 'lucide-react'

export default function SearchBar({ search, setSearch }) {
  return (
    <>
    <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='w-full mx-auto flex justify-between items-center gap-2 flex-row'>
      <div className='w-full mb-4 md:mb-4 lg:mb-6 flex space-x-1 md:space-x-2'>
 <div className="w-full relative">
  <Search
    className="
      absolute
      left-2 top-1/2 -translate-y-1/2
      sm:left-3 md:left-4
      w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7
      text-textplaceholder
      pointer-events-none
    "
  />
  <input
    id="search"
    type="text"
    placeholder="Search by location, property type, or keyword..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
      w-full
      pl-10 sm:pl-12 md:pl-14
      px-4 py-2.5 md:py-2.5
      text-sm md:text-lg
      border border-bordercolor
      rounded-lg
      focus:ring-2 focus:ring-primary focus:border-transparent
      outline-none
      transition-all duration-200
      text-primary
      placeholder-textplaceholder
      truncate
    "
    required
  />
</div>

        <div>
          <button type='button' className={` px-2 py-2 md:py-3 md:px-6 flex gap-x-2 items-center justify-center rounded-lg transition-colors text-sm md:text-base text-center duration-300 text-background
             bg-buttonbg hover:bg-hoveroverbutton`} onClick={()=>setSearch('')}><Search className='w-6 h-6 block md:hidden'/><span className='hidden md:block w-6 md:w-14'>Search</span></button>
       </div>
       </div>
      </div>
        </div>
       </>
  )
}
