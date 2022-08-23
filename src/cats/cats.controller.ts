import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post('new')
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This action adds a new cat';
    }
    
    @Get('list-all')
    async findAll(@Req() request: Request): Promise<any[]>{
        return [];
    }

    @Get('ab*cd')
    find() {
        return 'This route uses a wildcard';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if(version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/'};
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return 'This action returns a cat #${id} cat';
    }
}
