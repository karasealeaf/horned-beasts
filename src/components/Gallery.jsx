import Hornedbeasts from "./Hornedbeasts";
import data from "./data.json";

export default function Gallery() {
  return (
    <>
      <div className="beasties">
        {data.map((beast) => {
          return (
            <Hornedbeasts
              key={beast._id}
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
            />
          );
        })}
      </div>
    </>
  );
}
