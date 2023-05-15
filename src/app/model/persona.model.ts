export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    descripcion:string;
    img: String;

    constructor(nombre: String,apellido: String,descripcion:string,img: String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.descripcion=descripcion;
        this.img=img;
    }
}