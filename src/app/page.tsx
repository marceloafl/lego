"use client";

import { useState } from "react";
import Footer from "./components/footer/Footer";
import MainBanner from "./components/main-banner/MainBanner";
import Menu from "./components/menu/Menu";
import { PageTitleMobile } from "./components/page-title/PageTitle";
import Section from "./components/section/Section";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <main>
        <Menu isMenuOpen={isMenuOpen} handleClick={handleClick} />
        {!isMenuOpen && (
          <>
            <MainBanner />
            <PageTitleMobile />
            <Section
              title="Gifting"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              borderColor="orange"
              cards={[
                {
                  img: {
                    src: "/card-images/gifting-toy.png",
                    alt: "Gifting Toy",
                  },
                  cardTitle:
                    "Toys perfect for birthday gift-giving season in Spring",
                  cardText:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
                  id: "gift-toys",
                },
                {
                  img: {
                    src: "/card-images/gifting-mom.png",
                    alt: "Gifts for Mom",
                  },
                  cardTitle: "Gifts for Mom",
                  cardText:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
                  id: "gift-mom",
                },
              ]}
            />
            <Section
              title="Travel"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              borderColor="green"
              cards={[
                {
                  img: { src: "/card-images/travel-first.png", alt: "Travel" },
                  cardTitle:
                    "Travel the world no matter where you are. No Passport needed.",
                  cardText:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
                  id: "travel-first",
                },
                {
                  img: { src: "/card-images/travel-second.png", alt: "Travel" },
                  cardTitle:
                    "Fun accessories to take with you on your travels or keep kids entertained",
                  cardText:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
                  id: "travel-second",
                },
              ]}
            />
            <Section
              title="Adults Welcome"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              borderColor="blue"
              cards={[
                {
                  img: {
                    src: "/card-images/adults-welcome.png",
                    alt: "Travel",
                  },
                  cardTitle:
                    "For the Kids at Heart who love to unplug, unbox and unwind",
                  cardText:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
                  id: "adults-welcome",
                },
              ]}
            />
          </>
        )}
      </main>
      {!isMenuOpen && <Footer />}
    </>
  );
}
