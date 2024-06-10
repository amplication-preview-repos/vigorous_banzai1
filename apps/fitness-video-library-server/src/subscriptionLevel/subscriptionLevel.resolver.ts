import * as graphql from "@nestjs/graphql";
import { SubscriptionLevelResolverBase } from "./base/subscriptionLevel.resolver.base";
import { SubscriptionLevel } from "./base/SubscriptionLevel";
import { SubscriptionLevelService } from "./subscriptionLevel.service";

@graphql.Resolver(() => SubscriptionLevel)
export class SubscriptionLevelResolver extends SubscriptionLevelResolverBase {
  constructor(protected readonly service: SubscriptionLevelService) {
    super(service);
  }
}
