type Note = {
  id: string;
  title: string;
  category: string;
  description: string | undefined;
  date: string | undefined;
  mark_div: number | undefined;
};

export type markDiv = {
  isFavorite: number;
};

export default Note;
