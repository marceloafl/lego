import Image from "next/image";
import "./MenuButton.css";

export default function MenuButton({ isMenuOpen, handleClick }: { isMenuOpen: boolean, handleClick: () => void }) {
  return (
    <button className="lego-button-wrapper" onClick={handleClick}>
      <Image
        src={isMenuOpen ? "/close-icon.svg" : "/lego-button.svg"}
        alt={isMenuOpen ? "Close menu" : "Open menu"}
        width={isMenuOpen ? 48 : 32}
        height={isMenuOpen ? 48 : 32}
        priority
      />
      {!isMenuOpen && <span>Categories</span>}
    </button>
  );
}
