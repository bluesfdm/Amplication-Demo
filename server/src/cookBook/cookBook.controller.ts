import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CookBookService } from "./cookBook.service";
import { CookBookControllerBase } from "./base/cookBook.controller.base";

@swagger.ApiTags("cookBooks")
@common.Controller("cookBooks")
export class CookBookController extends CookBookControllerBase {
  constructor(
    protected readonly service: CookBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
