import React from "react";

export interface PropsType {
  text: React.ReactNode;
  name: string;
  open: () => void;
}
