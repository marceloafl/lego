import Image from "next/image";
import "./MenuDrop.css";

const navList = [
  {
    text: "Home",
    img: { src: "/home-icon.svg", alt: "Home", width: 24, height: 24 },
    id: "nav-list-home",
    href: "#",
  },
  {
    text: "Requests",
    img: { src: "/bag-icon.svg", alt: "Requests", width: 24, height: 24 },
    id: "nav-list-requests",
    href: "#",
  },
  {
    text: "Contact us",
    img: { src: "/message-icon.svg", alt: "Contact us", width: 24, height: 24 },
    id: "nav-list-contact",
    href: "#",
  },
];

export default function MenuDrop() {
  return (
    <section>
      <ul className="menu-drop-list">
        {navList.map((item) => (
          <a href={item.href} key={item.id} className="menu-drop-item">
            <Image
              src={item.img.src}
              alt={item.img.alt}
              width={item.img.width}
              height={item.img.height}
              priority
            />
            <p>{item.text}</p>
          </a>
        ))}
      </ul>
    </section>
  );
}
