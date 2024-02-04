
import axios from 'axios';
const url='https://raw.githubusercontent.com/mkatay/json-tours/main/tours'

export const truncatedInfo = (info) => {
    const maxLength = 100; // A maximális hossz 60 karakter
    if (info.length > maxLength) {
      const lastSpaceIndex = info.lastIndexOf(" ", maxLength);
      if (lastSpaceIndex !== -1) {
        info=info.substring(0, lastSpaceIndex) + "...";
      } else {
        // Ha nincs szóköz a maxLength után, akkor egyszerűen levágjuk a karaktereket
        info =info.substring(0, maxLength) + "...";
      }
    }
    return info
  };



export const getData = async (url, callback) => {
  try {
    const response = await axios.get(url);
    callback(response.data); // Pass only the data to the callback function
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getTour = async (id, callback) => {
    try {
      const response = await axios.get(url);
      const filteredData=response.data.filter(obj=>obj.id==id)
      callback(filteredData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  