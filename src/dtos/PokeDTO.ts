export interface PokeDTO {
  data: {
    name: string;
    id: string;
    url: string;
    sprites: {
      front_default: string;
    }
    types: {
      0: {
        type: {
          name: string;
        }
      }
      1?: {
        type?: {
          name?: string;
        }
      }
    }
  }
}