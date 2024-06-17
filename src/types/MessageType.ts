import { DateData } from "./DateData";

export type MessageType = {
  text: string;
  name: string;
  messageTime: DateData;
  senderId: string;
};
