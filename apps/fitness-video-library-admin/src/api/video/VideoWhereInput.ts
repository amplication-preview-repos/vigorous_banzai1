import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionLevelWhereUniqueInput } from "../subscriptionLevel/SubscriptionLevelWhereUniqueInput";

export type VideoWhereInput = {
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  subscriptionLevel?: SubscriptionLevelWhereUniqueInput;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
