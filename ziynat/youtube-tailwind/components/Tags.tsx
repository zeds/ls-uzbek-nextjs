import React from "react";

export default function Tags() {
  const tagName = [
    { name: "All" },
    { name: "Gaming" },
    { name: "Mixes" },
    { name: "News" },
    { name: "Podcast" },
    { name: "Landscapes" },
    { name: "Manga" },
    { name: "Beauty" },
  ];

  return (
    <div className="tag_container">
      <div className="tag_list">
        {tagName.map((item, index) => (
          <div key={index} className="tag">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
