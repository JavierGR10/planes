const ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+\-.]*:/i;

const ROUTE_KEYS = new Set(['basePath', 'href', 'buttonHref', 'allProductsHref']);

const normalizeBaseUrl = (baseUrl: string): string => {
  if (!baseUrl || baseUrl === '/') {
    return '';
  }

  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
};

export const withBasePath = (value: string): string => {
  if (
    !value ||
    value.startsWith('#') ||
    value.startsWith('?') ||
    ABSOLUTE_URL_PATTERN.test(value) ||
    value.startsWith('//') ||
    !value.startsWith('/')
  ) {
    return value;
  }

  const baseUrl = normalizeBaseUrl(import.meta.env.BASE_URL ?? '/');

  if (!baseUrl || value === baseUrl || value.startsWith(`${baseUrl}/`)) {
    return value;
  }

  return `${baseUrl}${value}`;
};

export const withBasePathConfig = <T>(value: T): T => {
  if (Array.isArray(value)) {
    return value.map((item) => withBasePathConfig(item)) as T;
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, entryValue]) => {
      if (typeof entryValue === 'string' && ROUTE_KEYS.has(key)) {
        return [key, withBasePath(entryValue)];
      }

      return [key, withBasePathConfig(entryValue)];
    })
  ) as T;
};
