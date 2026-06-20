import { createRoot } from "react-dom/client";
import { Snowfall, UserConfig, UserSchedule } from "./index";

const myConfig: UserConfig = {
  layers: [
    {
      colour: "red",
    },
  ],
};

const mySchedule: UserSchedule = {
  from: { month: 12, day: 1 },
  to: { month: 12, day: 31 },
};

createRoot(document.getElementById("root")!).render(
  <Snowfall config={myConfig} schedule={mySchedule} />,
);
