import React, { useEffect, useState } from 'react';

function Feed() {

  const [feed, setFeed] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/posts/get")
    .then(res => res.json())
    .then(response => setFeed(response))
  }, [])
  console.log(feed)

  return (
    <div>
      {feed.map((f, index) => <div>{f.text}</div>)}
    </div>
  );
}

export default Feed;