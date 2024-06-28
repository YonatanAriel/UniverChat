// import { DateData } from "./DateData";

export type MessageType = {
  id?: number;
  chatRoomId?: number;
  msgText: string;
  userName?: string;
  sqlUserId?: number;
  timestamp: Date;
  localSenderId: string;
};

// id?: number;
// chatRoomId?: number;
// userId?: number;
// msgText: string;
// timestamp: number;
// messageTime: DateData;
