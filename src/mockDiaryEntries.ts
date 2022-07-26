export type DiaryEntry = {
  date: string;
  title: string;
  rating: number;
  content: string;
};

export const mockDiaryEntries: DiaryEntry[] = [
  { date: "20.07.2022", title: "A day", rating: 9, content: "somecontent" },
  {
    date: "21.07.2022",
    title: "Another day",
    rating: 8,
    content: "somecontent asd",
  },
  {
    date: "22.07.2022",
    title: "A third day",
    rating: 10,
    content: "somecontent 123",
  },
];
