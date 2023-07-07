import { Type } from "class-transformer";
import {IsString,IsDate } from "class-validator";


export class CreatePersonaDto {
    
    @IsString()
    nom_per:string;
    
    @IsString()
    pat_per:string;
    
    @IsString()
    mat_per:string;
    
    @IsString()
    nro_doc:string;
    
    @Type(()=>Date)
    @IsDate()
    fch_nac:Date;

    @IsString()
    img_per:string
}
