import { getDateData } from "../../utils/getDateData";
import { MessageType } from "../../types/MessageType";
import { Context } from "../../context/ContextProvider";
import { ContextValue } from "../../types/contextValue";
import { useContext, useMemo } from "react";
import { formatDateText } from "../../utils/formatDateText";

interface Props extends MessageType {
  senderId: number | string | null | undefined;
}

function Message({ userName, msgText, senderId, timestamp, userImg }: Props) {
  const { userId } = useContext(Context) as ContextValue;
  const isRtl = userId === senderId;
  const { date, month } = useMemo(() => getDateData(), []);
  const messageTime = useMemo(() => getDateData(timestamp), [timestamp]);
  const showDate = !(month === messageTime.month && date === messageTime.date);
  const dateText = formatDateText(messageTime, showDate);

  return (
    <>
      <div
        dir={`${isRtl ? "rtl" : "ltr"}`}
        className={`flex items-start gap-2.5 `}
      >
        {/* <div className="absolute top-0 left-0 p-3 text-2xl font-bold border-b-2 border-r-2 bg-gradient-to-tl from-emerald-50 to-rose-50 rounded-tl-md rounded-br-md border-b-black border-r-black ">
           Public chat 
        </div> */}
        <img className="w-8 h-8 rounded-full" src={userImg} alt="User image" />
        <div className="border-black border-2 bg-white flex flex-col z-10   min-w-[40%] md:max-w-[70%] overflow-hidden break-words  leading-1.5 p-4 rounded-e-xl rounded-es-xl ">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 ">
              {userName}
            </span>
            <span className="text-sm font-normal text-gray-500 ">
              {dateText}
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 ">{msgText}</p>
          <span className="text-sm font-normal text-gray-500 ">Delivered?</span>
        </div>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          data-dropdown-placement="bottom-start"
          className="inline-flex items-center self-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
          type="button"
        >
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
        {/* <div
          id="dropdownDots"
          className="z-10 hidden w-40 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Reply
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Forward
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Copy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Report
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
}
export default Message;
