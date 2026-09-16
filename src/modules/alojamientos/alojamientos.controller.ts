import { Controller, Get, Post, Body, Param, Query, ParseUUIDPipe } from '@nestjs/common';
import { AlojamientosService } from './alojamientos.service';
import { CreateAlojamientoDto } from './dto/create-alojamiento.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { PaginatedResponseDto } from '../../common/dto/paginated-response.dto';
import { AlojamientoResponseDto } from './dto/alojamiento-response.dto';

@ApiTags('Alojamientos')
@Controller('alojamientos')
export class AlojamientosController {
  constructor(private readonly alojamientosService: AlojamientosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo alojamiento' })
  @ApiResponse({ status: 201, description: 'Alojamiento creado exitosamente', type: AlojamientoResponseDto })
  create(@Body() createAlojamientoDto: CreateAlojamientoDto): AlojamientoResponseDto {
    // Plantilla: el servicio está vacío pero devuelve lo esperado
    const alojamiento = this.alojamientosService.create(createAlojamientoDto);
    return null; // Implementación de negocio
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los alojamientos con paginación' })
  @ApiResponse({ status: 200, description: 'Lista paginada de alojamientos' })
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    const alojamientos = this.alojamientosService.findAll();
    return null; // Implementación de negocio
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un alojamiento por ID' })
  @ApiParam({ name: 'id', description: 'UUID del alojamiento' })
  @ApiResponse({ status: 200, description: 'Alojamiento encontrado', type: AlojamientoResponseDto })
  findOne(@Param('id', ParseUUIDPipe) id: string): AlojamientoResponseDto {
    const alojamiento = this.alojamientosService.findOne(id);
    return null; // Implementación de negocio
  }
}
