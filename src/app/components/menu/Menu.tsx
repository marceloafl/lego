import Header from "../header/Header";

export default function Menu ({isMenuOpen, handleClick}: {isMenuOpen: boolean, handleClick: () => void}) {
  return (
    <section>
      <Header isMenuOpen={isMenuOpen} handleClick={handleClick} />
    </section>
  );
}
