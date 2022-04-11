import { Module } from "@nestjs/common";
import { CookBookModuleBase } from "./base/cookBook.module.base";
import { CookBookService } from "./cookBook.service";
import { CookBookController } from "./cookBook.controller";
import { CookBookResolver } from "./cookBook.resolver";

@Module({
  imports: [CookBookModuleBase],
  controllers: [CookBookController],
  providers: [CookBookService, CookBookResolver],
  exports: [CookBookService],
})
export class CookBookModule {}
