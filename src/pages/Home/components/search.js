import React, { useState } from "react";
import axios from "axios";
import './search.css'

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [issue, setIssue] = useState(null);

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
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search" onClick={handleSearch}>Search</button>
      {issue && (
        <div>
          <h3>{issue.title}</h3>
          <p>{issue.body}</p>
          <p>Status: {issue.state}</p>
        </div>
      )}
    </div>
  );
}

export default Search;




