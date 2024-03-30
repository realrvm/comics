import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Sidebar } from "@/widgets/sidebar";
import bg from "@/shared/assets/images/1.0/1.0.jpg";
import * as chapter1 from "@/shared/assets/images/1.1";

export const Content: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const first = (id as string).split(".")[0];
  const last = (id as string).split(".").pop();
  const src =
    // @ts-expect-error later
    id === "1.0" ? bg : `${chapter1["chapter1" + "_" + first + "_" + last]}`;

  return (
    <div className="w-full h-full bg-[#000] p-4">
      <div className="flex gap-4 h-full">
        <Sidebar />
        <div
          className="max-w-[800px] w-full"
          onClick={() => navigate(`/content/1.${first}.${+last! + 1}`)}
        >
          <img
            src={src}
            alt="content"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};
