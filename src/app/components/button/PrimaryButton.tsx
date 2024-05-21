import Image from "next/image";
import "./PrimaryButton.css";

export default function PrimaryButton({ text }: { text: string }) {
  return (
    <button className="primary-button">
      {text}
        <Image
          src="/arrow-right.svg"
          alt={text}
          width={24}
          height={24}
          priority
        />
    </button>
  );
}
