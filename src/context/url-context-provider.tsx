"use client";

import { type Turl } from "@/types/types";
import { createContext, useState } from "react";

type TUrlContext = {
  urls: Turl[];
  isDuplicatedContent: boolean;
  handleAddUrls: (newUrl: Turl) => void;
  handleRemoveUrl: (id: number | undefined) => void;
  handleRemoveErrorDuplicate: () => void;
};
export const UrlContext = createContext<TUrlContext | null>(null);

const UrlContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [urls, setUrls] = useState<Turl[]>([]);
  const [isDuplicatedContent, setIsDuplicatedContent] = useState(false);

  const handleAddUrls = (newUrl: Turl) => {
    setUrls((url) => [...url, newUrl]);
    const duplicated = urls.some((urlObj) => urlObj.url === newUrl.url);
    if (duplicated) {
      setIsDuplicatedContent(true);
    } else {
      setIsDuplicatedContent(false);
    }
  };

  const handleRemoveUrl = (id: number | undefined) => {
    const filteredUrl = urls.filter((url) => url.id !== id);
    setUrls(filteredUrl);
  };

  const handleRemoveErrorDuplicate = () => setIsDuplicatedContent(false);

  return (
    <UrlContext.Provider
      value={{
        urls,
        handleAddUrls,
        handleRemoveUrl,
        isDuplicatedContent,
        handleRemoveErrorDuplicate,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};
export default UrlContextProvider;
