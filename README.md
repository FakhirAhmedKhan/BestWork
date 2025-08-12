# Component Documentation

## HeaderSection

### Purpose/Description

A responsive navigation header component that provides both desktop and mobile navigation with smooth scrolling functionality.

### Props & Parameters

This component doesn't accept any props directly, but uses the following internal state and hooks:

- `useHeaderMenu` hook returns:
  - `isMenuOpen` (boolean): Controls mobile menu visibility
  - `setIsMenuOpen` (function): Updates mobile menu state
  - `scrollToSection` (function): Handles smooth scrolling to sections

### How It Works

- Uses navigation items with emojis ("🏠", "👨🏻‍💻", "🛠️", "🚊", "📧")
- Renders a desktop navigation for larger screens (hidden on mobile)
- Provides a hamburger menu for mobile screens that toggles a mobile navigation drawer
- Navigation buttons trigger smooth scrolling to corresponding sections

### Usage Example

```jsx
import HeaderSection from "./components/Header";

function App() {
  return (
    <div>
      <HeaderSection />
      {/* Rest of your app */}
    </div>
  );
}
```

### Notes

- Requires styles from `../UI/styles.js`
- Uses Lucide React icons
- Responsive design with different layouts for mobile/desktop

## ProjectCard

### Purpose/Description

A card component that displays project information with animation effects, including image, title, description, and links.

### Props & Parameters

- `project` (object): Required. Contains:
  - `imageUrl` (string): Project image URL
  - `title` (string): Project title
  - `description` (string): Project description
  - `link` (string): Live demo URL
  - `codeLink` (string): GitHub repository URL

### How It Works

- Uses Framer Motion for entrance animations
- Displays project information in a structured card layout
- Provides links to both live demo and GitHub repository
- Responsive image handling with proper styling

### Usage Example

```jsx
import ProjectCard from "./components/ProjectCard";

const projectData = {
  imageUrl: "/path/to/image.jpg",
  title: "My Project",
  description: "A cool project description",
  link: "https://demo.com",
  codeLink: "https://github.com/username/repo",
};

function Projects() {
  return <ProjectCard project={projectData} />;
}
```

### Notes

- Requires Framer Motion for animations
- Uses Lucide React for the GitHub icon
- Styles are imported from `../UI/styles`

## ChatBot

### Purpose/Description

An interactive chatbot component that provides AI-powered responses based on training data.

### Props & Parameters

- `show` (boolean): Controls visibility of the chatbot
- `trainingData` (array): Array of objects containing:
  - `question` (string): Training question
  - `answer` (string): Corresponding answer

### How It Works

- Maintains chat history using React state
- Formats training data for context
- Makes API calls to generate bot responses
- Auto-scrolls to latest messages
- Shows typing indicator during response generation

### Usage Example

```jsx
import ChatBot from "./ChatBot/ChatBot";

const trainingData = [
  {
    question: "What technologies do you use?",
    answer: "I work with React, Node.js, and more!",
  },
];

function App() {
  return <ChatBot show={true} trainingData={trainingData} />;
}
```

### Notes

- Requires environment variable `VITE_API_URL` for API endpoint
- Uses Lucide React for icons
- Implements auto-scrolling behavior
- Handles API errors gracefully
- Filters out training data from visible chat history

## SkillsSection

### Purpose/Description

Displays a list of skills or tools with animations, organized in a grid layout.

### Props & Parameters

- `skills` (array): Required. An array of skill objects, each containing:
  - `name` (string): The name of the skill.
  - `icon` (React component): The icon representing the skill.

### How It Works

- Animates the section title and skill icons using Framer Motion.
- Displays a grid of skill icons with hover effects.
- Includes a `BubbleText` component for a descriptive message.

### Usage Example

```jsx
import SkillsSection from "./components/SkillsSection";

const skills = [
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: NodeIcon },
];

function App() {
  return <SkillsSection skills={skills} />;
}
```

### Notes

- Requires Framer Motion for animations.
- Styles are imported from `../UI/styles`.

## HomeSection

### Purpose/Description

Introduces the user with a welcome message, name, and social media links.

### Props & Parameters

This component does not accept any props.

### How It Works

- Displays a heading with the user's name and a short description.
- Renders social media links with icons.
- Animates the content using Framer Motion.

### Usage Example

```jsx
import HomeSection from "./components/HomeSection";

function App() {
  return <HomeSection />;
}
```

### Notes

- Requires social links data from `../Data/socialLinks.js`.
- Uses Framer Motion for animations.

## Footer

### Purpose/Description

Provides a contact form for users to get in touch and displays footer information.

### Props & Parameters

This component does not accept any props but uses the `useFooterForm` hook, which provides:

- `email` (string): The email address entered by the user.
- `setEmail` (function): Updates the email state.
- `status` (string): The status of the form submission (e.g., "success").
- `handleSubmit` (function): Handles form submission.

### How It Works

- Displays an email input field and a submit button.
- Shows a success message upon successful submission.
- Includes a footer message with credits.

### Usage Example

```jsx
import Footer from "./components/Footer";

function App() {
  return <Footer />;
}
```

### Notes

- Requires the `useFooterForm` hook from `../script/script`.
- Uses Lucide React for icons.

## EduCart

### Purpose/Description

Displays an educational card with year, title, and description, styled with animations.

### Props & Parameters

