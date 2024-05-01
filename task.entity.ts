@Column({name: 'user_id'})
userId!: number

@ManyToOne(() => User, user => user.tasks)
user!: User