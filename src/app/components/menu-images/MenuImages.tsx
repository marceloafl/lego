import Image from "next/image";
import "./MenuImages.css";

const navList = [
  {
    img: { src: "/themes-images/architecture.png", alt: "Architecture", width: 80, height: 80 },
    id: "theme-acrchitecture",
  },
  {
    img: { src: "/themes-images/city.png", alt: "City", width: 80, height: 80 },
    id: "theme-city",
  },
  {
    img: { src: "/themes-images/creator.png", alt: "Creator", width: 80, height: 80 },
    id: "natheme-creator",
  },
  {
    img: { src: "/themes-images/dots.png", alt: "Dots", width: 80, height: 80 },
    id: "natheme-creator",
  },
  {
    img: { src: "/themes-images/duplo.png", alt: "Duplo", width: 80, height: 80 },
    id: "natheme-creator",
  },
  {
    img: { src: "/themes-images/friends.png", alt: "Friends", width: 80, height: 80 },
    id: "natheme-creator",
  },
  {
    img: { src: "/themes-images/ideas.png", alt: "Ideas", width: 80, height: 80 },
    id: "natheme-creator",
  },
  {
    img: { src: "/themes-images/mini-figures.png", alt: "MiniFigures", width: 80, height: 80 },
    id: "natheme-mini-figures",
  },
  {
    img: { src: "/themes-images/technic.png", alt: "Technic", width: 80, height: 80 },
    id: "natheme-creator",
  },
];

export default function MenuImages() {
  return (
    <section className="menu-images-section">
      <ul className="menu-images-list">
        {navList.map((item) => (
          <div key={item.id}  className="menu-images-item">
            <Image
              src={item.img.src}
              alt={item.img.alt}
              width={item.img.width}
              height={item.img.height}
              priority
            />
          </div>
        ))}
      </ul>
    </section>
  );
}
