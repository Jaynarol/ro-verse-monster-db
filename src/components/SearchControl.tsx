'use client'

import useMonster from '@/hooks/useMonster'
import { LuBox } from 'react-icons/lu'

const SearchControl = () => {
  const { searchItem, setItemidsBySearch } = useMonster()

  return (
    <section className="mb-5 flex justify-center">
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          <LuBox className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Find Item"
          value={searchItem}
          onChange={(e) => setItemidsBySearch(e.target.value)}
        />
      </div>
    </section>
  )
}
export default SearchControl
