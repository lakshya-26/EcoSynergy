import React, { useState, useEffect } from 'react';
import { uploadEnergyData, fetchEnergyData } from './api.js';

const UploadEnergyData = () => {
  const [image, setImage] = useState(null);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [generated, setGenerated] = useState('');
  const [latestGenerated, setLatestGenerated] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEnergyData();
        if (data.length > 0) {
          const latestData = data[data.length - 1];
          setLatestGenerated(latestData.generated);
        }
      } catch (error) {
        alert('Error fetching data');
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('month', month);
    formData.append('year', year);
    formData.append('generated', latestGenerated);

    try {
      await uploadEnergyData(formData);
      setImage(null);
      setMonth('');
      setYear('');
      setGenerated('');
      alert('Data uploaded successfully');
    } catch (error) {
      alert('Error uploading data');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Month:</label>
        <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} required />
      </div>
      <div>
        <label>Year:</label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
      </div>
      <div>
        <label>Generated (kWh):</label>
        <input type="number" value={latestGenerated} readOnly />
      </div>
      <div>
        <label>Upload Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      </div>
      <button type="submit">Upload Data</button>
    </form>
  );
};

export default UploadEnergyData;
