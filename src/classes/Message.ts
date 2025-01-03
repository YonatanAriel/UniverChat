import { MessageType } from "../types/MessageType";

export class MessageClass {
  id?: number;
  chatRoomId?: number | null;
  msgText: string;
  userName?: string;
  timestamp?: Date;
  userId?: number | string | null;
  // to?: string;
  isPrivate?: boolean;
  isLoggedIn?: boolean;
  photo?: string;

  constructor({
    id,
    chatRoomId,
    msgText,
    userName,
    userId,
    // to,
    isPrivate,
    isLoggedIn,
    photo,
  }: MessageType) {
    this.id = id;
    this.chatRoomId = chatRoomId;
    this.msgText = msgText;
    this.userName = userName;
    this.userId = userId;
    this.timestamp = new Date();
    // this.to = to;
    this.isPrivate = isPrivate;
    this.isLoggedIn = isLoggedIn;
    this.photo = photo;
  }
}
