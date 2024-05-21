"use client";
import Image from "next/image";
import MenuButton from "../menu-button/MenuButton";
import "./Header.css";
import HeaderMenuNav from "./header-menu-nav/HeaderMenuNav";
import { useState } from "react";
import MenuDrop from "../menu-drop/MenuDrop";
import MenuSectionsDrop from "../menu-sections/menu-section-drop/MenuSectionsDrop";
import MenuImages from "../menu-images/MenuImages";
import MenuSectionsDesktop from "../menu-sections/MenuSectionsDesktop";

export default function Header({
  isMenuOpen,
  handleClick,
}: {
  isMenuOpen: boolean;
  handleClick: () => void;
}) {
  return (
    <header className="header">
      <div
        className={`header-menu-wrapper ${
          isMenuOpen ? "header-menu-wrapper-open" : ""
        }`}
      >
        <div className="menu-actions-wrapper">
          <div className="logo-image-wrapper">
            <Image
              src="/lego-logo.svg"
              alt="Lego logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <MenuButton isMenuOpen={isMenuOpen} handleClick={handleClick} />
        </div>
        {!isMenuOpen && (
          <div className="header-menu-closed-wrapper">
            <MenuSectionsDesktop />
            <HeaderMenuNav />
          </div>
        )}
      </div>
      {isMenuOpen && (
        <section className="menu-wrapper">
          <div className="menu-list-wrapper">
            <MenuDrop />
            <MenuSectionsDrop />
          </div>
          <MenuImages />
        </section>
      )}
    </header>
  );
}
