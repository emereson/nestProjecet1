import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaModule } from './persona/persona.module';
import { PersonaEntity } from './persona/entities/persona.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'project1',
      entities: [PersonaEntity],
      synchronize: true,
    }),
    PersonaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
