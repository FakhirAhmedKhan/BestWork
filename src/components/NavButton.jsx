import { mobile, base, desktop } from "../UI/styles.js";

export default function NavButton({ item, onClick, isMobile }) {
  return (
    <button
      onClick={() => onClick(item)}
      className={`${base} hover:bg-gray-100" rounded-full bg-transparent px-4 py-2 text-sm text-gray-900 transition-all duration-300 md:text-base ${isMobile ? mobile : desktop}`}
    >
      {item}
    </button>
  );
}
