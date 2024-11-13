import { randomUUID } from "node:crypto";

export class Account {
  constructor({
    lastName,
    firstName,
    id = randomUUID(),
    creationDate = new Date(),
  }) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.creationDate = creationDate;
  }
}