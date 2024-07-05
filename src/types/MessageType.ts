// import { DateData } from "./DateData";

export type MessageType = {
  id?: number;
  chatRoomId?: number;
  msgText: string;
  userName?: string;
  timestamp: Date;
  userId?: number | string | null;
};

// id?: number;
// chatRoomId?: number;
// userId?: number;
// msgText: string;
// timestamp: number;
// messageTime: DateData;
