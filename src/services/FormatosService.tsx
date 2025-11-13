export const FormatosService = {
    precoBR: (preco: number): string => {
        return `${preco.toLocaleString('pT-BR', {
            style: 'currency',
            currency: 'BRL'

        })}`
    },
    pesoEmKg: (valorpeso: number): string => {
        return `${valorpeso.toLocaleString('pT-BR',{minimumFractionDigits: 3})} Kg`
    }
}