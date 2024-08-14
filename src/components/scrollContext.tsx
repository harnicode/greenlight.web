"use client";
import React, { createContext, useContext, useRef } from "react";

interface ScrollContextProps {
  setRef: (id: string, ref: React.RefObject<HTMLDivElement>) => void;
  scrollToDiv: (id: string) => void;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const refs = useRef<Map<string, HTMLDivElement>>(new Map());

  const setRef = (id: string, ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      refs.current.set(id, ref.current);
    }
  };

  const scrollToDiv = (id: string) => {
    const element = refs.current.get(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ setRef, scrollToDiv }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
