import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calls')
export class Call {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  caller_name: string;

  @Column()
  phone: string;

  @Column({ type: 'timestamp' })
  call_time: Date;

  @Column('text', { array: true })
  tags: string[];

  @Column()
  status: string;

  @Column()
  issue: string;

  @Column()
  resolution: string;

  @Column()
  department: string;

  @Column()
  location: string;

  @Column({ type: 'jsonb', nullable: true })
  metadata: {
    notes?: string;
    transcript?: string;
    feedback?: any;
    audit_logs?: any[];
  };
}
