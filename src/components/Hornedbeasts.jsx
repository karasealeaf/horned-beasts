import { useState } from "react";

export default function Hornedbeasts({ title, image_url, description }) {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <h2>{title}</h2>
      <img src={image_url} alt={title} onClick={handleLikes} />
      <span>❤️{likes}</span>
      <p>{description}</p>
    </div>
  );
}
