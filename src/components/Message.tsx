import { cn } from "@/lib/utils";
import { type Message as TMessage } from "ai/react";
import { Bot, User } from "lucide-react";
interface MessageProps {
  content: TMessage;
  isUserMessage: boolean;
}

const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn({
        "": isUserMessage,
        "bg-zinc-900/25 dark:bg-zinc-800": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="max-w-3xl max-auto flex items-start gap-2.5">
          <div
            className={cn(
              "size-10 shrink-0 aspect-square rounded-full border-zinc-700 bg-zinc-900 flex justify-center items-center",
              {
                "bg-zinc-700 border-blue-700 text-zinc-200": isUserMessage,
              },
            )}
          >
            {isUserMessage ? (
              <User className="size-5" />
            ) : (
              <Bot className="size-5 text-white" />
            )}
          </div>
          <div className=" flex flex-col ml-6 w-full">
            <div className="flex items-center spece-x-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {isUserMessage ? " You" : "Website"}
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 dark:text-white text-gary-900">
              {content.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
