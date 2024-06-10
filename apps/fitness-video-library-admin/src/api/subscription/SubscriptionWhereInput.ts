import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionLevelWhereUniqueInput } from "../subscriptionLevel/SubscriptionLevelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  subscriptionLevel?: SubscriptionLevelWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
