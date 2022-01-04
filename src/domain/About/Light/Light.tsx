import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { StyledLight } from "domain/About/Light/StyledLight";

interface ILightProps {
  variant: "Red" | "Yellow" | "Green";
}

export const Light = ({ variant }: ILightProps) => {
  const [width, setWidth] = useState(20);
  const LightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (LightRef && LightRef.current) {
      setWidth(LightRef.current.offsetWidth);
    }
  }, []);

  useEffect(() =>
    window.addEventListener("resize", () => {
      if (LightRef && LightRef.current) {
        setWidth(LightRef.current.offsetWidth);
      }
    })
  );

  return <StyledLight ref={LightRef} variant={variant} width={width} />;
};
