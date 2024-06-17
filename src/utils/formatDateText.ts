import { DateData } from "../types/DateData";

export const formatDateText = (messageTime: DateData, showDate: boolean) => {
  const date = showDate
    ? `${messageTime.date}/${
        messageTime.month < 10 ? `0${messageTime.month}` : messageTime.month
      }`
    : "";
  const time = `${messageTime.hours}:${
    messageTime.minutes < 10 ? `0${messageTime.minutes}` : messageTime.minutes
  }`;
  return `${date} ${time}`.trim();
};
