import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'db1', name: 'USER_INFO' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'USER_INDEX' })
  userIndex: number;

  @Column('varchar', { name: 'NAME', length: 20 })
  name: string;

  @Column('varchar', { name: 'ID', length: 20 })
  id: string;

  @Column('varchar', { name: 'PASSWORD', length: 30 })
  password: string;

  @Column('varchar', { name: 'SALT', length: 30 })
  salt: string;

  @Column('int', { name: 'TYPE' })
  type: string;

  @Column('int', { name: 'GENDER' })
  gender: string;

  @Column('varchar', { name: 'EMAIL', length: 50 })
  email: string;

  @Column('date', { name: 'BIRTH_DATE' })
  brthDate: Date;

  // @CreateDateColumn('frstRgstrDt', { name: 'FRST_RGSTR_DT' })
  // frstRgstrDt: Date;

  // @UpdateDateColumn('lastRgstrDt', { name: 'LAST_RGSTR_DT' })
  // lastRgstrDt: Date;

  // @CreateDateColumn()
  // createdAt: Date;

  // @UpdateDateColumn()
  // updatedAt: Date;

  // @DeleteDateColumn()
  // deletedAt: Date | null;

  //   @OneToMany(() => Posts, (posts) => posts.UserId)
  //   OwnedUserPosts: Posts[];
}

// tracert www.google.com
