import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ name: 'full_name' })
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
