import ChatWrapper from "@/components/ChatWrapper";
import { ModeToggle } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { reconstructUrl } from "@/lib/utils";
import { Home } from "lucide-react";

import { cookies } from "next/headers";
import Link from "next/link";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

const Page = async ({ params }: PageProps) => {
  const sessionCookie = cookies().get("sessionId")?.value;
  const reconstructedUrl = reconstructUrl({ url: params.url as string[] });

  const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(
    /\//g,
    "",
  );

  const isAlreadyIndexed = await redis.sismember(
    "indexed-urls",
    reconstructedUrl,
  );

  const initialMessages = await ragChat.history.getMessages({
    amount: 10,
    sessionId: sessionId,
  });

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });

    await redis.sadd("indexed-urls", reconstructedUrl);
  }

  return (
    <>
      <header className="p-2 flex items-center justify-between">
        <Link href="/">
          <Button variant="outline" size="icon">
            <Home className="size-5" />
          </Button>
        </Link>
        <p className="text-xs tracking-tighter font-mono">
          {" "}
          {reconstructedUrl}
        </p>

        <ModeToggle />
      </header>
      <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
    </>
  );
};

export default Page;
