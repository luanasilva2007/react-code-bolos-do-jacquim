export interface Bolo {
    nome: string;
    id: string | undefined;
    caegoria: string[];
    imagens: string[];
    preco: number;
    peso: number | null;
}