- `item` (object): Required. Contains:
  - `year` (string): The year of the education.
  - `title` (string): The title of the education.
  - `description` (string, optional): A description of the education.
- `index` (number): Required. The index of the card in the list.

### How It Works

- Alternates the alignment of cards (left or right) based on the index.
- Animates the card using Framer Motion.

### Usage Example

```jsx
import EduCart from "./components/EduCart";

const education = {
  year: "2025",
  title: "Bachelor of Science in Computer Science",
  description: "Focused on software development and algorithms.",
};

function App() {
  return <EduCart item={education} index={0} />;
}
```

### Notes

- Requires Framer Motion for animations.
- Styles are imported from `../UI/styles`.

## BubbleText

### Purpose/Description

Animates text with a bubble effect, where each character appears individually.

### Props & Parameters

- `text` (string): Required. The text to be animated.

### How It Works

- Splits the text into individual characters.
- Animates each character using Framer Motion.
- Replaces spaces with non-breaking spaces for proper alignment.

### Usage Example

```jsx
import BubbleText from "./components/BubbleText";

function App() {
  return <BubbleText text="Hello, World!" />;
}
```

### Notes

- Requires Framer Motion for animations.
- Styles are imported from `../UI/styles`.

## Skill

### Purpose/Description
Renders an individual skill icon and, optionally, the skill's name.

### Props & Parameters
- `skill` (object, required): Contains:
  - `name` (string): The name of the skill.
  - `icon` (React component): An icon component representing the skill.

### How It Works
- Displays the skill icon with styling.
- Intended to be used within a skills list.

### Usage Example
```jsx
import Skill from './components/Skill';

const mySkill = { name: 'React', icon: ReactIcon };

function SkillsList() {
  return <Skill skill={mySkill} />;
}
```

### Notes
- Ensure the `icon` property is a valid React component.
- Style can be customized via CSS or a UI framework.

---

## Project

### Purpose/Description
A container component for displaying project details such as title, description, and links.

### Props & Parameters
- `project` (object, required): Contains:
  - `title` (string): The project's title.
  - `description` (string): A brief description of the project.
  - `imageUrl` (string): URL for the project's image.
  - `link` (string): URL to the live demo.
  - `codeLink` (string): URL to the source code repository.

### How It Works
- Renders project information in a card layout.
- Provides action buttons for live demo and source code access.

### Usage Example
```jsx
import Project from './components/Project';

const myProject = {
  title: 'My Project',
  description: 'A brief description',
  imageUrl: '/path/to/image.jpg',
  link: 'https://example.com',
  codeLink: 'https://github.com/example'
};

function ProjectsSection() {
  return <Project project={myProject} />;
}
```

### Notes
- Make sure all required properties are provided for proper rendering.
- Responsive design is recommended.

---

## ChatMessage

### Purpose/Description
Displays an individual chat message within the chatbot interface.

### Props & Parameters
- `message` (object, required): Contains:
  - `role` (string): The sender's role (e.g., "user" or "model").
  - `text` (string): The content of the message.
  - *(Optional)* `hideInChat` (boolean): If true, the message is hidden from display.

### How It Works
- Renders message text with styling based on the sender's role.
- Meant to be used within a chat history container.

### Usage Example
```jsx
import ChatMessage from './ChatBot/ChatMessage';

const message = { role: 'user', text: 'Hello, world!' };

function ChatInterface() {
  return <ChatMessage message={message} />;
}
```

### Notes
- Conditional styling enhances clarity between user and bot messages.

---

## ChatForm

### Purpose/Description
Provides an input form for users to send messages in the chatbot interface.

### Props & Parameters
- `onSubmit` (function, required): Callback function that handles form submission.

### How It Works
- Renders an input field and a submit button.
- On submission, calls `onSubmit` with the message input.

### Usage Example
```jsx
import ChatForm from './ChatBot/ChatForm';

function ChatInterface() {
  const handleSend = (message) => {
    console.log('Message sent:', message);
  };
  return <ChatForm onSubmit={handleSend} />;
}
```

### Notes
- Ensure proper labeling for accessibility.
- Validate input to avoid submitting empty messages.

---

## Edu

### Purpose/Description
Renders an education card displaying academic details.

### Props & Parameters
- `education` (object, required): Contains:
  - `year` (string): The year of the education achievement.
  - `title` (string): The title or degree obtained.
  - `description` (string, optional): Additional details about the education.

### How It Works
- Displays education information in a styled card layout.
- Leverages animations for smooth presentation.

### Usage Example
```jsx
import Edu from './components/Edu';

const educationDetail = {
  year: '2025',
  title: 'Bachelor of Science in Computer Science',
  description: 'Focused on software development and algorithms.'
};

function EducationSection() {
  return <Edu education={educationDetail} />;
}
```

### Notes
- Requires appropriate styling for a polished look.

---

## App

### Purpose/Description
The main application component that integrates all parts of the portfolio, including navigation, home, skills, projects, education, and chatbot sections.

### Props & Parameters
This component does not accept any props.

### How It Works
- Imports and composes various subcomponents to form the full application layout.
- Acts as the root component for the portfolio application.

### Usage Example
```jsx
import App from './App';

function Root() {
  return <App />;
}
```

### Notes
- Ensure all subcomponents are properly imported and functional.
- Typically serves as the entry point when rendering the app.
