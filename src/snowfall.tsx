import { useEffect } from "react";
import * as snowfall from "@erikwatson/snowfall";

import {
  DEFAULT_CONTAINER_ID,
  DEFAULT_USER_CONFIG,
} from "@erikwatson/snowfall";

import type { UserConfig, UserSchedule } from "@erikwatson/snowfall";

type SnowfallConfig = {
  config: UserConfig;
  schedule?: UserSchedule;
};

const DEFAULT_REACT_SNOWFALL_CONFIG: SnowfallConfig = {
  config: DEFAULT_USER_CONFIG,
};

export function Snowfall({
  config,
  schedule,
}: SnowfallConfig = DEFAULT_REACT_SNOWFALL_CONFIG) {
  useEffect(() => {
    const id = config.attachTo ?? DEFAULT_CONTAINER_ID;
    const el = document.getElementById(id);

    if (!el) return;

    if (schedule) {
      snowfall.schedule(schedule, config);
    } else {
      snowfall.start(config);
    }
  }, [config, schedule]);

  return <div id="snowfall" />;
}
