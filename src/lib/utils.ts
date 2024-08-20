import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) =>
    decodeURIComponent(component),
  );

  return decodedComponents.join("//");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
