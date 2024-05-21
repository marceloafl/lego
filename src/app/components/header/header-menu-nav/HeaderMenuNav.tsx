import Image from "next/image";
import "./HeaderMenuNav.css";

export default function HeaderMenuNav() {
  return (
    <div className="header-menu-nav-wrapper">
      <div className="item-menu-wrapper item-menu-contact">
        <Image
          src="/contact-icon.svg"
          alt="Contact"
          width={18}
          height={18}
          priority
        />
        <p>Contact us</p>
      </div>
      <div className="item-menu-wrapper">
        <Image
          src="/search-icon.svg"
          alt="Search"
          width={19}
          height={19}
          priority
        />
        <p>Search</p>
      </div>
      <div className="item-menu-wrapper">
        <Image
          src="/request-icon.svg"
          alt="Request"
          width={18}
          height={20}
          priority
        />
        <p>Request</p>
      </div>
    </div>
  );
}
