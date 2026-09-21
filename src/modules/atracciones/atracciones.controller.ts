import { Controller, Get, Post, Body, Patch, Put, Param, Delete, ParseUUIDPipe, Res, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { Response } from 'express';
import { AtraccionesService } from './atracciones.service';
import { CreateAtraccionDto } from './dto/create-atraccion.dto';
import { UpdateAtraccionDto } from './dto/update-atraccion.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AtraccionResponseDto } from './dto/atraccion-response.dto';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { PaginatedResponseDto } from '../../common/dto/paginated-response.dto';

@ApiTags('Atracciones')
@Controller('atracciones')
export class AtraccionesController {
  constructor(private readonly atraccionesService: AtraccionesService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar una nueva atracción' })
  @ApiResponse({ status: 201, description: 'La atracción ha sido creada exitosamente. Devuelve cabecera Location.', type: AtraccionResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request. Datos de entrada inválidos.' })
  create(
    @Body() createAtraccionDto: CreateAtraccionDto,
    @Res({ passthrough: true }) res: Response
  ): AtraccionResponseDto {
    const atraccion = this.atraccionesService.create(createAtraccionDto);
    res.setHeader('Location', `/api/v1/atracciones/${atraccion.id || 'uuid-generado'}`);
    return atraccion;
  }

  @Get()
  @ApiOperation({ summary: 'Obtener el listado paginado de atracciones' })
  @ApiResponse({ status: 200, description: 'Listado de atracciones recuperado exitosamente.', type: PaginatedResponseDto })
  findAll(@Query() query: PaginationQueryDto) {
    return this.atraccionesService.findAll(query);
  }

  @Get('health')
  @ApiOperation({ summary: 'Healthcheck del microservicio para el API Gateway (Reto 2)' })
  @ApiResponse({ status: 200, description: 'Servicio de atracciones operativo.' })
  checkHealth() {
    return { status: 'UP', timestamp: new Date().toISOString() };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener el detalle de una atracción por su ID' })
  @ApiParam({ name: 'id', description: 'UUID de la atracción', type: 'string', format: 'uuid' })
  @ApiResponse({ status: 200, description: 'Detalle de la atracción.', type: AtraccionResponseDto })
  @ApiResponse({ status: 404, description: 'Not Found. La atracción no existe.' })
  findOne(@Param('id', ParseUUIDPipe) id: string): AtraccionResponseDto {
    return this.atraccionesService.findOne(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Reemplazar completamente los datos de una atracción' })
  @ApiParam({ name: 'id', description: 'UUID de la atracción', type: 'string', format: 'uuid' })
  @ApiResponse({ status: 204, description: 'La atracción ha sido reemplazada correctamente.' })
  @ApiResponse({ status: 400, description: 'Bad Request. Datos de entrada inválidos.' })
  @ApiResponse({ status: 404, description: 'Not Found. La atracción no existe.' })
  replace(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() createAtraccionDto: CreateAtraccionDto,
  ): void {
    this.atraccionesService.replace(id, createAtraccionDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente los datos de una atracción' })
  @ApiParam({ name: 'id', description: 'UUID de la atracción', type: 'string', format: 'uuid' })
  @ApiResponse({ status: 200, description: 'La atracción ha sido actualizada.', type: AtraccionResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request. Datos de entrada inválidos.' })
  @ApiResponse({ status: 404, description: 'Not Found. La atracción no existe.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAtraccionDto: UpdateAtraccionDto,
  ): AtraccionResponseDto {
    return this.atraccionesService.update(id, updateAtraccionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar o desactivar una atracción' })
  @ApiParam({ name: 'id', description: 'UUID de la atracción', type: 'string', format: 'uuid' })
  @ApiResponse({ status: 204, description: 'La atracción ha sido eliminada correctamente.' })
  @ApiResponse({ status: 404, description: 'Not Found. La atracción no existe.' })
  remove(@Param('id', ParseUUIDPipe) id: string): void {
    this.atraccionesService.remove(id);
  }
}
