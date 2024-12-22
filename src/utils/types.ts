export enum Sections {
  TRANSLATE = "Translate",
  DICTIONARY = "Dictionary",
  CHAT = "Chat",
}

export interface Option {
  label: string;
  value: string;
}

export interface Translate {
  from: Option[];
  to: Option[];
}

export interface Dictionary {
  language: Option[];
}

export interface Execute {
  command: string;
  output?: string;
  section: Sections;
  info: Translate | Dictionary;
}

export interface Inputs {
  search: string;
  section: Sections;
  translateFilterFrom: string;
  translateFilterTo: string | string[];
  dictionaryFilter: string;
}
