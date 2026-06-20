import { useEffect } from "react";
import snowfall, { DEFAULT_CONTAINER_ID, DEFAULT_USER_CONFIG, UserConfig, UserSchedule } from "@erikwatson/snowfall";

type SnowfallConfig = {
  config: UserConfig,
  schedule?: UserSchedule
}

const DEFAULT_REACT_SNOWFALL_CONFIG: SnowfallConfig = {
  config: DEFAULT_USER_CONFIG
}

export function Snowfall({ config, schedule }: SnowfallConfig = DEFAULT_REACT_SNOWFALL_CONFIG) {
  useEffect(() => {
    if(schedule) {
      snowfall.schedule(schedule, config)
    } else{
      snowfall.start(config)
    }
  }, [config])

  return <div id={config.attachTo ?? DEFAULT_CONTAINER_ID} />
}