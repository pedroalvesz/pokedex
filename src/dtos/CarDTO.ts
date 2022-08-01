export interface CarDTO {
  id: string;
  name: string
  url: string
  types: {
    type: {
      name: string
    }
  }
}