import { SubscriptionLevel } from "../subscriptionLevel/SubscriptionLevel";

export type Video = {
  createdAt: Date;
  description: string | null;
  duration: number | null;
  id: string;
  subscriptionLevel?: SubscriptionLevel | null;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
