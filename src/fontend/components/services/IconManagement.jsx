import React, { useState, useEffect, memo, useMemo } from "react";
import { importSvg } from "./svgLoader";

const IconManagement = ({ icon, index, hoveredIndex }) => {
  const wantedWidth = 80;
  const wantedHeight = 80;
  const originalWidth = 512;
  const originalHeight = 512;
  const aspectRatio = originalWidth / originalHeight;
  const newHeight = wantedHeight / aspectRatio;
  const newWidth = wantedWidth / aspectRatio;

  const [SvgComponent, setSvgComponent] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const importSvgMemoized = useMemo(() => importSvg(icon), [icon]);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const importedSvgModule = await importSvgMemoized;
        const { ReactComponent: ImportedSvgComponent } = importedSvgModule;
        setSvgComponent(ImportedSvgComponent);
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    loadSvg();
  }, [importSvgMemoized]);

  useEffect(() => {
    setIsHovered(index === hoveredIndex);
  }, [index, hoveredIndex]);

  if (!SvgComponent) {
    return null; // or a loading indicator
  }

  return (
    <SvgComponent
      fill={isHovered ? "white" : "black"}
      stroke={isHovered ? "white" : "black"}
      width={newWidth}
      height={newHeight}
    />
  );
};

export default memo(IconManagement);





