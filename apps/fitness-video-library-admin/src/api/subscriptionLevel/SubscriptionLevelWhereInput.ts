import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";

export type SubscriptionLevelWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
  videos?: VideoListRelationFilter;
};
