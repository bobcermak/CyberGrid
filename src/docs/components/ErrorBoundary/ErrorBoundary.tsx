import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button } from '../../../lib';
import { PageHeader } from '../PageHeader';

interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  error: Error | null;
}
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <PageHeader eyebrow="Chyba" title="Něco se pokazilo" description={this.state.error.message}>
        <div>
          <Button arrow="up-right" onClick={() => window.location.reload()}>
            Načíst znovu
          </Button>
        </div>
      </PageHeader>
    );
  }
}