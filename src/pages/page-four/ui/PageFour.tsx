import { useNavigate } from "react-router-dom";

import pageFour from "@/shared/assets/images/4.jpg";

export const PageFour = () => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-400 p-5 inline-block rounded-lg">
      <h2 className="text-2xl mb-3">Страничка 4</h2>
      <img src={pageFour} alt="4" className="max-h-[600px]" />
      <div className="mt-5 flex gap-3">
        <button
          onClick={() => navigate("/3")}
          className="border border-gray-400 py-2 px-3 rounded hover:bg-gray-200"
        >
          Назад
        </button>
      </div>
    </div>
  );
};
