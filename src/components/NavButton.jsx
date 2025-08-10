import { MobileNav, base, DesktopNav } from "../UI/styles.js";

export default function NavButton({ item, onClick, isMobile }) {
  return (
    <button
      onClick={() => onClick(item)}
      className={`${base} ${isMobile ? MobileNav : DesktopNav}`}
    >
      {item}
    </button>
  );
}
