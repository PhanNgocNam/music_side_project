export type SentencesType = {
  words: {
    startTime: number;
    endTime: number;
    data: string;
  }[];
}[];

export type LyricType = {
  sentences: SentencesType;
};
