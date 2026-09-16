import { Controller, Get, Post, Body, Param, Query, ParseUUIDPipe } from '@nestjs/common';
import { AutosService } from './autos.service';
import { CreateAutoDto } from './dto/create-auto.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { AutoResponseDto } from './dto/auto-response.dto';

@ApiTags('Autos')
@Controller('autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo auto para renta' })
  @ApiResponse({ status: 201, description: 'Auto creado exitosamente', type: AutoResponseDto })
  create(@Body() createAutoDto: CreateAutoDto): AutoResponseDto {
    return null;
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los autos con paginación' })
  @ApiResponse({ status: 200, description: 'Lista paginada de autos' })
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return null;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un auto por ID' })
  @ApiParam({ name: 'id', description: 'UUID del auto' })
  @ApiResponse({ status: 200, description: 'Auto encontrado', type: AutoResponseDto })
  findOne(@Param('id', ParseUUIDPipe) id: string): AutoResponseDto {
    return null;
  }
}
