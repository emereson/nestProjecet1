import { Column, Entity,PrimaryGeneratedColumn} from "typeorm"

@Entity({schema:'siam',name:'personas'})
export class PersonaEntity {
    @PrimaryGeneratedColumn()
    ide_per:number;
    
    @Column()
    nom_per:string;

    
    @Column()
    pat_per:string;
    
    
    @Column()
    mat_per:string;
    
    
    @Column()
    nro_doc:string;

    
    @Column()
    fch_nac:Date;

    @Column()
    img_per:string
}
