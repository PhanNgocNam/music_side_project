import { useEffect } from "react";
import { urls } from "../../constant/requestURL";
import useGetData from "../../hooks/useGetData";
import { PlaylistDetailTypes } from "../../types/PlaylistDetailsTypes";
import { setCurrentPlaylist } from "../../features/current_playlist/currentPlaylistSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import SongHorizontalDisplay from "../song/song_horizontal_display/SongHorizontalDisplay";
import { useLocation } from "react-router-dom";

type ListVerticalSongType = {
  encodeId?: string;
  numberOfSong: number;
};

export default function ListVerticalSong({
  encodeId,
  numberOfSong,
}: ListVerticalSongType) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { list } = useAppSelector((state) => state.currentPlaylist);

  const data = useGetData<PlaylistDetailTypes, string>(
    `${urls.playlistPage}?id=${encodeId}`,
    [location.pathname]
  );

  return (
    <div className="w-full">
      {data?.song.items.slice(0, numberOfSong).map((song, index) => (
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
