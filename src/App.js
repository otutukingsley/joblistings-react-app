import React, {useState, useEffect} from 'react';
import './App.css';
import Jobs from './components/joblistings/Jobs';
import SearchBar from './components/joblistings/SearchBar';
import Header from './components/layouts/Header';
import data from './data.json'

function App() {

  const [jobListings,  setJobListings] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobListings(data)
    //eslint-disable-next-line
  }, [])

  const filterFunc = ({role, level, languages, tools}) => {

      if(filters.length === 0){
        return true
      }

      const tags = [role, level];

      if(tools){
      tags.push(...tools);
      }

      if(languages) {
      tags.push(...languages);
      }

    return filters.every((filter) => tags.includes(filter))  
  }

  const handleTagFilter = (tag) => {
    if(filters.includes(tag)){
      return;
    }

    setFilters([...filters, tag])
  }

  const filterSearch = (passedFilters) => {
    setFilters(filters.filter((eachFilteredTag) => eachFilteredTag !== passedFilters))
  }

  const clearBtn = () => {
    setFilters([]);
  }

  const filteredJobs = jobListings.filter(filterFunc)

  return (
    <div className="App">
      <Header/>
      <div className="container">
      {filters.length > 0 && <SearchBar filters={filters} handleFilterClick = {filterSearch} clearBtn={clearBtn}/>}
        <Jobs jobs={filteredJobs} tagFilter={handleTagFilter}/>
      </div>
    </div>
  );
}

export default App;
