import searchIcon from '../assets/search.png'

export interface SearchProps {
  query?: string
  setQuery: (query: string) => void
}

const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <header className='header'>
      <div className='search-container'>
        <input
          className='search-bar'
          type='text'
          value={query}
          onChange={handleChange}
        />
        <button className='button'>
          <img className='icon' src={searchIcon} alt='search' />
        </button>
      </div>
    </header>
  )
}

export default Search
