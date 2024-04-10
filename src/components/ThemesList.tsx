import React from "react";

export interface Theme {
  _id: string;
  v: string[];
}

interface ThemesListProps {
  title: string;
  themes: Theme[];
}

const ThemesList: React.FC<ThemesListProps> = ({ title, themes }) => {
  console.log(themes);
  return (
    <section
      style={{ overflowY: "scroll", height: "100%" }}
      className="hide-scrollbar"
    >
      <h2 className="title">{title}</h2>
      {themes.map((theme, i) => (
        <div key={i}>
          <h4 className="subtitle">{theme._id}</h4>
          {Object.entries(theme.v).map(([k, v]) => (
            <li className="subsubtitle">{v}</li>
          ))}
        </div>
      ))}
      {themes.length === 0 && (
        <p className="na">Please select a theme to view</p>
      )}
    </section>
  );
};

export default ThemesList;
