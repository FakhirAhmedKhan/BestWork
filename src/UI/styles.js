export const FakhirAhmedKhan =
  "block bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent";
export const base =
  "font-medium rounded-full px-5 py-2 text-sm text-neutral-800 dark:text-neutral-200 transition-all duration-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 backdrop-blur-md md:text-base";
export const DarkCard = "dark:bg-neutral-900/70 backdrop-blur-lg";
export const DarkText = "dark:text-neutral-300";
export const DarkTextSecondary = "dark:text-neutral-400";
export const DarkBgOverlay = "dark:bg-black/50 backdrop-blur-md";
export const DarkBgSecondary = "dark:bg-neutral-950/90";
export const HoverLift =
  "transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]";
export const HoverZoom =
  "transition-transform duration-500 group-hover:scale-105";
export const SectionTitle =
  "text-center text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-neutral-100";
export const HeadingH1 =
  "text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl text-neutral-900 dark:text-white";
export const Paragraph =
  "mx-auto max-w-2xl text-lg text-neutral-700 md:text-xl dark:text-neutral-400";
export const LogoText =
  "bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-2xl font-bold tracking-tighter text-transparent";
export const GradientName =
  "block bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent";
export const H3 =
  "mb-2 text-xl font-bold text-neutral-900 dark:text-neutral-100";
export const AnchorTag =
  "text-neutral-500 hover:text-fuchsia-500 transition-colors dark:text-neutral-400 dark:hover:text-pink-400";
export const ButtonBase =
  "flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-lg";
export const GradientButton =
  "rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 px-8 py-3 font-bold text-white transition-transform hover:scale-105 hover:shadow-lg";
export const TransparentButton =
  "font-medium rounded-full px-5 py-2 text-sm text-neutral-800 dark:text-neutral-200 transition-all duration-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 md:text-base";
export const BotToggleButton =
  "rounded-full fixed right-5 bottom-5 z-[1100] cursor-pointer p-[14px] text-white transition-transform duration-300 ease-in-out hover:scale-140";
export const CardBase = `flex flex-col overflow-hidden rounded-2xl border border-white/10 shadow-lg backdrop-blur-lg ${HoverLift} bg-white/40 dark:bg-neutral-900/60`;
export const ProjectCardStyle = `group ${CardBase}`;
export const EduCartStyle =
  "rounded-2xl border border-white/10 bg-white/40 p-6 shadow-xl backdrop-blur-md dark:bg-neutral-900/60";
export const ImgStyle = `h-48 w-full object-cover rounded-xl ${HoverZoom}`;
export const Header =
  "fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-white/40 backdrop-blur-lg shadow-sm transition-all duration-300 dark:bg-neutral-900/70";
export const DesktopNav =
  "p-7 font-bold text-xl text-neutral-700 hover:text-fuchsia-500 dark:text-neutral-300 dark:hover:text-pink-400 transition-colors";
export const MobileNav =
  "block w-full rounded-md px-3 py-2 text-left text-base text-neutral-700 hover:bg-neutral-200/20 dark:hover:bg-neutral-800/20";
export const IsMenuOpenStyle =
  "top-16 left-0 flex w-full flex-row gap-2 rounded-b-xl border-t border-white/5 bg-transparent p-4 shadow-2xl backdrop-blur-md md:hidden";
export const HomeStyle =
  "flex min-h-screen items-center justify-center px-4 text-center space-y-6";
export const MainBGColor =
  "bg-neutral-100 font-sans text-neutral-800 transition-colors duration-500 dark:bg-[#0a0a1a] dark:text-neutral-300";
export const MainBGColorSecondary =
  "fixed inset-0 z-0 opacity-20 dark:opacity-30";
export const MainBGColorTertiary =
  "animate-gradient-x absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600";
export const SuccessStyle =
  "flex items-center justify-center gap-2 py-4 text-lg font-medium text-green-400";
export const FooterStyle =
  "flex min-h-screen items-center justify-center flex-col px-6 py-12";
export const ProjectFilterStyle =
  "mb-12 flex flex-wrap justify-center gap-3 md:gap-4";
export const InputBase =
  "w-full rounded-lg border border-neutral-600 bg-neutral-900/80 px-4 py-4 text-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-fuchsia-400 focus:outline-none";
export const ChatBotStyle =
  "fixed right-5 bottom-2 flex w-[300px] max-w-md flex-col rounded-lg border border-white/10 bg-white/30 shadow-2xl backdrop-blur-md";
export const styles = {
  base: "rounded-full px-4 py-2 text-sm transition-all duration-300 md:text-base",
  active: "bg-fuchsia-600 text-white shadow-lg",
  inactive: "bg-white/50 backdrop-blur-sm dark:bg-neutral-800/50",
};
export const SkillDivStyle =
  "mx-auto grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4";
export const projectDivStyle = "grid gap-8 md:grid-cols-2 lg:grid-cols-3";
export const sectionSkills = "container mx-auto max-w-7xl py-16 text-center";
export const socialLinksDiv = "flex justify-center space-x-6";
export const HoverGlow =
  "transition-transform duration-300 hover:scale-125 hover:text-fuchsia-100 hover:drop-shadow-[0_0_15px_rgba(217,70,239,0.9)]";
export const BubbleBase = `inline-block cursor-pointer rounded px-0.5 ${HoverGlow}`;
export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});
export const HeaderDiv =
  "container mx-auto flex h-16 items-center justify-between px-5 sm:px-6 lg:px-8";
export const DivNav = "hidden h-full items-center space-x-8 md:flex font-bold";
export const refStyle =
  "hide-scrollbar flex h-[300px] flex-col gap-2 overflow-y-auto p-4";
export const botSpanStyle =
  "flex items-center justify-between px-4 py-2 text-lg font-bold text-white";
export const UserMessageStyle =
  "flex items-center justify-between text-lg font-bold text-black flex-shrink-0";
