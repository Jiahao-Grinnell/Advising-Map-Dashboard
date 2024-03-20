import React from "react";

interface Theme {
  _id: string;
  v: string[];
}

interface ThemesListProps {
  themes: Theme[];
}

const ThemesList: React.FC<ThemesListProps> = ({ themes }) => {
  return (
    <section
      style={{ overflowY: "scroll", height: "100%" }}
      className="hide-scrollbar"
    >
      <h2 className="title">Themes</h2>
      {themes.map((theme, i) => (
        <div key={i}>
          <h4 className="subtitle">{theme._id}</h4>
          {Object.entries(theme.v).map(([k, v]) => (
            <li className="subsubtitle">{k}.</li>
          ))}
        </div>
      ))}
      {themes.length === 0 && (
        <p className="na">Please select a theme (pie chart on the left)</p>
      )}
    </section>
  );
};

export default ThemesList;
