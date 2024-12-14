export enum Sections {
  Translate = "Translate",
  Dictionary = "Dictionary",
  Chat = "Chat",
}

export interface Option {
  label: string;
  value: string;
}

export interface Translate {
  from: Option[];
  to: Option[];
}

export interface Execute {
  command: string;
  output?: string;
  section: Sections;
  info: Translate;
}
