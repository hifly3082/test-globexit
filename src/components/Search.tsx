import searchIcon from '../assets/search.png'

export interface SearchProps {
  query: string
  setQuery: (query: string) => void
}

const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  return (
    <header className='header'>
      <div className='search-container'>
        <input
          className='search-bar'
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='button'>
          <img className='icon' src={searchIcon} alt='search' />
        </button>
      </div>
    </header>
  )
}

export default Search
