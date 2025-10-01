const StyleGuide = {
  theme: {
    gradientText:
      "bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent",
    mainBg:
      "bg-neutral-100 font-sans text-neutral-800 transition-colors duration-500 dark:bg-[#0a0a1a] dark:text-neutral-300",
    animatedBg:
      "animate-gradient-x absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600",
    overlayBg: "fixed inset-0 z-0 opacity-20 dark:opacity-30",
  },

  // Reusable styles for text elements like headings and paragraphs.
  typography: {
    h1: "text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl text-neutral-900 dark:text-white",
    h3: "mb-2 text-xl font-bold text-neutral-900 dark:text-neutral-100",
    sectionTitle:
      "text-center text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-neutral-100",
    paragraph:
      "mx-auto max-w-2xl text-lg text-neutral-700 md:text-xl dark:text-neutral-400",
    logo: "bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-2xl font-bold tracking-tighter text-transparent",
    anchor:
      "text-neutral-500 hover:text-fuchsia-500 transition-colors dark:text-neutral-400 dark:hover:text-pink-400 z-50",
  },

  // A collection of button styles for different variants.
  buttons: {
    base: "flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-lg",
    gradient:
      "rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 px-8 py-3 font-bold text-white transition-transform hover:scale-105 hover:shadow-lg",
    transparent:
      "font-medium rounded-full px-5 py-2 text-sm text-neutral-800 dark:text-neutral-200 transition-all duration-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 backdrop-blur-md md:text-base",
    botToggle:
      "rounded-full fixed right-5 bottom-5 z-[1100] cursor-pointer p-[14px] text-white transition-transform duration-300 ease-in-out hover:scale-140",
  },

  // Styles for card-like elements and other surfaces.
  surfaces: {
    cardBase:
      "rounded-2xl border border-white/10 bg-white/40 shadow-xl backdrop-blur-md dark:bg-neutral-900/60",
    header:
      "fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-white/40 backdrop-blur-lg shadow-sm transition-all duration-300 dark:bg-neutral-900/70",
    mobileMenu:
      "top-16 left-0 flex w-full flex-row gap-2 rounded-b-xl border-t border-white/5 bg-transparent p-4 shadow-2xl backdrop-blur-md md:hidden",
    chatBot:
      "fixed right-5 bottom-2 flex w-[300px] max-w-md flex-col rounded-lg border border-white/10 bg-white/30 shadow-2xl backdrop-blur-md",
  },

  // Common styles for form inputs.
  forms: {
    inputBase:
      "w-full rounded-lg border border-neutral-600 bg-neutral-900/80 px-4 py-4 text-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-fuchsia-400 focus:outline-none",
  },

  // Layout and container styles for structuring pages and components.
  layout: {
    section: "container mx-auto max-w-7xl py-16 text-center",
    sectionContainer:
      "container mx-auto flex h-16 items-center justify-between px-5 sm:px-6 lg:px-8",
    home: "flex min-h-screen items-center justify-center px-4 text-center space-y-6",
    footer: "flex min-h-screen items-center justify-center flex-col px-6 py-12",
    filterButtons: "mb-12 flex flex-wrap justify-center gap-3 md:gap-4",
    socialLinks: "flex justify-center space-x-6 ",
    skillGrid:
      "mx-auto grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4",
    projectGrid: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
  },

  // Navigation-specific styles.
  navigation: {
    desktopContainer: "hidden h-full items-center space-x-8 md:flex font-bold",
    desktopLink:
      "p-7 font-bold text-xl text-neutral-700 hover:text-fuchsia-500 dark:text-neutral-300 dark:hover:text-pink-400 transition-colors",
    mobileLink:
      "block w-full rounded-md px-3 py-2 text-left text-base text-neutral-700 hover:bg-neutral-200/20 dark:hover:bg-neutral-800/20",
  },

  // Miscellaneous and component-specific styles.
  components: {
    image:
      "h-48 w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105",
    successMessage:
      "flex items-center justify-center gap-2 py-4 text-lg font-medium text-green-400",
    bubbleText:
      "inline-block cursor-pointer rounded px-0.5 transition-transform duration-300 hover:scale-125 hover:text-fuchsia-100 hover:drop-shadow-[0_0_15px_rgba(217,70,239,0.9)]",
    chatHistory:
      "hide-scrollbar flex h-[300px] flex-col gap-2 overflow-y-auto p-4",
    chatHeader:
      "flex items-center justify-between px-4 py-2 text-lg font-bold text-white",
    chatUserMessage:
      "flex items-center justify-between text-lg font-bold text-black flex-shrink-0",
  },
};

