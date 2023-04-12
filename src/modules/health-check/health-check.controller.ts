import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { HealthCheck, HealthCheckService, HttpHealthIndicator, TypeOrmHealthIndicator } from "@nestjs/terminus";

@Controller('health')
export class HealthCheckController {
    constructor(
        private healthCheckService: HealthCheckService,
        private http: HttpHealthIndicator,
        private db: TypeOrmHealthIndicator,
    ){}
@ApiTags('Health')
    @Get()
    @HealthCheck()
    checkHealth() {
        console.log("hola mundo")
        return this.healthCheckService.check([
            () => this.http.pingCheck('Basic Check', 'http://localhost:3000/users'),
            () => this.db.pingCheck('library')
        ]);
    }
}