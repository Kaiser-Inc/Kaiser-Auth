import type { Prisma, User } from "@prisma/client";
import { randomUUID } from "node:crypto";
import type { UsersRepository } from "../users-repository";

export class InMemoryUsersRepository implements UsersRepository {
    public items: User[] = [] 

    async create(data: Prisma.UserCreateInput) {
        const user: User = {
            id: randomUUID(),
            email: data.email,
            name: data.name,
            pasword_hash: data.pasword_hash,
            created_at: new Date()
        }

        await this.items.push(user)

        return user
    }

    async findByEmail(email: string) {
        const user = this.items.find((item) => item.email === email)
    
        if (!user) {
          return null
        }
    
        return user
      }
}