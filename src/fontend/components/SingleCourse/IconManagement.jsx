import React, { useState, useEffect, memo, useMemo } from "react";
import { importSvg } from "./svgLoader";

const IconManagement = ({ icon, isCardHover, isTransition, width, height, fillColor }) => {
  const wantedWidth = width || 50;
  const wantedHeight = height || 50;
  const originalWidth = 512;
  const originalHeight = 512;
  const aspectRatio = originalWidth / originalHeight;
  const newHeight = wantedHeight / aspectRatio;
  const newWidth = wantedWidth / aspectRatio;

  const [SvgComponent, setSvgComponent] = useState(null);
  const importSvgMemoized = useMemo(() => importSvg(icon), [icon]);

  const iconStyle = {
    transform: isTransition ? "scale(1.1)" : "scale(1.0)",
    transition: "all 0.4s",
  };

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

  if (!SvgComponent) {
    return null; // or a loading indicator
  }

  return (
    <SvgComponent
      fill={isCardHover ? "white" : fillColor}
      stroke={isCardHover ? "white" : "black"}
      width={newWidth}
      height={newHeight}
      style={iconStyle}
    />
  );
};

export default memo(IconManagement);
