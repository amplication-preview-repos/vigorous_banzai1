import { SubscriptionLevelWhereInput } from "./SubscriptionLevelWhereInput";
import { SubscriptionLevelOrderByInput } from "./SubscriptionLevelOrderByInput";

export type SubscriptionLevelFindManyArgs = {
  where?: SubscriptionLevelWhereInput;
  orderBy?: Array<SubscriptionLevelOrderByInput>;
  skip?: number;
  take?: number;
};
