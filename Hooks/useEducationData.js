import { useState, useEffect } from "react";
import axios from "axios";

export const useEducationData = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        // ✅ Check if data exists in localStorage
        const cachedData = localStorage.getItem("educationData");

        if (cachedData) {
          // Load from cache
          setEducation(JSON.parse(cachedData));
        } else {
          // Fetch from GitHub
          const response = await axios.get(
            "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/main/Data/educationData.json"
          );
          const data = response.data.educationData || [];

          // Save to state + cache
          setEducation(data);
          localStorage.setItem("educationData", JSON.stringify(data));
        }
      } catch (err) {
        console.error("Error fetching Education:", err);
      }
    };

    fetchEducation();
  }, []); // Run once

  return { education };
};