// Typography
export const FakhirAhmedKhan = `block ${StyleGuide.theme.gradientText}`;
export const SectionTitle = StyleGuide.typography.sectionTitle;
export const HeadingH1 = StyleGuide.typography.h1;
export const Paragraph = StyleGuide.typography.paragraph;
export const LogoText = StyleGuide.typography.logo;
export const GradientName = `block ${StyleGuide.theme.gradientText}`;
export const H3 = StyleGuide.typography.h3;
export const AnchorTag = StyleGuide.typography.anchor;
export const FooterMessageStyle = `${StyleGuide.typography.paragraph} mt-8 text-center text-sm text-gray-400`;

// Buttons
export const base = StyleGuide.buttons.transparent;
export const ButtonBase = StyleGuide.buttons.base;
export const GradientButton = StyleGuide.buttons.gradient;
export const TransparentButton = StyleGuide.buttons.transparent;
export const BotToggleButton = StyleGuide.buttons.botToggle;
export const styles = {
  base: "rounded-full px-4 py-2 text-sm transition-all duration-300 md:text-base",
  active: "bg-fuchsia-600 text-white shadow-lg",
  inactive: "bg-white/50 backdrop-blur-sm dark:bg-neutral-800/50",
};

// Surfaces & Cards
export const ProjectCardStyle = `${StyleGuide.surfaces.cardBase} flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]`;
export const EduCartStyle = `${StyleGuide.surfaces.cardBase} p-6`;
export const Header = StyleGuide.surfaces.header;
export const IsMenuOpenStyle = StyleGuide.surfaces.mobileMenu;
export const ChatBotStyle = StyleGuide.surfaces.chatBot;

// Layout & Containers
export const HomeStyle = StyleGuide.layout.home;
export const FooterStyle = StyleGuide.layout.footer;
export const ProjectFilterStyle = StyleGuide.layout.filterButtons;
export const SkillDivStyle = StyleGuide.layout.skillGrid;
export const projectDivStyle = StyleGuide.layout.projectGrid;
export const sectionSkills = StyleGuide.layout.section;
export const socialLinksDiv = StyleGuide.layout.socialLinks;
export const HeaderDiv = StyleGuide.layout.sectionContainer;

// Background & Theme
export const MainBGColor = StyleGuide.theme.mainBg;
export const MainBGColorSecondary = StyleGuide.theme.overlayBg;
export const MainBGColorTertiary = StyleGuide.theme.animatedBg;

// Navigation
export const DesktopNav = StyleGuide.navigation.desktopLink;
export const MobileNav = StyleGuide.navigation.mobileLink;
export const DivNav = StyleGuide.navigation.desktopContainer;

// Miscellaneous & Component-specific
export const ImgStyle = StyleGuide.components.image;
export const SuccessStyle = StyleGuide.components.successMessage;
export const InputBase = StyleGuide.forms.inputBase;
export const BubbleBase = StyleGuide.components.bubbleText;
export const refStyle = StyleGuide.components.chatHistory;
export const botSpanStyle = StyleGuide.components.chatHeader;
export const UserMessageStyle = StyleGuide.components.chatUserMessage;

// Framer Motion Animation Variants (function remains unchanged)
export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});
// Motion variants
export const EducontainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

export const EduitemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};
// Framer Motion variants
export const HeadmenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.05 },
  },
};

export const HeaditemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};
export const SkillcontainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 12 },
  },
};
