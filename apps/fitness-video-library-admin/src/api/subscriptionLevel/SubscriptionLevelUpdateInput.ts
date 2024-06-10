import { SubscriptionUpdateManyWithoutSubscriptionLevelsInput } from "./SubscriptionUpdateManyWithoutSubscriptionLevelsInput";
import { VideoUpdateManyWithoutSubscriptionLevelsInput } from "./VideoUpdateManyWithoutSubscriptionLevelsInput";

export type SubscriptionLevelUpdateInput = {
  description?: string | null;
  name?: string | null;
  subscriptions?: SubscriptionUpdateManyWithoutSubscriptionLevelsInput;
  videos?: VideoUpdateManyWithoutSubscriptionLevelsInput;
};
