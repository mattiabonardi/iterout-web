import { LayoutGridCols } from "@/types/layout/grid";
import React from "react";
import { Section } from "./Section";
import { LayoutSection } from "@/types/layout/section";

/**
 * Grid layout based on columns
 * @param props
 * @returns
 */
export const GridCols: React.FC<LayoutGridCols> = (props) => {
  return (
    <div>
      {props.sections.map((section: LayoutSection, index: number) => {
        return <Section key={index} {...section}></Section>;
      })}
    </div>
  );
};
