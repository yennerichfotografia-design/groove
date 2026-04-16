import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Error logged in development only
    if (import.meta.env.DEV) console.error('ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-primary mb-4">😕</h1>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Algo salió mal
              </h2>
              <p className="text-muted-foreground">
                Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta recargar la página.
              </p>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4 text-left">
                <p className="text-sm text-destructive font-mono break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}
            
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
