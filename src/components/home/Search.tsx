"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Search = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    router.push(`/${url}`, { scroll: false });
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 py-10">
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
            setUrl("");
          }
        }}
        type="text"
        placeholder="paste Website URL here..."
      />
      <Button type="button" onClick={handleSubmit} disabled={url === ""}>
        Chat
      </Button>
    </div>
  );
};

export default Search;
