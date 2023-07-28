import { QueryStatus } from "@tanstack/react-query";
import { useGetBreedsQuery } from "./petAPIService";
import { Animal } from "./APIResponsesTypes";

export default function useBreedList(animal: Animal) {
  const {data: breeds, isLoading} = useGetBreedsQuery(animal, {
    skip: !animal
  })

  if(!animal) {
    return [[], 'loaded']
  }

  return [breeds ?? [], isLoading ? 'loading' : 'loaded'] as [
    string[],
    QueryStatus
  ];
}
