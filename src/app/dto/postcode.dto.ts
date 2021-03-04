import { BaseDto } from './base.dto';
export interface PostCodeDto extends BaseDto {

    postcode: string;
    locality: string;
    longitude: string;
    latitude: string;
}