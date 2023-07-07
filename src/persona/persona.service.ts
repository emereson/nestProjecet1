import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaEntity } from './entities/persona.entity';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(PersonaEntity)
    private personaEntity: Repository<PersonaEntity>,
  ) {}

 async create(createPersonaDto: CreatePersonaDto) {
  return this.personaEntity.save(await this.personaEntity.create(createPersonaDto));
}


  findAll() {
    return this.personaEntity.find({ take: 100, order: { ide_per: 'DESC' } });
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
