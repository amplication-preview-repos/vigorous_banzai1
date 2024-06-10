import { SubscriptionLevel as TSubscriptionLevel } from "../api/subscriptionLevel/SubscriptionLevel";

export const SUBSCRIPTIONLEVEL_TITLE_FIELD = "name";

export const SubscriptionLevelTitle = (record: TSubscriptionLevel): string => {
  return record.name?.toString() || String(record.id);
};
