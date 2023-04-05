import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import './TaskList.css';




const ISSUES_API_URL = 'https://api.github.com/repos/huahua1215/DcardHw/issues';

const TaskList = () => {
  const [issues, setIssues] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); 
  const [tasks, setTasks] = useState([]);
  const loader = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [issue, setIssue] = useState(null);

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !loading && hasMore) { 
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(ISSUES_API_URL, {
        params: {
          page: page,
          per_page: 10,
          state: filter,
          sort: 'created',
          direction: sortOrder,
          q: searchQuery,
        },
      })
      .then((response) => {
        const newIssues = response.data;
        setIssues((prevIssues) => [...prevIssues, ...newIssues]);
        setHasMore(newIssues.length > 0); 
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [page, filter, sortOrder, searchQuery]);

  useEffect(() => {
    
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPage(1);
    setIssues([]);
    setHasMore(true); 
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
    setPage(1);
    setIssues([]);
    setHasMore(true); 
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
    setIssues([]);
    setHasMore(true); 
  };
  
  const closeTask = async task => {
    await axios.patch(
      `https://api.github.com/repos/huahua1215/DcardHw/issues/${task.number}`,
      { state: 'closed' },
      {
        headers: {
          Authorization: 'Bearer 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',
        },
      }
    );

    setTasks(prevTasks => prevTasks.filter(prevTask => prevTask.number !== task.number));

 }

 useEffect(() => {
  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0
  };

  const observer = new IntersectionObserver(handleObserver, options);
  if (loader.current) {
    observer.observe(loader.current);
  }

  return () => {
    observer.unobserve(loader.current);
  };
}, []);

const handleObserver = (entities) => {
  const target = entities[0];
  if (target.isIntersecting && hasMore) {
    setPage(prevPage => prevPage + 1);
  }

};
console.log(searchTerm)

  const handleSearch = () => {
    if (searchTerm) {
      axios
        .get(`https://api.github.com/repos/huahua1215/DcardHw/issues?q=${searchTerm}`)
        .then((response) => {
          const data = response.data;
          if (data && data.length > 0) {
            setIssue(data);
          } else {
            setIssue(null);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setIssue(null);
    }
    console.log('hi');
  };

  

  return (
    <>
      <div>
        <div className='mytask'>My Task:</div>
        <label className='status'>
          Filter by status:  
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
        <label className='time'>
          Sort by creation time:
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <label className='search'>
          Search:
          <input type="text" value={searchQuery} onChange={handleSearchQueryChange} />
        </label>
      </div>
      
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <h2>{issue.title}</h2>
            <p>{issue.body}</p>
            <p>Status: {issue.state}</p>
            <p>{issue.created_at}</p>
            <p>Updated at: {issue.updated_at}</p>
            <button onClick={() => closeTask(issue)}>Close Task</button>
            <button >Edit Task</button>
            
          </li>
        ))}
        {hasMore && (
     <div ref={loader} style={{ textAlign: "center" }}>
       <p>Loading...</p>
     </div>
   )}
      </ul>
      
      
      {loading && <p>Loading...</p>}
      {!loading && issues.length === 0 && <p>No issues found.</p>}
    </>
);
};
export default TaskList;


