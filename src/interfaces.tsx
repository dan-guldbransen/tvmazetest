export interface IShow {
  score: number;
  show: {
    id: number;
    name: string;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    genres: string[];
    officialSite: string;
    rating: {
      average: number;
    };
    premiered: string;
    language: string;
    network: {
      name: string;
    };
  };
}

export interface ICard {
  score: number;
  show: {
    id: number;
    name: string;
    rating: {
      average: number;
    };
    image: {
      medium: string;
    };
  };
}

export interface ICardList {
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  shows: {
    score: number;
    show: {
      id: number;
      name: string;
      rating: {
        average: number;
      };
      image: {
        medium: string;
      };
    };
  }[];
}

export interface ISearchBox {
  placeholder?: string;
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IShowDetails {
  shows: {
    id: number;
    name: string;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    genres: string[];
    officialSite: string;
    rating: {
      average: number;
    };
    premiered: string;
    language: string;
    network: {
      name: string;
    };
  }[];
}
