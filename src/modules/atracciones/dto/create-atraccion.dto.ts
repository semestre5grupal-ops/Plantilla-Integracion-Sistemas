import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsLatitude, IsLongitude, IsNumber, IsOptional, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateAtraccionDto {
  @ApiProperty({ description: 'Nombre de la atracción turística', example: 'Tour al Parque Nacional Cotopaxi' })
  @IsString()
  @MinLength(3)
  nombre: string;

  @ApiProperty({ description: 'Descripción detallada de la atracción', example: 'Excursión guiada al volcán Cotopaxi, incluye caminata hasta el refugio José Rivas a 4864 msnm.' })
  @IsString()
  @MinLength(10)
  descripcion: string;

  @ApiProperty({ description: 'Ciudad principal desde donde opera', example: 'Quito' })
  @IsString()
  @MinLength(3)
  ciudad: string;

  @ApiProperty({ description: 'Latitud geográfica de la atracción', example: -0.680556 })
  @IsLatitude()
  @IsNumber()
  latitud: number;

  @ApiProperty({ description: 'Longitud geográfica de la atracción', example: -78.437778 })
  @IsLongitude()
  @IsNumber()
  longitud: number;

  @ApiProperty({ description: 'Precio del ticket por persona (USD)', example: 45.00 })
  @IsNumber()
  @IsPositive()
  precioTicket: number;

  @ApiProperty({ description: 'Duración estimada del tour o visita en horas', example: 8 })
  @IsInt()
  @Min(1)
  duracionHoras: number;

  @ApiProperty({ description: 'Estado de disponibilidad de la atracción', example: true, required: false })
  @IsOptional()
  @IsBoolean()
  estaActivo?: boolean;
}
