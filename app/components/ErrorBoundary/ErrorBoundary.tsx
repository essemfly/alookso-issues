// ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // 에러가 발생하면 이 메서드가 호출됩니다.
    // 여기에서 에러를 처리하고 상태를 업데이트합니다.
    this.setState({ hasError: true });
    // 에러 로깅 또는 기타 조치를 취할 수 있습니다.
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // 에러가 발생한 경우 대체 뷰를 렌더링합니다.
      return <div>Something went wrong!</div>;
    }
    // 에러가 없는 경우 자식 컴포넌트를 그대로 렌더링합니다.
    return this.props.children;
  }
}

export default ErrorBoundary;
