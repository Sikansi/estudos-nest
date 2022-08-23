import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService],
})
export class CatsModule {
    constructor(private catsService: CatsService) {}
}
