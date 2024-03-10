import { ReactNode, useState } from "react";
import { MdCancel } from "react-icons/md";

export default function Modal({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      {modalState ? (
        <>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 bg-black/25 z-[103] "
            onClick={() => setModalState(!modalState)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] h-fit z-[103] rounded-md p-2 text-xl bg-slate-50">
            <div className="flex justify-between py-2">
              <span>{title}</span>
              <MdCancel size={16} />
            </div>
            <div>{children}</div>
            <div></div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
