import { format, isToday, isYesterday } from "date-fns";

export const formatTime = (strTimestamp, timeOnly = false) => {
  const parsedTime = new Date(strTimestamp);
  let formattedTime;

  if (timeOnly) {
    formattedTime = format(parsedTime, "h:mm a");
  } else if (isToday(parsedTime)) {
    formattedTime = format(parsedTime, "h:mm a");
  } else if (isYesterday(parsedTime)) {
    formattedTime = "Yesterday";
  } else {
    formattedTime = format(parsedTime, "dd-MMM-yyyy");
  }

  return formattedTime;
};

export const photoUrl = (photo) => {
  if (photo.startsWith("/assets/")) {
    photo = `${import.meta.env.VITE_BACKEND_URL}${photo}`;
  }
  return photo;
};

export const chatDetails = (chat, userId) => {
  const { isGroupChat, users, photo, latestMessage, chatName } = chat;

  let name, pic, msg;

  if (!isGroupChat) {
    const otherUser = users.find((user) => user._id != userId);
    name = otherUser.fullName;
    pic = photoUrl(otherUser.photo);
    msg =
      latestMessage &&
      `${latestMessage.sender._id == userId && "You: "}${
        latestMessage.content
      }`;
  } else {
    name = chatName;
    pic = photoUrl(photo);
    msg =
      latestMessage &&
      `${latestMessage.sender.fullName}: ${latestMessage.content}`;
  }
  const time = latestMessage && formatTime(latestMessage.updatedAt);

  return { isGroupChat, photo: pic, latestMessage: msg, chatName: name, time };
};
