export class NoticiaDTO {
    id: number;
    titulo: string;
    desc_corta: string;
    desc_larga: string;
    imagen: string;
    categoria: string;
    like: boolean;

    constructor(id: number, titulo: string,
        desc_corta: string, desc_larga: string,
        imagen: string, categoria: string, like: boolean) {
        this.id = id;
        this.titulo = titulo;
        this.desc_corta = desc_corta;
        this.desc_larga = desc_larga;
        this.imagen = imagen;
        this.categoria = categoria;
        this.like = like;
    }
}