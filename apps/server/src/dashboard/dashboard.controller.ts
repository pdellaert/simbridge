import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import serverConfig from '../config/server.config';

@Controller('')
export class DashboardController {
    constructor(
    @Inject(serverConfig.KEY) private serverConf: ConfigType<typeof serverConfig>,
    ) {}

    private readonly logger = new Logger(DashboardController.name);

    @Get()
    dashboard() {
        return 'DUMMY';
    }
}
