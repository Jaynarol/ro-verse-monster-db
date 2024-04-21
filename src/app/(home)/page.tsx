import MonsterList from '@/components/MonsterList'
import SearchControl from '@/components/SearchControl'

const PageHome = () => {
  return (
    <main className="px-10 py-5 pb-10">
      <h1 className="mb-5 text-4xl text-white">Monster Loots</h1>
      <SearchControl />
      <MonsterList />
    </main>
  )
}

export default PageHome
