export default function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      aria-pressed={active}
      className={`rounded-full px-4 py-2 text-sm transition-all duration-300 md:text-base ${
        active
          ? "bg-purple-600 text-white shadow-lg"
          : "bg-white/50 backdrop-blur-sm dark:bg-slate-800/50"
      }`}
    >
      {label}
    </button>
  );
}
