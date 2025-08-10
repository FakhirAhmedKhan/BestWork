import { mobile, base, desktop } from "../UI/styles.js";

export default function NavButton({ item, onClick, isMobile }) {
  return (
    <button
      onClick={() => onClick(item)}
      className={`${base} ${isMobile ? mobile : desktop}`}
    >
      {item}
    </button>
  );
}
