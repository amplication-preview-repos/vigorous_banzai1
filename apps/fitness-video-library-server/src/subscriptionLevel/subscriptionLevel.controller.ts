import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubscriptionLevelService } from "./subscriptionLevel.service";
import { SubscriptionLevelControllerBase } from "./base/subscriptionLevel.controller.base";

@swagger.ApiTags("subscriptionLevels")
@common.Controller("subscriptionLevels")
export class SubscriptionLevelController extends SubscriptionLevelControllerBase {
  constructor(protected readonly service: SubscriptionLevelService) {
    super(service);
  }
}
