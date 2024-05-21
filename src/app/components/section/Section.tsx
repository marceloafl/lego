import Image from "next/image";
import "./Section.css";
import PrimaryButton from "../button/PrimaryButton";

export type CardType = {
  img: { src: string; alt: string };
  cardTitle: string;
  cardText: string;
  id: string;
};

interface ISection {
  title: string;
  subTitle: string;
  cards: CardType[];
  borderColor: "orange" | "green" | "blue";
}

export default function Section({
  title,
  subTitle,
  cards,
  borderColor,
}: ISection) {
  const isEven = (index: number) => index % 2 === 0;
  return (
    <section className="section">
      <h3 className="section-title">{title}</h3>
      <div className={`section-wrapper border-${borderColor}`}>
        <p className="card-subtitle">{subTitle}</p>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card-wrapper ${
              isEven(index) ? "card-wrapper-even" : "card-wrapper-odd"
            }`}
          >
            <div className="card-image-wrapper">
              <Image src={card.img.src} alt={card.img.alt} fill priority />
            </div>
            <div className={`card-content-wrapper ${
              isEven(index) ? "card-content-wrapper-even" : "card-content-wrapper-odd"
            }`}>
              <h4 className="card-title">{card.cardTitle}</h4>
              <p className="card-text">{card.cardText}</p>
              <PrimaryButton text="View details" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
