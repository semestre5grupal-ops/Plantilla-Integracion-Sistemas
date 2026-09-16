import { Controller, Get, Post, Body, Param, Query, ParseUUIDPipe } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { VueloResponseDto } from './dto/vuelo-response.dto';

@ApiTags('Vuelos')
@Controller('vuelos')
export class VuelosController {
  constructor(private readonly vuelosService: VuelosService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo vuelo' })
  @ApiResponse({ status: 201, description: 'Vuelo creado exitosamente', type: VueloResponseDto })
  create(@Body() createVueloDto: CreateVueloDto): VueloResponseDto {
    return null;
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los vuelos con paginación' })
  @ApiResponse({ status: 200, description: 'Lista paginada de vuelos' })
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return null;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un vuelo por ID' })
  @ApiParam({ name: 'id', description: 'UUID del vuelo' })
  @ApiResponse({ status: 200, description: 'Vuelo encontrado', type: VueloResponseDto })
  findOne(@Param('id', ParseUUIDPipe) id: string): VueloResponseDto {
    return null;
  }
}
