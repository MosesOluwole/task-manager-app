import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Task {
  @PrimaryKey()
  id!: number;

  @Property()
  title: string;

  @Property()
  description: string;

  @Property({ default: false })
  completed: boolean;
}
