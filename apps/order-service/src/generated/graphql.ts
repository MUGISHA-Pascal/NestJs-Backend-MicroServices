
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateOrderInput {
    status?: Nullable<string>;
    totalPrice?: Nullable<number>;
    userId?: Nullable<number>;
}

export interface UpdateOrderInput {
    id: number;
}

export interface IMutation {
    createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;
    removeOrder(id: number): Nullable<Order> | Promise<Nullable<Order>>;
    updateOrder(updateOrderInput: UpdateOrderInput): Order | Promise<Order>;
}

export interface Order {
    id?: Nullable<number>;
    status?: Nullable<string>;
    totalPrice?: Nullable<number>;
    userId?: Nullable<number>;
}

export interface IQuery {
    getAllOrders(): Nullable<Order>[] | Promise<Nullable<Order>[]>;
    getOrder(id?: Nullable<number>): Nullable<Order> | Promise<Nullable<Order>>;
    order(id: number): Nullable<Order> | Promise<Nullable<Order>>;
    orders(): Nullable<Order>[] | Promise<Nullable<Order>[]>;
}

type Nullable<T> = T | null;
