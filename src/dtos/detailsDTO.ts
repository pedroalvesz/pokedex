export type detailsDTO = {
  name: string;
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
  };
  abilities: {
    0: {
      ability: {
        name: string;
      }
    },
    1?: {
      ability?: {
        name?: string
      }
    }
  };
  height: number,
  weight: number,
  flavor_text_entries: {
    15: {
      flavor_text: string;
    }
  };
}