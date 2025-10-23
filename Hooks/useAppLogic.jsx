import axios from "axios";
import { useState, useEffect, useMemo, useCallback, createContext, useContext } from "react";
import { GraduationCap, BookOpen, Sparkles, Home, Code, Briefcase, User } from "lucide-react";

// ------------------------------
// 🌐 NAVIGATION ITEMS
// ------------------------------
export const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "about", label: "Journey", icon: User },
];

// ------------------------------
// 🌍 CONTEXT SETUP
// ------------------------------
const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // ====== 🔹 Global Data States
  const [data, setData] = useState({
    skills: [],
    socialLinks: [],
    education: [],
    projects: [],
  });
  const [loading, setLoading] = useState(true);

  // ====== 🔹 Project Logic
  const [activeCategory, setActiveCategory] = useState("SAAS");
  const [visibleCount, setVisibleCount] = useState(3);

  // ====== 🔹 Navigation / Scroll Logic
  const [activeSection, setActiveSection] = useState(navItems[0]?.id || "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  // ==========================================================
  // 🧠 FETCH DATA (cached + parallel load)
  // ==========================================================
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const cached = {
          skills: localStorage.getItem("skillsIcons"),
          socialLinks: localStorage.getItem("socialLinks"),
          education: localStorage.getItem("educationData"),
          projects: localStorage.getItem("projectsData"),
        };

        const parsed = Object.fromEntries(
          Object.entries(cached).map(([k, v]) => [k, v ? JSON.parse(v) : null])
        );

        if (Object.values(parsed).every(Boolean)) {
          setData(parsed);
          setLoading(false);
          return;
        }

        const [skillsRes, socialRes, eduRes, projRes] = await Promise.all([
          axios.get("https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/main/Data/skillsIcons.json"),
          axios.get("https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/Data/socialLinks.json"),
          axios.get("https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/main/Data/educationData.json"),
          axios.get("https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/Data/projectsData.json"),
        ]);

        const fresh = {
          skills: skillsRes.data.skills ?? [],
          socialLinks: socialRes.data.socialLinks ?? [],
          education: eduRes.data.educationData ?? [],
          projects: projRes.data.projects ?? [],
        };

        Object.entries(fresh).forEach(([k, v]) =>
          localStorage.setItem(k + (k === "skills" ? "Icons" : "Data"), JSON.stringify(v))
        );

        setData(fresh);
      } catch (err) {
        console.error("❌ App data fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // ==========================================================
  // 🧭 SCROLL & ACTIVE SECTION HANDLING
  // ==========================================================
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);

          const scrollPosition = scrollY + 200;
          for (let i = navItems.length - 1; i >= 0; i--) {
            const section = document.getElementById(navItems[i].id);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(navItems[i].id);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }, 250);
  }, []);

  // ==========================================================
  // 💼 PROJECT FILTERING
  // ==========================================================
  const categories = useMemo(() => {
    if (!data.projects.length) return ["All"];
    const cats = Array.from(new Set(data.projects.map((p) => p.category)));
    return ["All", ...cats];
  }, [data.projects]);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? data.projects
      : data.projects.filter((p) => p.category === activeCategory);
  }, [data.projects, activeCategory]);

  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const showMore = (count = 3) => setVisibleCount((prev) => prev + count);
  const changeCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(3);
  };
  const iconMap = {
    GraduationCap,
    BookOpen,
    Code,
    Sparkles
  };
  // ==========================================================
  // 🧩 COMBINED CONTEXT VALUE
  // ==========================================================
  const value = useMemo(
    () => ({
      // ✅ Data
      ...data,
      loading,
      hoveredIndex,
      setHoveredIndex,
      iconMap,

      // ✅ Project filtering
      activeCategory,
      categories,
      visibleProjects,
      filteredProjects,
      showMore,
      changeCategory,

      // ✅ Navigation
      navItems,
      activeSection,
      isMenuOpen,
      scrolled,
      setIsMenuOpen,
      scrollToSection,
    }),
    [
      data,
      loading,
      activeCategory,
      categories,
      visibleProjects,
      filteredProjects,
      activeSection,
      isMenuOpen,
      scrolled,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// 🔹 Simple custom hook
export const useAppContext = () => useContext(AppContext);