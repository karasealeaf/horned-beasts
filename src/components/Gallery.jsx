import Hornedbeasts from "../components/Hornedbeasts";
import beastArr from "../data";

export default function Gallery() {
  return (
    <>
      <div className="beasties">
        {beastArr.map((beast) => {
          return (
            <Hornedbeasts
              id={beast._id}
              image={beast.image_url}
              description={beast.description}
              title={beast.title}
            />
          );
        })}
      </div>
    </>
  );
}
