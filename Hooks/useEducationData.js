import { useState, useEffect } from "react";
import axios from "axios";

export const useEducationData = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/main/Data/educationData.json"
        );
        const data = response.data.educationData;
        setEducation(data);
      } catch (err) {
        console.error("Error fetching Education:", err);
      }
    };

    fetchEducation();
  }, []);

  return { education };
};