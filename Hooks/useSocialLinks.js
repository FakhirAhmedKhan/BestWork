import { useState, useEffect } from "react";
import axios from "axios";

export const useSocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const cachedData = localStorage.getItem("socialLinks");
        if (cachedData) {
          setSocialLinks(JSON.parse(cachedData));
        } else {
          const res = await axios.get(
            "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/Data/socialLinks.json"
          );
          const data = res.data.socialLinks || [];
          setSocialLinks(data);
          localStorage.setItem("socialLinks", JSON.stringify(data));
        }
      } catch (err) {
        console.error("Error fetching social links:", err);
      } 
    };

    fetchSocialLinks();
  }, []);

  return { socialLinks };
};
