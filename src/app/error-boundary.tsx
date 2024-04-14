import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
    children: ReactNode
}

export function ErrorBoundary({ children }: Props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      // Log the error or send it to an error tracking service
      console.error('Error occurred within the ErrorBoundary');
    }
  }, [hasError]);

  if (hasError) {
    return <h1>Fallback for error</h1>;
  }

  return children;
}