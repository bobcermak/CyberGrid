export type TokenKind = 'comment' | 'string' | 'tag' | 'keyword' | 'number' | 'plain';
export interface Token {
  kind: TokenKind;
  text: string;
}

const TSX =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|\{\/\*[\s\S]*?\*\/\})|('(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|`(?:\\.|[^`\\])*`)|(<\/?[A-Za-z][\w.]*|(?<!=)\/?>)|\b(import|from|export|const|let|return|function|type|interface|extends|default|as|new|if|else|true|false|null|undefined|await|async)\b|\b(\d+(?:\.\d+)?)\b/g;

const BASH = /(#[^\n]*)|('(?:[^'])*'|"(?:[^"])*")|()\b(npm|npx|git|cd|pnpm|yarn)\b|(--?[\w-]+)/g;

const kinds: TokenKind[] = ['comment', 'string', 'tag', 'keyword', 'number'];

export const tokenize = (code: string, language: 'tsx' | 'bash' | 'text'): Token[] => {
  if (language === 'text') return [{ kind: 'plain', text: code }];

  const pattern = new RegExp((language === 'bash' ? BASH : TSX).source, 'g');
  const tokens: Token[] = [];
  let last = 0;

  for (const match of code.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) tokens.push({ kind: 'plain', text: code.slice(last, index) });
    const group = match.slice(1).findIndex((value) => value !== undefined && value !== '');
    tokens.push({ kind: kinds[group] ?? 'plain', text: match[0] });
    last = index + match[0].length;
  }

  if (last < code.length) tokens.push({ kind: 'plain', text: code.slice(last) });
  return tokens;
};