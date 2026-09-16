import { Injectable } from '@nestjs/common';
import { CreateAlojamientoDto } from './dto/create-alojamiento.dto';
import { Alojamiento } from './entities/alojamiento.entity';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AlojamientosService {
  /*
  constructor(
    @InjectRepository(Alojamiento)
    private readonly alojamientoRepository: Repository<Alojamiento>,
  ) {}
  */

  create(createAlojamientoDto: CreateAlojamientoDto): any {
    // TODO: Implementar lógica de creación usando this.alojamientoRepository
    return {};
  }

  findAll(): any[] {
    // TODO: Implementar lógica de búsqueda con paginación
    return [];
  }

  findOne(id: string): any {
    // TODO: Implementar lógica de búsqueda por ID
    return null;
  }
}
