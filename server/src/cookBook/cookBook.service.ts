import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CookBookServiceBase } from "./base/cookBook.service.base";

@Injectable()
export class CookBookService extends CookBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
