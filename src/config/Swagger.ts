import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger'
require('dotenv').config()

const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
  .setTitle('Example service in Nest JS')
  .setDescription('description to service')
  .setVersion('1.0.0')
  .addTag('Simple Health Check')
  .build()

/**
 * Configure API documentation on /api
 */
export function swaggerSetUp(app: INestApplication): void {
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(process.env.SWAGGER_ENDPOINT, app, document)
}
