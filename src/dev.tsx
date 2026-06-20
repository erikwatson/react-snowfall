import { createRoot } from "react-dom/client"
import { Snowfall } from "./index"

createRoot(document.getElementById("root")!).render(
  <Snowfall
    config={{
      layers: [
        {
          colour: "red",
        },
      ],
    }}
  />,
)
