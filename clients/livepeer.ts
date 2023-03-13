import { createReactClient } from "@livepeer/react";
import { studioProvider } from "livepeer/providers/studio";
import { LIVEPEER_KEY } from "../constants";

const LivepeerClient = createReactClient({
  provider: studioProvider({ apiKey: LIVEPEER_KEY }),
});

export default LivepeerClient;
