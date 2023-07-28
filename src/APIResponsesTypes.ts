export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export type Pet = {
  id: number;
  name: string;
  animal: Animal;
  breed: string;
  images: string[];
  city: string;
  state: string;
  description: string;
};

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}

export type BreedListAPIResponse = {
  animal: Animal;
  breeds: string[];
};
