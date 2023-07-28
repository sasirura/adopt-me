import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "loren",
    breed: "beagle",
    images: [],
    city: "seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
