export interface IGigPricing {
    basic: {
      price: number;
      time: string;
    };
    standerd: {
      price: number;
      time: string;
    };
    premium: {
      price: number;
      time: string;
    };
  }

export interface IGig {
    _id: string;
    gigName: string;
    gigCategory: string;
    gigDescription: string;
    gigPricing: IGigPricing;
    gigImages: [string];
    gigSearchTags: string;
    isBlock?: boolean;
    isActive?: boolean;
}