// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const uuid = '306a6dd6-fbdf-4d08-b6af-f314624217ec';
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://headless-drupal.ddev.site/jsonapi/node/page/${uuid}`);
        setPageData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  // Adjust based on your Drupal content structure
  return (
    <div>
      <h1>{pageData.data.attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.data.attributes.body.value }} />
    </div>
  );
}

export default App;
