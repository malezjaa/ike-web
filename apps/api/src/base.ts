import { Elysia, type ElysiaConfig } from 'elysia';

const baseElysia = <
  const BasePath extends string = '',
  const Scoped extends boolean = false,
>(
  config?: ElysiaConfig<BasePath, Scoped>,
) => new Elysia(config);

const createBaseElysia = (config?: Parameters<typeof baseElysia>[0]) =>
  new Elysia(config) as ReturnType<typeof baseElysia>;

export { createBaseElysia, baseElysia };
