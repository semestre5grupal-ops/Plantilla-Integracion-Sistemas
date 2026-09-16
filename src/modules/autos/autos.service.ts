import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Auto } from './entities/auto.entity';

@Injectable()
export class AutosService {
  /*
  constructor(
    @InjectRepository(Auto)
    private readonly autoRepository: Repository<Auto>,
  ) {}
  */

  create(createAutoDto: CreateAutoDto): any {
    return {};
  }

  findAll(): any[] {
    return [];
  }

  findOne(id: string): any {
    return null;
  }
}
