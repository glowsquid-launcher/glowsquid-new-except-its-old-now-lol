import type { Readable } from 'svelte/store';

export type GetInsideReadable<X> = X extends Readable<infer I> ? I : never;
