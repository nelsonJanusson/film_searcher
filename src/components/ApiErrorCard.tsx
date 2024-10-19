import { Message } from "../types/types";

export default function ApiErrorCard({
    message,
  }: {
    message: Message;
  }) {
    
    return (
      <>
        <p>There was an error fetching the data, please try again</p>
        <p>{message.Error}</p>
      </>
    )
  }
    