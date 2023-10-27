import Hornedbeasts from "./Hornedbeasts";


export default function Gallery({ data, handleShowModal, horns }) {
  const filteredHorns = data.filter(
    (beast) => beast.horns == horns || horns === ""
  );
  return (
    <>
      <div className="beasties">
        {filteredHorns.map((beast) => {
          return (
            <Hornedbeasts
              key={beast._id}
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              handleShowModal={handleShowModal}
            />
          );
        })}
      </div>
    </>
  );
}
