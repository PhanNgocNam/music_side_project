import { SentencesType } from "../types/LyricType";

export const processLyricRawData = (sentences: SentencesType | undefined) => {
  return sentences?.map((sentence) => {
    const rawLyric = sentence.words.map((word) => word.data);

    console.log(
      rawLyric,
      sentence.words[0].startTime,
      sentence.words[sentence.words.length - 1].endTime
    );

    return {
      startTime: sentence.words[0].startTime,
      endTime: sentence.words[sentence.words.length - 1].endTime,
      lyric: rawLyric.join(" "),
    };
  });
};
