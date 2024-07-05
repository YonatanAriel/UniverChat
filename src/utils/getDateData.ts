import { DateData } from "../types/DateData";
export const getDateData = (timestamp?: Date): DateData => {
  const timeToFormat = timestamp ? new Date(timestamp) : new Date();
  const month = timeToFormat.getMonth() + 1;
  const hours = timeToFormat.getHours();
  const minutes = timeToFormat.getMinutes();
  const date = timeToFormat.getDate();
  return { month, hours, minutes, date };
};
