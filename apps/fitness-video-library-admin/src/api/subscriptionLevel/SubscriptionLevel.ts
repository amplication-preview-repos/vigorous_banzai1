import { Subscription } from "../subscription/Subscription";
import { Video } from "../video/Video";

export type SubscriptionLevel = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  videos?: Array<Video>;
};
