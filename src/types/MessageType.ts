// import { DateData } from "./DateData";

export type MessageType = {
  id?: number;
  chatRoomId?: number;
  msgText: string;
  userName?: string;
  timestamp?: Date;
  userId?: number | string | null;
  to?: string;
  isPrivate?: boolean;
};
