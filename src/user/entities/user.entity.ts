import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nomeusuario: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  perfil: string;

  @Column()
  status: boolean;

  @UpdateDateColumn(/* {
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  } */)
  updatedAt: Date;
}
