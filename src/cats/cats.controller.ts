import { CreateCatDto } from './create-cat.dto';
import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
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
    find(@Res({ passthrough: true}) res: Response) {
        res.status(HttpStatus.OK).json([])
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

// Exemplo dado pelo docs com diversos endpoints
// import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
// import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

// @Controller('cats')
// export class CatsController {
//   @Post()
//   create(@Body() createCatDto: CreateCatDto) {
//     return 'This action adds a new cat';
//   }

//   @Get()
//   findAll(@Query() query: ListAllEntities) {
//     return `This action returns all cats (limit: ${query.limit} items)`;
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return `This action returns a #${id} cat`;
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
//     return `This action updates a #${id} cat`;
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return `This action removes a #${id} cat`;
//   }
// }
