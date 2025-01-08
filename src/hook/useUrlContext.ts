"use client";
import { UrlContext } from "@/context/url-context-provider";
import { useContext } from "react";

const useUrlContext = () => {
  const context = useContext(UrlContext);
  if (!context) throw new Error("Url context used out of provider");
  return context;
};

export default useUrlContext;
