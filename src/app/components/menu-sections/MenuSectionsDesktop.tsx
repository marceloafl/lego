import "./MenuSectionsDesktop.css";

const menuList = [
  { name: "Gifting", id: "gifting" },
  { name: "Travel", id: "travel" },
  { name: "Adults Welcome", id: "adults-welcome" },
  { name: "Art & Home Décor", id: "art-home-decor" },
  { name: "Space", id: "space" },
  { name: "Pop Culture", id: "pop-culture" },
  { name: "Toddlers", id: "toddlers" },
  { name: "Real World Role Playing", id: "real-world-role-playing" },
];

export default function MenuSectionsDesktop() {
  return (
    <>
      <ul className="menu-section-desktop-list">
        {menuList.map((item) => (
          <li key={item.id} className="menu-section-desktop-item">
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
