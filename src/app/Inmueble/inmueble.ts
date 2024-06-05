export interface Inmueble{
    _id?: string;
    referencia?: number;
    descripcion?: string;
    direccion?: string;
    superficie?: number;
    tipo?: string;
    tamano?: number;
    urbanizacion?:string;
    habitaciones?:number;
    banios?:number;
    cocinas?:number;
    puerta_blindada?:boolean;
    parqueadero?:boolean;
    num_puertas?:number;
    diafono?:boolean;
    acondicionado?:boolean;
    zona_ciudad?:string;
    estado?:string;
    precio_alquiler?:number;
    precio_venta?:number;
    nom_propietario?:string;
    tel_propietario?:string;
}