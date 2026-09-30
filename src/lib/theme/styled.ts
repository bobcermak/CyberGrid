import { useContext } from 'react';
import { styled as baseStyled, ThemeContext, type DefaultTheme } from 'styled-components';
import { lightTheme, type Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
export const resolveTheme = (theme?: Partial<DefaultTheme>): DefaultTheme =>
  theme?.colors ? (theme as DefaultTheme) : lightTheme;
export const useTheme = (): DefaultTheme => resolveTheme(useContext(ThemeContext));
type AnyFn = (...args: unknown[]) => unknown;
const chainable = new Set<PropertyKey>(['attrs', 'withConfig']);
const withDefaultTheme = (component: unknown) => {
  const target = component as { defaultProps?: object };
  target.defaultProps = { ...target.defaultProps, theme: lightTheme };
  return component;
};
const wrapTemplate = (template: AnyFn): AnyFn =>
  new Proxy(template, {
    apply: (fn, thisArg, args) => withDefaultTheme(Reflect.apply(fn, thisArg, args)),
    get: (fn, key) => {
      const value = Reflect.get(fn, key);
      return chainable.has(key) && typeof value === 'function'
        ? (...args: unknown[]) => wrapTemplate((value as AnyFn).apply(fn, args) as AnyFn)
        : value;
    },
  });
export const styled = new Proxy(baseStyled, {
  apply: (fn, thisArg, args) => wrapTemplate(Reflect.apply(fn, thisArg, args) as AnyFn),
  get: (fn, key) => {
    const value = Reflect.get(fn, key);
    return typeof value === 'function' ? wrapTemplate(value as AnyFn) : value;
  },
}) as typeof baseStyled;