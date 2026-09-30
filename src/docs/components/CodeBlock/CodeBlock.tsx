import { useEffect, useMemo, useState } from 'react';
import { CheckIcon, CopyIcon } from '@phosphor-icons/react';
import { IconButton } from '../../../lib';
import { tokenize } from './highlight';
import { Root, Bar, Pre, Token } from './CodeBlock.styles';

export interface CodeBlockProps {
  code: string;
  language?: 'tsx' | 'bash' | 'text';
  title?: string;
}

export const CodeBlock = ({ code, language = 'tsx', title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const source = code.trim();
  const tokens = useMemo(() => tokenize(source, language), [source, language]);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  return (
    <Root>
      <Bar>
        <span>{title ?? language}</span>
        <IconButton
          size="sm"
          variant={copied ? 'tertiary' : 'secondary'}
          aria-label={copied ? 'Zkopírováno' : 'Zkopírovat kód'}
          onClick={copy}
          icon={copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
        />
      </Bar>
      <Pre>
        <code>
          {tokens.map((token, index) =>
            token.kind === 'plain' ? (
              token.text
            ) : (
              <Token key={index} $kind={token.kind}>
                {token.text}
              </Token>
            ),
          )}
        </code>
      </Pre>
    </Root>
  );
};