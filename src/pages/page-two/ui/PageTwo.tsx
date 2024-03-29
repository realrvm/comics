import { useNavigate } from "react-router-dom";

import pageTwo from "@/shared/assets/images/2.jpg";

export const PageTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-400 p-5 inline-block rounded-lg">
      <h2 className="text-2xl mb-3">Страничка 2</h2>
      <div className="cursor-pointer" onClick={() => navigate("/3")}>
        <img src={pageTwo} alt="2" className="max-h-[600px]" />
      </div>
    </div>
  );
};
