const NavButtons = ({ style, scrollToSection }) => {
  const navItems = ["🏠", "👨🏻‍💻", "🛠️", "🚊", "📧"];
  return (
    <>
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item)}
          className={style}
          name={item}
        >
          {item}
        </button>
      ))}
    </>
  );
};
export default NavButtons;
