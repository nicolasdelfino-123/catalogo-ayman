const normalizeText = (value = "") =>
    String(value || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

export const CATEGORY_GROUPS = [
    {
        name: "Árabes",
        slug: "arabes",
        children: [
            { id: 1, name: "Mujer", slug: "arabes-mujer" },
            { id: 2, name: "Hombre", slug: "arabes-hombre" },
            { id: 3, name: "Unisex", slug: "arabes-unisex" },
        ],
    },
    {
        name: "Tradicionales",
        slug: "tradicionales",
        children: [
            { id: 4, name: "Hombre", slug: "tradicionales-hombre" },
            { id: 5, name: "Mujer", slug: "tradicionales-mujer" },
            { id: 6, name: "Unisex", slug: "tradicionales-unisex" },
        ],
    },
    {
        id: 7,
        name: "Cuidado personal",
        slug: "cuidado-personal",
    },
    {
        id: 8,
        name: "Body splash",
        slug: "body-splash",
    },
    {
        name: "Electrodomésticos",
        slug: "electrodomesticos",
        children: [
            { id: 20, name: "Línea blanca", slug: "linea-blanca" },
            { id: 21, name: "Licuadoras", slug: "licuadoras" },
            { id: 22, name: "Cafeteras", slug: "cafeteras" },
            { id: 23, name: "Ollas de presión", slug: "ollas-de-presion" },
            { id: 24, name: "Sartenes eléctricos", slug: "sartenes-electricos" },
            { id: 25, name: "Estufas gas", slug: "estufas-gas" },
            { id: 26, name: "Estufas eléctricas", slug: "estufas-electricas" },
            { id: 27, name: "Batidoras", slug: "batidoras" },
            { id: 28, name: "Ollas y sartenes", slug: "ollas-y-sartenes" },
            { id: 29, name: "Arroceras", slug: "arroceras" },
            { id: 30, name: "Ollas multiuso", slug: "ollas-multiuso" },
            { id: 31, name: "Freidoras de aire", slug: "freidoras-de-aire" },
            { id: 32, name: "Sandwicheras", slug: "sandwicheras" },
            { id: 33, name: "Procesador de alimentos", slug: "procesador-de-alimentos" },
            { id: 34, name: "Extractor de jugos", slug: "extractor-de-jugos" },
        ],
    },
];

export const PERFUME_CATEGORY_DEFINITIONS = CATEGORY_GROUPS.flatMap((category) =>
    category.children?.length ? category.children : [category]
);

export const PERFUME_CATEGORY_NAMES = PERFUME_CATEGORY_DEFINITIONS.map((category) => category.name);

export const CATEGORY_ID_TO_NAME = PERFUME_CATEGORY_DEFINITIONS.reduce((acc, category) => {
    acc[category.id] = category.name;
    return acc;
}, {});

export const CATEGORY_NAME_TO_ID = PERFUME_CATEGORY_DEFINITIONS.reduce((acc, category) => {
    acc[category.name] = category.id;
    return acc;
}, {
    Masculinos: 2,
    "Perfumes masculinos": 2,
    "Perfumes Masculinos": 2,
    "Fragancias de Hombre": 2,
    "Vapes Desechables": 2,
    "Perfumes de Diseñador": 4,
    "Perfumes de Disenador": 4,
    Resistencias: 20,
    Perfumes: 4,
    Femeninos: 1,
    "Fragancias de Mujer": 1,
    "Pods Recargables": 1,
    "Productos Karseell": 7,
    Unisex: 3,
    "Líquidos": 8,
    Celulares: 20,
    "Body splash victoria secret": 8,
    "Body Splash Victoria Secret": 8,
});

export const LEGACY_CATEGORY_NAME_TO_CURRENT = {
    "Fragancias de Hombre": "Hombre",
    "Fragancias de Mujer": "Mujer",
    "Vapes Desechables": "Hombre",
    "Pods Recargables": "Mujer",
    "Líquidos": "Body splash",
    Resistencias: "Línea blanca",
    Celulares: "Línea blanca",
    Perfumes: "Hombre",
    "Productos Karseell": "Cuidado personal",
    Unisex: "Unisex",
    "Body splash victoria secret": "Body splash",
    "Body Splash Victoria Secret": "Body splash",
    "Perfumes de Diseñador": "Hombre",
    "Perfumes de Disenador": "Hombre",
    Masculinos: "Hombre",
    Femeninos: "Mujer",
};

export const SLUG_TO_NAME = CATEGORY_GROUPS.reduce((acc, category) => {
    acc[category.slug] = category.name;
    for (const child of category.children || []) acc[child.slug] = child.name;
    return acc;
}, {
    masculinos: "Hombre",
    femeninos: "Mujer",
    "perfumes-masculinos": "Hombre",
    perfumes: "Hombre",
    "vapes-desechables": "Hombre",
    resistencias: "Línea blanca",
    "perfumes-de-disenador": "Hombre",
    "pods-recargables": "Mujer",
    unisex: "Unisex",
    liquidos: "Body splash",
    celulares: "Línea blanca",
    "body-splash-victoria-secret": "Body splash",
});

export const SLUG_TO_IDS = CATEGORY_GROUPS.reduce((acc, category) => {
    if (category.children?.length) {
        acc[category.slug] = category.children.map((child) => child.id);
        for (const child of category.children) acc[child.slug] = [child.id];
    } else {
        acc[category.slug] = [category.id];
    }
    return acc;
}, {
    masculinos: [2],
    femeninos: [1],
    "perfumes-masculinos": [2],
    perfumes: [4],
    "vapes-desechables": [2],
    resistencias: [20],
    "perfumes-de-disenador": [4],
    "pods-recargables": [1],
    unisex: [3],
    liquidos: [8],
    celulares: [20],
    "body-splash-victoria-secret": [8],
});

export const SLUG_TO_ID = Object.fromEntries(
    Object.entries(SLUG_TO_IDS).map(([slug, ids]) => [slug, ids[0]])
);

export const NAME_TO_SLUG = PERFUME_CATEGORY_DEFINITIONS.reduce((acc, category) => {
    acc[category.name] = category.slug;
    return acc;
}, {
    Masculinos: "arabes-hombre",
    "Perfumes masculinos": "arabes-hombre",
    "Perfumes Masculinos": "arabes-hombre",
    "Fragancias de Hombre": "arabes-hombre",
    "Vapes Desechables": "arabes-hombre",
    Resistencias: "linea-blanca",
    Perfumes: "tradicionales-hombre",
    "Perfumes de Diseñador": "tradicionales-hombre",
    "Perfumes de Disenador": "tradicionales-hombre",
    Femeninos: "arabes-mujer",
    "Fragancias de Mujer": "arabes-mujer",
    "Pods Recargables": "arabes-mujer",
    "Productos Karseell": "cuidado-personal",
    Unisex: "arabes-unisex",
    "Líquidos": "body-splash",
    Celulares: "linea-blanca",
    "Body splash victoria secret": "body-splash",
    "Body Splash Victoria Secret": "body-splash",
});

export const mapCategoryIdFromName = (value = "") => {
    const exact = CATEGORY_NAME_TO_ID[value] || CATEGORY_NAME_TO_ID[LEGACY_CATEGORY_NAME_TO_CURRENT[value]];
    if (exact) return exact;

    const normalized = normalizeText(value);

    const match = PERFUME_CATEGORY_DEFINITIONS.find(
        (category) => normalizeText(category.name) === normalized
    );
    if (match) return match.id;

    if (normalized.includes("body") || normalized.includes("victoria")) return 8;
    if (normalized.includes("cuidado") || normalized.includes("karseell") || normalized.includes("crema")) return 7;
    if (normalized.includes("tradicional") || normalized.includes("disenador")) {
        if (normalized.includes("mujer") || normalized.includes("femen")) return 5;
        if (normalized.includes("unisex")) return 6;
        return 4;
    }
    if (normalized.includes("unisex")) return 3;
    if (normalized.includes("mujer") || normalized.includes("femen")) return 1;
    if (normalized.includes("hombre") || normalized.includes("mascul")) return 2;
    if (
        normalized.includes("licuadora") ||
        normalized.includes("cafetera") ||
        normalized.includes("olla") ||
        normalized.includes("sarten") ||
        normalized.includes("estufa") ||
        normalized.includes("batidora") ||
        normalized.includes("arrocera") ||
        normalized.includes("freidora") ||
        normalized.includes("sandwichera") ||
        normalized.includes("procesador") ||
        normalized.includes("extractor") ||
        normalized.includes("linea blanca")
    ) {
        const electro = PERFUME_CATEGORY_DEFINITIONS.find((category) =>
            normalized.includes(normalizeText(category.name))
        );
        return electro?.id || 20;
    }

    return 1;
};

export const getNormalizedCategoryId = (product) => {
    const byId = CATEGORY_ID_TO_NAME[Number(product?.category_id)];
    if (byId) return Number(product.category_id);

    const raw = String(product?.category_name || "").trim();
    if (!raw) return 1;

    return CATEGORY_NAME_TO_ID[LEGACY_CATEGORY_NAME_TO_CURRENT[raw] || raw] || mapCategoryIdFromName(raw);
};

export const getDisplayCategoryName = (product) => {
    const normalizedId = getNormalizedCategoryId(product);
    return CATEGORY_ID_TO_NAME[normalizedId] || "Mujer";
};
