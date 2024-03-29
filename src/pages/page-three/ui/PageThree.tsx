import { useNavigate } from "react-router-dom";

import pageThree from "@/shared/assets/images/3.jpg";

export const PageThree = () => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-400 p-5 inline-block rounded-lg">
      <h2 className="text-2xl mb-3">Страничка 3</h2>
      <img src={pageThree} alt="3" className="max-h-[600px]" />
      <div className="mt-5 flex gap-3">
        <button
          onClick={() => navigate("/2")}
          className="border border-gray-400 py-2 px-3 rounded hover:bg-gray-200"
        >
          Назад
        </button>
        <button
          onClick={() => navigate("/4")}
          className="border border-gray-400 py-2 px-3 rounded hover:bg-gray-200"
        >
          Дальше по скользкой дорожке
        </button>
      </div>
    </div>
  );
};
