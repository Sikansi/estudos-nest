import { CreateCatDto } from './create-cat.dto';
import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';

@Controller('cats')
export class CatsController {
    @Post('new')
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }
    
    @Get('list-all')
    findAll(): Observable<any[]> {
        return of([]);
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
