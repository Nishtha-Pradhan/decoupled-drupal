// src/SamplePage2.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function App() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const uuid = 'db9bb543-39ae-4f12-8181-19ffc11f6140';
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://headless-drupal.ddev.site/jsonapi/node/article/${uuid}`);
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

  return (
    <div>
      <h1>{pageData.data.attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.data.attributes.body.value }} />
    </div>
  );
}

export default App;
