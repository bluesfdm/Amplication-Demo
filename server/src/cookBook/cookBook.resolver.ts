import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CookBookResolverBase } from "./base/cookBook.resolver.base";
import { CookBook } from "./base/CookBook";
import { CookBookService } from "./cookBook.service";

@graphql.Resolver(() => CookBook)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CookBookResolver extends CookBookResolverBase {
  constructor(
    protected readonly service: CookBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
