import { SubscriptionLevelWhereUniqueInput } from "../subscriptionLevel/SubscriptionLevelWhereUniqueInput";

export type VideoCreateInput = {
  description?: string | null;
  duration?: number | null;
  subscriptionLevel?: SubscriptionLevelWhereUniqueInput | null;
  title?: string | null;
  url?: string | null;
};
