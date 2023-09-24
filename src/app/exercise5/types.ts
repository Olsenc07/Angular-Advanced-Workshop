export interface Country {
  description: string;
  id: string;
}

export interface State {
  id: number;
  code: string;
  countryCode: string;
  description: string;
}

export interface CombinedOption {
  description: string;
}