
export function sumOnly(...parcelas: number[]): number {
    return parcelas.reduce((total, parcela) => total + parcela);
} 
export function sumWithDiscount(disc: number, ...parcelas: number[]): number {
    return sumOnly(...parcelas) * (1 - disc);
}
