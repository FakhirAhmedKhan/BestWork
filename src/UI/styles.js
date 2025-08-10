export const FakhirAhmedKhan =
  "block bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent";
export const base =
  "font-medium transition-colors hover:bg-gray-100 rounded-full bg-transparent px-4 py-2 text-sm text-gray-900 transition-all duration-300 md:text-base";

// 🎨 Theme Helpers
export const DarkCard = "dark:bg-slate-800/50";
export const DarkText = "dark:text-slate-300";
export const DarkTextSecondary = "dark:text-slate-400";
export const DarkBgOverlay = "dark:bg-black/30";
export const DarkBgSecondary = "dark:bg-slate-900/90";

// ✨ Animation Helpers
export const HoverLift =
  "transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl";
export const HoverZoom =
  "transition-transform duration-500 group-hover:scale-110";
export const HoverGlow =
  "transition-all duration-300 hover:scale-150 hover:bg-indigo-500/10 hover:text-indigo-100 hover:drop-shadow-[0_0_12px_rgba(199,210,254,0.9)]";

// 📏 Layout Helpers
export const CenterScreen = "flex min-h-screen items-center justify-center";
export const FlexCenter = "flex items-center justify-center";
export const RoundedLg = "rounded-lg";
export const RoundedXl = "rounded-xl";
export const RoundedFull = "rounded-full";

// 🖋 Typography
export const SectionTitle =
  "text-center text-3xl sm:text-4xl font-bold tracking-tight mb-6";
export const HeadingH1 =
  "text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl";
export const Paragraph = `mx-auto max-w-2xl text-lg text-slate-600 md:text-xl ${DarkTextSecondary}`;
export const LogoText =
  "bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-2xl font-bold tracking-tighter text-transparent";
export const GradientName =
  "block bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent";
export const H3 = "mb-2 text-xl font-bold";
export const AnchorTag = `text-slate-500 transition-colors hover:text-purple-500 ${DarkText} dark:hover:text-pink-400`;

// 🔘 Buttons
export const ButtonBase = `${FlexCenter} gap-2 ${RoundedLg} font-semibold transition-all duration-200`;
export const GradientButton = `${RoundedFull} bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-bold text-white transition-transform hover:scale-105`;
export const TransparentButton =
  "font-medium transition-colors hover:bg-gray-100 rounded-full bg-transparent px-4 py-2 text-sm text-gray-900 md:text-base transition-all duration-300";
export const BotToggleButton = `${RoundedFull} fixed right-5 bottom-5 z-[1100] cursor-pointer p-[14px] text-white transition-transform duration-300 ease-in-out hover:scale-110`;

// 🗂 Cards
export const CardBase = `flex flex-col overflow-hidden ${RoundedXl} border border-white/10 shadow-lg backdrop-blur-lg ${HoverLift}`;
export const ProjectCardStyle = `group ${CardBase} bg-white/20 ${DarkCard}`;
export const EduCartStyle = `${RoundedXl} border border-white/10 bg-white/20 p-6 shadow-xl backdrop-blur-md ${DarkCard}`;
export const ImgStyle = `h-48 w-full object-cover ${HoverZoom}`;

// 📌 Special Elements
export const BubbleBase = `inline-block cursor-pointer rounded px-0.5 ${HoverGlow}`;
export const EduCartLineStyle =
  "absolute left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 to-pink-500 h-[80rem] lg:h-[64.5rem]";
export const EduCartRoundStyle = `absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-purple-500 bg-white sm:block dark:bg-slate-900`;

// 🖥 Header & Navigation
export const Header = `fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-white/30 backdrop-blur-lg transition-all duration-300 ${DarkBgOverlay}`;
export const DesktopNav = `text-lg text-slate-600 hover:text-purple-500 ${DarkText} dark:hover:text-pink-400`;
export const MobileNav = `block w-full rounded-md px-3 py-2 text-left text-base text-slate-600 hover:bg-slate-200 ${DarkText} dark:hover:bg-slate-700`;
export const IsMenuOpenStyle = `top-16 left-0 flex w-full flex-row gap-2 rounded-b-xl border-t border-white/10 bg-white/90 p-4 shadow-2xl backdrop-blur-md md:hidden ${DarkBgSecondary}`;

// 🏠 Sections & Backgrounds
export const HomeStyle = `${CenterScreen} px-4 text-center`;
export const MainBGColor = `bg-slate-100 font-sans text-slate-800 transition-colors duration-500 dark:bg-[#0a0a1a] ${DarkText}`;
export const MainBGColorSecondary =
  "fixed inset-0 z-0 opacity-20 dark:opacity-30";
export const MainBGColorTertiary =
  "animate-gradient-x absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600";

// ✅ Misc
export const SuccessStyle = `${FlexCenter} gap-2 py-4 text-lg font-medium text-green-300`;
export const FooterStyle = `${CenterScreen} flex-col px-6 py-12`;
export const ProjectFilterStyle =
  "mb-12 flex flex-wrap justify-center gap-2 md:gap-4";
export const InputBase =
  "w-full rounded-lg border border-gray-600 bg-gray-800 bg-opacity-60 px-4 py-4 text-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none";
