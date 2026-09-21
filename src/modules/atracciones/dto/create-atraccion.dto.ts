import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MinLength, IsArray, ValidateNested, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { PriceDto, LocationDto, PhotoDto, OperatorDto } from './nested-types.dto';

export enum ProductType {
  SINGLE_TICKET = 'SINGLE_TICKET',
  GUIDED_TOUR = 'GUIDED_TOUR',
  PACKAGE = 'PACKAGE'
}

export class CreateAtraccionDto {
  @ApiProperty({ description: 'Nombre de la atracción', example: 'Heineken Experience Amsterdam' })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({ description: 'Descripción detallada', example: 'Discover the history of Heineken...' })
  @IsString()
  @MinLength(10)
  long_description: string;

  @ApiProperty({ description: 'Duración (Formato ISO 8601)', example: 'PT2H' })
  @IsString()
  duration: string;

  @ApiProperty({ description: 'Precio de la atracción', type: PriceDto })
  @ValidateNested()
  @Type(() => PriceDto)
  price: PriceDto;

  @ApiProperty({ description: 'Empresa Operadora', type: OperatorDto })
  @ValidateNested()
  @Type(() => OperatorDto)
  operator: OperatorDto;

  @ApiProperty({ description: 'Tipo de producto', enum: ProductType, example: ProductType.GUIDED_TOUR })
  @IsEnum(ProductType)
  product_type: ProductType;

  @ApiProperty({ description: 'Qué incluye el paquete o tour', example: ['Transporte', 'Guía'] })
  @IsArray()
  @IsString({ each: true })
  includes: string[];

  @ApiProperty({ description: 'Categorías de la atracción', example: ['food_drinks'] })
  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @ApiProperty({ description: 'Insignias comerciales', example: ['best_seller'], required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  badges?: string[];

  @ApiProperty({ description: 'Ubicaciones asociadas a la atracción', type: [LocationDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationDto)
  locations: LocationDto[];

  @ApiProperty({ description: 'Fotos de la atracción', type: [PhotoDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhotoDto)
  photos: PhotoDto[];

  @ApiProperty({ description: 'Idiomas soportados', example: ['en-gb', 'nl'] })
  @IsArray()
  @IsString({ each: true })
  supported_languages: string[];

  @ApiProperty({ description: 'Tiene cancelación gratuita', example: true })
  @IsBoolean()
  free_cancellation: boolean;
}
