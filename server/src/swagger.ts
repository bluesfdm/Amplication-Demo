import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("demo")
  .setDescription(
    'amplication 测试项目\n\n## Congratulations! Your application is ready.\n  \nPlease note that all endpoints are secured with HTTP Basic authentication.\nBy default, your app comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .setVersion("qs8646jg")
  .addBasicAuth()
  .build();

export const swaggerSetupOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "demo",
};
