import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubscriptionLevelServiceBase } from "./base/subscriptionLevel.service.base";

@Injectable()
export class SubscriptionLevelService extends SubscriptionLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
