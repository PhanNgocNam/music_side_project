import PlayIcon from "../assets/icons/PlayIcon";

export default function PlaylistDetails() {
  return (
    <div
      style={{
        height: "calc(100% - 64px)",
      }}
      className="bg-red-400 flex gap-[1%] pt-16"
    >
      <div className="h-full w-[38%] flex flex-col items-center z-[101] justify-between">
        <div
          style={{
            backgroundImage: `url("https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/c/0/1/0/c01033219664e0421ceb207044d05006.jpg")`,
          }}
          className="w-[280px] h-[280px] bg-black bg-contain rounded-md bg-no-repeat shadow-2xl"
        />

        <p className="font-bold text-[1.6rem] pt-2">Pop Ballad Việt Nổi Bật</p>
        <p className="text-[1.2rem] pt-2">Cập nhật: 05/01/2024</p>
        <p className="text-[1.2rem] pt-2">
          Trung Quân, Hà Nhi,Văn Mai Hương, Dương Edward
        </p>
        <p className="text-[1.2rem] pt-2">
          Lời tựa: Những bản Ballad Việt 'tốn nước mắt' người nghe nhất
        </p>

        <button className="flex items-center justify-between px-6 py-3 rounded-full gap-x-2 border border-black/20 text-[1.4rem] mt-2">
          <PlayIcon width={1.6} height={1.6} /> Phát ngẫu nhiên
        </button>
      </div>

      <div className="h-full w-[60%] bg-blue-800">B</div>
    </div>
  );
}
