import { Skeleton } from "@mui/material";

export default function HomeSkeleton() {
  return (
    <div
      style={{
        height: "calc(100%)",
      }}
      className="w-[940px]"
    >
      {[1, 2, 3, 4, 5]?.map(() => (
        <>
          <Skeleton
            width="19.5%"
            sx={{
              pb: "30px",
              bgcolor: "rgba(215, 237, 255, .2)",
            }}
          />
          <div className="flex w-full justify-between h-[40%] gap-3 mb-3">
            {[1, 2, 3, 4, 5].map(() => (
              <>
                <div className="w-[20%] h-[100%]">
                  <Skeleton
                    className="rounded-md"
                    variant="rectangular"
                    animation="wave"
                    sx={{
                      width: "100%",
                      height: "100%",
                      bgcolor: "rgba(215, 237, 255, .2)",
                    }}
                  />
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
