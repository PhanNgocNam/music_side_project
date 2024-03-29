import { urls } from "../../constant/requestURL";
import useGetData from "../../hooks/useGetData";
import { PlaylistDetailTypes } from "../../types/PlaylistDetailsTypes";
import SongHorizontalDisplay from "../song/song_horizontal_display/SongHorizontalDisplay";
import { ResponseDataTypes } from "../../types/ResponseDataTypes";
import { SongTypes } from "../../types/SongTypes";

type ListVerticalSongType = {
  encodeId?: string;
  numberOfSong: number;
  songs?: SongTypes[];
};

export default function ListVerticalSong({
  encodeId,
  numberOfSong,
}: ListVerticalSongType) {
  const data = useGetData<ResponseDataTypes<PlaylistDetailTypes>>(
    `${urls.playlistPage}?id=${encodeId}`,
    []
  );

  // console.log(data);

  return (
    <div className="w-full">
      {data?.data?.data?.song?.items
        ?.slice(0, numberOfSong)
        ?.map((song, index) => (
          <SongHorizontalDisplay
            key={index}
            encodeId={song.encodeId}
            duration={song.duration}
            hasLyric={song.hasLyric}
            releaseAt={song.releaseAt}
            title={song.title}
            thumbnail={song.thumbnail}
            thumbnailM={song.thumbnailM}
            artists={song.artists}
          />
        ))}
    </div>
  );
}
