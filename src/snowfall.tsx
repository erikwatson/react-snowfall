import { useEffect } from "react";
import snowfall, { DEFAULT_CONTAINER_ID, DEFAULT_USER_CONFIG, UserConfig } from "@erikwatson/snowfall";

type SnowfallConfig = {
  config: UserConfig
}

const DEFAULT_REACT_SNOWFALL_CONFIG: SnowfallConfig = {
  config: DEFAULT_USER_CONFIG
}

export function Snowfall({ config }: SnowfallConfig = DEFAULT_REACT_SNOWFALL_CONFIG) {
  useEffect(() => {
    snowfall.start(config)
  }, [config])

  return <div id={config.attachTo ?? DEFAULT_CONTAINER_ID} />
}