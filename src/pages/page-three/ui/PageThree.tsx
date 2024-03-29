import { useNavigate } from "react-router-dom";

import pageThree from "@/shared/assets/images/3.jpg";

export const PageThree = () => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-400 p-5 inline-block rounded-lg">
      <h2 className="text-2xl mb-3">Страничка 3</h2>
      <div className="cursor-pointer" onClick={() => navigate("/4")}>
        <img src={pageThree} alt="3" className="max-h-[600px]" />
      </div>
    </div>
  );
};
