export default function Gallery(props) {
  return (
    <div className="galleryImages">
      <h2 className="galleryTitle">{props.title}</h2>
      <img src="./images" alt="{props.desc}" className="galleryImage" />
      <p className="galleryDesc">{props.desc}</p>
    </div>
  );
}
