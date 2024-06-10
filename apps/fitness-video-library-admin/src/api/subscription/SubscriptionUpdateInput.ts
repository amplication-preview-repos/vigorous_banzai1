import { SubscriptionLevelWhereUniqueInput } from "../subscriptionLevel/SubscriptionLevelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  subscriptionLevel?: SubscriptionLevelWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
