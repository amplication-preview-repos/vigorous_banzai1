import { SubscriptionLevel } from "../subscriptionLevel/SubscriptionLevel";
import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  subscriptionLevel?: SubscriptionLevel | null;
  updatedAt: Date;
  user?: User | null;
};
