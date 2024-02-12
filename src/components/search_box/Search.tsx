import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { ResponseDataTypes } from "../../types/ResponseDataTypes";
import { searchTypes } from "../../types/SearchTypes";
import { urls } from "../../constant/requestURL";
import { get } from "../../utils/get";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { AiOutlineLoading } from "react-icons/ai";
import { handlePlayNewSong } from "../../utils/handlePlayNewSong";

export default function Search() {
  const [text, setText] = useState("");
  const [searchData, setSearchData] =
    useState<ResponseDataTypes<searchTypes> | null>(null);
  const navigate = useNavigate();

  useDebounce<string>(
    () => {
      (async function search() {
        if (text !== null) {
          const { data } = await get(`${urls.search}?id=${text}`);
          setSearchData(data);
        }
      })();
    },
    1000,
    [text]
  );

  return (
    <div className="relative w-full flex items-center justify-between p-2 rounded-md bg-white ">
      <span>
        <CiSearch size={20} />
      </span>
      <input
        className="w-full outline-none text-[1.2rem] h-10 rounded-md pl-[.8em]"
        onChange={(e) => {
          setText(e.target.value);
          setSearchData(null);
        }}
        value={text}
        placeholder="Tìm kiếm ca sĩ, bài hát, danh sách phát..."
      />

      {text ? (
        searchData?.result === 1 ? (
          <span
            className="text-black/70 cursor-pointer"
            onClick={() => {
              setSearchData(null);
              setText("");
            }}
          >
            <MdOutlineCancel size={20} />
          </span>
        ) : (
          <span className="animate-spin">
            <AiOutlineLoading size={20} />
          </span>
        )
      ) : (
        ""
      )}

      {text && searchData?.result === 1 ? (
        <div className="absolute left-0 right-0 top-[36px] h-[50dvh] overflow-y-scroll bg-white ">
          <div className="pl-2 text-[1.3rem] py-1 font-bold">Nghệ sỹ</div>
          {searchData?.data?.data?.artists?.map((artist, index) => (
            <div
              onClick={() => navigate(`/p2n/artists?id=${artist.alias}`)}
              className="flex gap-4 text-[1.2rem] items-center p-1 pl-2 hover:bg-black/10 border-b border-black/[0.04] cursor-pointer"
              key={index}
            >
              <img
                width="30px"
                height="30px"
                className="rounded-full object-fill"
                src={artist.thumbnail}
                alt={artist.thumbnail}
              />
              {artist.name}
            </div>
          ))}

          <div className="pl-2 text-[1.3rem] py-1 font-bold">Bài hát</div>
          {searchData?.data?.data?.songs.map((song, index) => (
            <div
              onClick={() => {
                handlePlayNewSong(
                  song.duration,
                  "",
                  song.encodeId,
                  `${song.title}`,
                  "song"
                );
                navigate(`/p2n/song?id=${song.encodeId}`);
              }}
              className="flex gap-4 text-[1.2rem] items-center p-1 pl-2 hover:bg-black/10 border-b border-black/[0.04] cursor-pointer"
              key={index}
            >
              <img
                width="30px"
                height="30px"
                className="rounded-md object-fill"
                src={song.thumbnail}
                alt={song.thumbnail}
              />
              <div>
                <p className="one_line">{song.title}</p>
                <p className="one_line text-[1rem]">
                  {song?.artists?.map((artits, index) => (
                    <>
                      <span key={index}>{artits.name} </span>{" "}
                      <span className="last:hidden">, </span>
                    </>
                  ))}
                </p>
              </div>
            </div>
          ))}

          <div className="pl-2 text-[1.3rem] py-1 font-bold">
            Danh sách phát
          </div>
          {searchData?.data?.data?.playlists.map((playlist, index) => (
            <div
              onClick={() => navigate(`/p2n/list?id=${playlist.encodeId}`)}
              className="flex gap-4 text-[1.2rem] items-center p-1 pl-2 hover:bg-black/10 border-b border-black/[0.04] cursor-pointer"
              key={index}
            >
              <img
                width="30px"
                height="30px"
                className="rounded-md object-fill"
                src={playlist.thumbnail}
                alt={playlist.thumbnail}
              />
              <div>
                <p className="one_line">{playlist.title}</p>
                <p className="one_line text-[1rem]">
                  {playlist?.artists?.map((playlist, index) => (
                    <>
                      <span key={index}>{playlist.name} </span>{" "}
                      <span className="last:hidden">, </span>
                    </>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
