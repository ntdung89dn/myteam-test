

export type Transformation = {
    partNum: string;
    size: number;
    qty: number;
};

export type Timer = {
    transaction: string;
    transformations: Transformation[];
};