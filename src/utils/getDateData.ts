import { DateData } from "../types/DateData";
export const getDateData = (): DateData => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const date = currentDate.getDate();
  return { month, hours, minutes, date };
};
