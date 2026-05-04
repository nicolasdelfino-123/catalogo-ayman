export const PRICE_SYMBOL = "₡";

export const formatPrice = (value) => {
    if (value == null || value === "") return "";

    const num = Number(value);
    if (!Number.isFinite(num)) return "";

    return num.toLocaleString("es-AR", {
        minimumFractionDigits: Number.isInteger(num) ? 0 : 2,
        maximumFractionDigits: 2,
    });
};
