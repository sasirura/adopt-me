import { Link } from "react-router-dom";
import { Animal } from "./APIResponsesTypes";

type PetProps = {
  name: string;
  animal: Animal;
  breed: string;
  image: string[];
  location: string;
  id: number;
};

const Pet = (props: PetProps) => {
  const { name, animal, breed, image, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (image && image.length) {
    hero = image[0];
  }
  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="image-container">
        <img data-testid="thumbnail" src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
