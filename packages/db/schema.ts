import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Attachments {
  id: Generated<Buffer>;
  snowflakeId: string;
  url: string;
  name: string;
  contentType: string | null;
  messageId: string;
}

export interface Channels {
  id: Generated<Buffer>;
  snowflakeId: string;
  name: string;
  type: number;
  topic: string;
}

export interface Messages {
  id: Generated<Buffer>;
  snowflakeId: string;
  content: string;
  createdAt: Date;
  editedAt: Date | null;
  userId: string;
  postId: string;
  replyToMessageId: string | null;
}

export interface Posts {
  id: Generated<Buffer>;
  snowflakeId: string;
  title: string;
  isLocked: number;
  createdAt: Date;
  editedAt: Date | null;
  userId: string | null;
  channelId: string | null;
}

export interface Users {
  id: Generated<Buffer>;
  snowflakeId: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface DB {
  attachments: Attachments;
  channels: Channels;
  messages: Messages;
  posts: Posts;
  users: Users;
}
