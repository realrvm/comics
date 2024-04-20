import { KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

export function useArrows() {
  const navigate = useNavigate();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, path: string) => {
    const { key } = e;

    if (key === "ArrowLeft") {
      e.preventDefault();
      navigate(-1);
    }

    if (key === "ArrowRight") {
      e.preventDefault();
      navigate(path);
    }
  };

  return { handleKeyDown };
}
