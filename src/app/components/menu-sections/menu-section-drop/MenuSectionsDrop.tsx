import "./MenuSectionsDrop.css";

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

export default function MenuSectionsDrop() {
  return (
    <section className="section-themes">
      <div className="section-title-wrapper">
        <div className="section-title-decorator"></div>
        <p className="section-title-themes">Themes</p>
      </div>
      <ul className="menu-drop-section-list">
        {menuList.map((item) => (
          <li key={item.id} className="menu-drop-section-item">
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
