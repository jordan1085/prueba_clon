import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from './modules/health-check/health-check.controller';
import { AppConfigModule } from './modules/database/config.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TerminusModule, HttpModule , AppConfigModule, UsersModule,
  ],
  controllers: [ HealthCheckController],
  providers: [],
})
export class AppModule {}