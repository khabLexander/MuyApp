import { PersonaRol } from './persona-rol';
export interface PersonaLogin {
  id:number,
  nombre:string,
  apellido:string,
  correoElectronico:string,
  psw: string,
  foto: string,
  createdAt?: Date,
  updatedAt?: Date,
  PersonaRol: PersonaRol[]
}