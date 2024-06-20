// src/Blogs.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Blogs() {
  const [viewData, setViewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://headless-drupal.ddev.site/api/blogs');
        setViewData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!viewData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {viewData.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          {/* {item.field_image && item.field_image[0] && (
            <img
              src={item.field_image[0].url}
              alt={item.field_image[0].alt}
              title={item.field_image[0].title}
              width={item.field_image[0].width}
              height={item.field_image[0].height}
            />
          )}
          <div>
            {item.body && item.body[0] && item.body[0].summary 
              ? `${item.body[0].summary.substring(0, 200)}...`
              : 'No body content available'}
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default Blogs;
