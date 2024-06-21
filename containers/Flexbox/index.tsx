import React from "react";

import { FlexBoxProps } from "./flexbox";

export const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  dir,
  gap = "10px", // default value
  justify = "center", // default value
  items = "center", // default value
  width,
  height,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: dir === "row" ? "row" : "column",
        gap,
        justifyContent: justify,
        alignItems: items,
        width,
        height,
      }}
    >
      {children}
    </div>
  );
};
