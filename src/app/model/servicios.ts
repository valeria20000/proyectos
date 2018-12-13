export class Servicios {
    
    private _id: number;
   
    private _nombre: string;
   
    private _disponible: boolean;
   

    constructor(){
        this._id = -1;
        this._nombre = '';
        this._disponible = false;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get disponible(): boolean {
        return this._disponible;
    }
    public set disponible(value: boolean) {
        this._disponible = value;
    }


}