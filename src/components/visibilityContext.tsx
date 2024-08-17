"use client";

// VisibilityContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface VisibilityContextProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const VisibilityContext = createContext<VisibilityContextProps | undefined>(
  undefined
);

export const VisibilityProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");

  return (
    <VisibilityContext.Provider
      value={{ visible, setVisible, content, setContent }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = (): VisibilityContextProps => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error("useVisibility must be used within a VisibilityProvider");
  }
  return context;
};
