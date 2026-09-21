import { Injectable } from '@nestjs/common';
import { CreateAtraccionDto } from './dto/create-atraccion.dto';
import { UpdateAtraccionDto } from './dto/update-atraccion.dto';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

@Injectable()
export class AtraccionesService {
  create(createAtraccionDto: CreateAtraccionDto): any {
    return { id: 'uuid-1234' };
  }

  findAll(query: PaginationQueryDto): any[] {
    return [];
  }

  findOne(id: string): any {
    return null;
  }

  replace(id: string, createAtraccionDto: CreateAtraccionDto): void {
    // Reemplazo completo
  }

  update(id: string, updateAtraccionDto: UpdateAtraccionDto): any {
    return null;
  }

  remove(id: string): void {
    // Eliminación
  }
}
