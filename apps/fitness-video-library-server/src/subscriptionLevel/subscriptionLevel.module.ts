import { Module } from "@nestjs/common";
import { SubscriptionLevelModuleBase } from "./base/subscriptionLevel.module.base";
import { SubscriptionLevelService } from "./subscriptionLevel.service";
import { SubscriptionLevelController } from "./subscriptionLevel.controller";
import { SubscriptionLevelResolver } from "./subscriptionLevel.resolver";

@Module({
  imports: [SubscriptionLevelModuleBase],
  controllers: [SubscriptionLevelController],
  providers: [SubscriptionLevelService, SubscriptionLevelResolver],
  exports: [SubscriptionLevelService],
})
export class SubscriptionLevelModule {}
