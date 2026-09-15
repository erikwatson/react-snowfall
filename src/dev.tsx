import { createRoot } from "react-dom/client";
import { Snowfall, UserConfig, UserSchedule } from "./index";

const myConfig: UserConfig = {
  layers: [
    { colour: "red" },
    { colour: "green" },
  ],
};

const mySchedule: UserSchedule = {
  from: { month: 9, day: 16 },
  to: { month: 12, day: 31 },
};

createRoot(document.getElementById("root")!).render(
  <Snowfall config={myConfig} schedule={mySchedule} />,
);
