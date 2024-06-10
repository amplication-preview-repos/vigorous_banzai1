import { SubscriptionCreateNestedManyWithoutSubscriptionLevelsInput } from "./SubscriptionCreateNestedManyWithoutSubscriptionLevelsInput";
import { VideoCreateNestedManyWithoutSubscriptionLevelsInput } from "./VideoCreateNestedManyWithoutSubscriptionLevelsInput";

export type SubscriptionLevelCreateInput = {
  description?: string | null;
  name?: string | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutSubscriptionLevelsInput;
  videos?: VideoCreateNestedManyWithoutSubscriptionLevelsInput;
};
