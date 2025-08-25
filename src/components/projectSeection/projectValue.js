import { useState, useEffect, useMemo } from "react";
export const projects = [
  {
    id: 3,
    title: "💻 CVGenerator",
    link: "https://cv-generator-second-try.vercel.app/",
    description: "A CV generator app that creates ATS-friendly resumes.",
    codeLink: "https://github.com/FakhirAhmedKhan/CVGenerator",
    imageUrl: "/BestWork/CVGenerator.avif",
    category: "Tool",
  },
  {
    id: 2,
    title: "💻 Landing-Page--For-ATS-Calculator",
    link: "https://fakhirahmedkhan.github.io/Landing-Page--For-ATS-Calculator/",
    description: "A simple Landing page for my ATS tools with good UI/UX.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/Landing-Page--For-ATS-Calculator",
    imageUrl: "/BestWork/Landing-page.avif",
    category: "Web",
  },
  {
    id: 1,
    title: "💻 ATS-Calculator",
    link: "https://fakhirahmedkhan.github.io/ATS-Calculator/",
    description:
      "An ATS (Applicant Tracking System) calculator is a tool that assesses your resume's",
    codeLink: "https://github.com/FakhirAhmedKhan/ATS-Calculator",
    imageUrl: "/BestWork/ATS-Calculator.avif",
    category: "Tool",
  },
  {
    id: 24,
    title: "🎞️ Netflix_Clone",
    link: "https://netflix-clone-jade-beta.vercel.app/",
    description:
      "The Netflix Clone replicates the core features of the popular streaming platform.",
    codeLink: "https://github.com/FakhirAhmedKhan/NetFlix_Clone",
    imageUrl: "/BestWork/Netflix.avif",
    category: "Web",
  },
  {
    id: 23,
    title: "▶️ YouTube_Clone",
    link: "https://youtube-git-main-fakhir-ahmed-khans-projects.vercel.app/",
    description:
      "This YouTube Clone is a responsive web page that replicates the core features.",
    codeLink: "https://github.com/FakhirAhmedKhan/YouTube-clone-in-React",
    imageUrl: "/BestWork/YouTube.avif",
    category: "Web",
  },
  {
    id: 26,
    title: "✖️ Twitter_Clone",
    link: "https://x-clone-three-alpha.vercel.app/",
    description:
      "This X_Clone is a responsive web page that replicates the core features.",
    codeLink: "https://github.com/FakhirAhmedKhan/X_Clone",
    imageUrl: "/BestWork/X_Clone.avif",
    category: "Web",
  },
  {
    id: 5,
    title: "🧾 Unit Converter",
    link: "https://temperature-converter-by-using-html-css-and-jave-script.vercel.app/",
    description:
      "Convert between various units for temperature and speed, such as Celsius, Fahrenheit, km/h, and mph.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/Temperature-Converter-by-using-HTML--CSS-and-JaveScript",
    imageUrl: "/BestWork/UnitConverter.avif",
    category: "Tool",
  },
  {
    id: 6,
    title: "⛅ Weather App",
    link: "https://weather-app-cyan-one-55.vercel.app/",
    description:
      "Provides real-time weather updates for any global location, including temperature, humidity, and wind speed.",
    codeLink: "https://github.com/FakhirAhmedKhan/Weather-App",
    imageUrl: "/BestWork/Weather.avif",
    category: "Tool",
  },
  {
    id: 7,
    title: "🗣️ Text-to-Speech",
    link: "https://text-to-speech-ruby-phi.vercel.app",
    description: "Converts written text into natural-sounding audio instantly.",
    codeLink: "https://github.com/FakhirAhmedKhan/text-to-speech",
    imageUrl: "/BestWork/Text-to-Speech.avif",
    category: "Tool",
  },
  {
    id: 8,
    title: "🛒 Amazon Clone",
    link: "https://github.com/FakhirAhmedKhan/retry-amazon-clone",
    description:
      "A simple web app made with JavaScript. It lets users view products.",
    codeLink: "https://github.com/FakhirAhmedKhan/retry-amazon-clone",
    imageUrl: "/BestWork/ammzon.avif",
    category: "Web",
  },
  {
    id: 10,
    title: "📝 Task_Tracker",
    link: "https://to-do-list-neon-six.vercel.app/",
    description:
      "A simple and easy-to-use task manager that helps you organize your daily tasks.",
    codeLink: "https://github.com/FakhirAhmedKhan/ToDOList",
    imageUrl: "/BestWork/TaskTracker.avif",
    category: "Tool",
  },
  {
    id: 11,
    title: "🐍 Python Basic Programs",
    link: "https://github.com/FakhirAhmedKhan/Python_Basic_Program-",
    description:
      "A collection of beginner-level Python programs designed to build a foundation in programming concepts.",
    codeLink: "https://github.com/FakhirAhmedKhan/Python_Basic_Program-",
    imageUrl: "/BestWork/jspic.avif",
    category: "Python",
  },
  {
    id: 12,
    title: "🐍 Basic Python Programs Part 3",
    link: "https://github.com/FakhirAhmedKhan/Basic_Python_Program_Part_2",
    description:
      "The second part of the beginner-level Python series focuses on more practice with functions.",
    codeLink: "https://github.com/FakhirAhmedKhan/Basic_Python_Program_Part_2",
    imageUrl: "/BestWork/jspic.avif",
    category: "Python",
  },
  {
    id: 13,
    title: "🐍 Grading System in Python",
    link: "https://github.com/FakhirAhmedKhan/Grading_System_in_python",
    description:
      "A simple Python program that calculates student grades based on their marks using if/else statements.",
    codeLink: "https://github.com/FakhirAhmedKhan/Grading_System_in_python",
    imageUrl: "/BestWork/jspic.avif",
    category: "Python",
  },
  {
    id: 14,
    title: "🐍 Game in Python",
    link: "https://github.com/FakhirAhmedKhan/word-guessing-game-in-py",
    description:
      "A fun terminal game where players guess letters to find the hidden word.",
    codeLink: "https://github.com/FakhirAhmedKhan/word-guessing-game-in-py",
    imageUrl: "/BestWork/jspic.avif",
    category: "Python",
  },
  {
    id: 15,
    title: "🐍 Quiz in Python",
    link: "https://github.com/FakhirAhmedKhan/HTML-or-CSS-Quiz-by-using-python",
    description:
      "A simple quiz app that tests knowledge of HTML, CSS, and JS. It runs in the terminal and shows the final score.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/HTML-or-CSS-Quiz-by-using-python",
    imageUrl: "/BestWork/jspic.avif",
    category: "Python",
  },
  {
    id: 17,
    title: "🎮 Rock, Paper, Scissors Game",
    link: "https://rock-three-umber.vercel.app/",
    description:
      "The classic game allows players to test their luck against the computer.",
    codeLink: "https://github.com/FakhirAhmedKhan/rock",
    imageUrl: "/BestWork/Rock.avif",
    category: "Game",
  },
  {
    id: 18,
    title: "🔳 QR Code Generator",
    link: "https://qr-generator-lilac-beta.vercel.app/",
    description:
      "A simple tool that creates QR codes from data. Users enter data, and the app generates a scannable QR code.",
    codeLink: "https://github.com/FakhirAhmedKhan/QR-Generator",
    imageUrl: "/BestWork/qr.avif",
    category: "Tool",
  },
  {
    id: 19,
    title: "⚛️ Calculator-in-React",
    link: "https://calculator-in-react-ten.vercel.app/",
    description:
      "A simple app built with React that performs basic math operations. It uses components and state to update results.",
    codeLink: "https://github.com/FakhirAhmedKhan/Calculator-in-React",
    imageUrl: "/BestWork/jspic.avif",
    category: "React",
  },
  {
    id: 20,
    title: "💻Basic JavaScript Program",
    link: "https://github.com/FakhirAhmedKhan/Basic-JavaScrip-Program",
    description:
      "A collection of beginner-level JavaScript programs to build a foundation in programming concepts.",
    codeLink: "https://github.com/FakhirAhmedKhan/Basic-JavaScrip-Program",
    imageUrl: "/BestWork/jspic.avif",
    category: "JavaScript",
  },
  {
    id: 21,
    title: "💻 Basic JavaScript Program part 2",
    link: "https://github.com/FakhirAhmedKhan/Basic-Javascript-part-2",
    description:
      "The second part of the beginner-level JavaScript series, focusing on more practice.",
    codeLink: "https://github.com/FakhirAhmedKhan/Basic-Javascript-part-2",
    imageUrl: "/BestWork/jspic.avif",
    category: "JavaScript",
  },
  {
    id: 25,
    title: "💻 Basic JavaScript Program part 3",
    link: "https://github.com/FakhirAhmedKhan/JavaScript-Basic-Program-Part-4",
    description:
      "The second part of the beginner-level JavaScript series, focusing on more practice.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/JavaScript-Basic-Program-Part-4",
    imageUrl: "/BestWork/jspic.avif",
    category: "JavaScript",
  },
  {
    id: 22,
    title: "💻 Quiz in JavaScript",
    link: "https://github.com/FakhirAhmedKhan/Quiz-JavaScript",
    description:
      "A simple quiz app that tests knowledge of HTML, CSS, and JS. It runs in the terminal and shows the final score.",
    codeLink: "https://github.com/FakhirAhmedKhan/Quiz-JavaScript",
    imageUrl: "/BestWork/jspic.avif",
    category: "JavaScript",
  },
  {
    id: 27,
    title: "📝 Electron-Learning-Resource",
    link: "https://github.com/FakhirAhmedKhan/Electron-Learning-Resource/blob/main/README.md",
    description:
      "A simple Electron learning resource designed for users with basic knowledge of HTML, CSS, and JavaScript or Electron concepts.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/Electron-Learning-Resource/blob/main/README.md",
    imageUrl: "/BestWork/jspic.avif",
    category: "Doc",
  },
  {
    id: 28,
    title: "📝 React_Hooks_For_Dev",
    link: "https://github.com/FakhirAhmedKhan/React_Hooks_For_Dev",
    description:
      "A simple React_Hooks_For_Dev learning resource designed for users with basic knowledge of React.",
    codeLink: "https://github.com/FakhirAhmedKhan/React_Hooks_For_Dev",
    imageUrl: "/BestWork/jspic.avif",
    category: "Doc",
  },
  {
    id: 29,
    title: "📝MySQL-Learning-Guide-",
    link: "https://github.com/FakhirAhmedKhan/MySQL-Learning-Guide-",
    description:
      "A simple MySQL learning resource designed for users with basic knowledge of MySQL.",
    codeLink: "https://github.com/FakhirAhmedKhan/MySQL-Learning-Guide-",
    imageUrl: "/BestWork/jspic.avif",
    category: "Doc",
  },
  {
    id: 30,
    title: "📝 HTML-CSS-Cheat-Sheet",
    link: "https://github.com/FakhirAhmedKhan/HTML-CSS-Cheat-Sheet",
    description:
      "A simple HTML/CSS learning resource designed for users with basic knowledge of HTML/CSS.",
    codeLink: "https://github.com/FakhirAhmedKhan/HTML-CSS-Cheat-Sheet",
    imageUrl: "/BestWork/jspic.avif",
    category: "Doc",
  },
  {
    id: 31,
    title: "📝 JavaScript-Cheat-Sheet",
    link: "https://github.com/FakhirAhmedKhan/JavaScript-Cheat-Sheet",
    description:
      "A simple JavaScript learning resource designed for users with basic knowledge of JavaScript.",
    codeLink: "https://github.com/FakhirAhmedKhan/JavaScript-Cheat-Sheet",
    imageUrl: "/BestWork/jspic.avif",
    category: "Doc",
  },
];

// Hook for filtering projects by category
export function useProjectFilter(projects) {
  // Get unique categories
  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category))),
    [projects]
  );

  // Active category state
  const [activeCategory, setActiveCategory] = useState("");

  // Set initial category when projects/categories change
  useEffect(() => {
    if (categories.length) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

  // Filter projects by active category
  const filteredProjects = useMemo(() => {
    return activeCategory
      ? projects.filter((p) => p.category === activeCategory)
      : projects;
  }, [projects, activeCategory]);

  return { categories, activeCategory, setActiveCategory, filteredProjects };
}
