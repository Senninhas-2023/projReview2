
export function sumOnly(...parcelas: number[]): number {
    return parcelas.reduce((total, parcela) => total + parcela);
} 

export function sumAndMultiply(...parcelas: number[]): number {
    return parcelas.reduce((total, parcela) => total + parcela) * parcelas.length;
}