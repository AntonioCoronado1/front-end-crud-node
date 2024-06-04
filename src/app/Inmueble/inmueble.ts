export interface Inmueble{
    _id?: string;
    referencia?: number;
    descripcion?: string;
    direccion?: string;
    superficie?: number;
    tipo?: string;
    tamaño?: number;
    urbanizacion?:string;
    baños?:number;
    puerta_blindad?:boolean;
    diafono?:boolean;
    acondicionado?:boolean;
    zona_ciudad?:string;
    estado?:string;
    precio_alquler?:number;
    precio_venta?:number;
    nom_propietario?:string;
    tel_propietario?:string;
}