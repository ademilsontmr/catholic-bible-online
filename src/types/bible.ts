export interface BibleBook {
  name: string;
  testament: 'old' | 'new';
  chapters: string[][];
}

export interface BibleData {
  [key: string]: BibleBook;
} 