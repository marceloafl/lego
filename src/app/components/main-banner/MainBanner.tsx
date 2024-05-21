import Image from "next/image";
import "./MainBanner.css";
import { PageTitleDesktop } from "../page-title/PageTitle";

export default function MainBanner() {
  return (
    <section className="main-banner">
      <p className="main-banner-text">{"<video autoplay with no sound>"}</p>
      <div className="main-banner-content-wrapper">
        <PageTitleDesktop />
        <div className="video-button-wrapper">
          <button className="video-button video-sound-button">
            <Image
              src="/sound-icon.svg"
              alt="Video sound"
              width={26}
              height={26}
              priority
            />
          </button>
          <button className="video-button video-download-button">
            <Image
              src="/download-icon.svg"
              alt="Download video"
              width={30}
              height={30}
              priority
            />
          </button>
        </div>
      </div>
      <div className="scroll-down-wrapper">
        <p>Scroll down</p>
        <Image
          src="/scroll-down.svg"
          alt="Scroll down"
          width={26}
          height={26}
          priority
        />
      </div>
    </section>
  );
}
