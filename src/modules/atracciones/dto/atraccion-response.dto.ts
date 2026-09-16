import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseDto } from '../../../common/dto/base-response.dto';

export class AtraccionResponseDto extends BaseResponseDto {
  @ApiProperty({ description: 'UUID único de la atracción', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ description: 'Nombre de la atracción turística', example: 'Tour al Parque Nacional Cotopaxi' })
  nombre: string;

  @ApiProperty({ description: 'Descripción detallada de la atracción', example: 'Excursión guiada al volcán Cotopaxi, incluye caminata hasta el refugio.' })
  descripcion: string;

  @ApiProperty({ description: 'Ciudad principal desde donde opera', example: 'Quito' })
  ciudad: string;

  @ApiProperty({ description: 'Latitud geográfica de la atracción', example: -0.680556 })
  latitud: number;

  @ApiProperty({ description: 'Longitud geográfica de la atracción', example: -78.437778 })
  longitud: number;

  @ApiProperty({ description: 'Precio del ticket por persona (USD)', example: 45.00 })
  precioTicket: number;

  @ApiProperty({ description: 'Duración estimada del tour o visita en horas', example: 8 })
  duracionHoras: number;

  @ApiProperty({ description: 'Estado de disponibilidad de la atracción', example: true })
  estaActivo: boolean;

  @ApiProperty({
    description: 'HATEOAS links para navegación',
    example: {
      self: { href: '/api/v1/atracciones/123e4567-e89b-12d3-a456-426614174000', method: 'GET' },
      actualizar: { href: '/api/v1/atracciones/123e4567-e89b-12d3-a456-426614174000', method: 'PATCH' },
      eliminar: { href: '/api/v1/atracciones/123e4567-e89b-12d3-a456-426614174000', method: 'DELETE' }
    }
  })
  _links?: any;
}
