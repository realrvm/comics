import { useNavigate } from "react-router-dom";

import pageOne from "@/shared/assets/images/1.jpg";

export const PageOne = () => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-400 p-5 inline-block rounded-lg">
      <h2 className="text-2xl mb-3">Страничка 1</h2>
      <div onClick={() => navigate("/2")} className="cursor-pointer">
        <img src={pageOne} alt="1" className="max-h-[600px]" />
      </div>
    </div>
  );
};
