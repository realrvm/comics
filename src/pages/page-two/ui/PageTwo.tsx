import { useNavigate } from "react-router-dom";

import pageTwo from "@/shared/assets/images/2.jpg";

export const PageTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-400 p-5 inline-block rounded-lg">
      <h2 className="text-2xl mb-3">Страничка 2</h2>
      <img src={pageTwo} alt="2" className="max-h-[600px]" />
      <div className="mt-5 flex gap-3">
        <button
          onClick={() => navigate("/")}
          className="border border-gray-400 py-2 px-3 rounded hover:bg-gray-200"
        >
          Назад
        </button>
        <button
          onClick={() => navigate("/3")}
          className="border border-gray-400 py-2 px-3 rounded hover:bg-gray-200"
        >
          Дальше по скользкой дорожке
        </button>
      </div>
    </div>
  );
};
