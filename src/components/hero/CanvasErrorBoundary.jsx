import { Component } from "react";

/**
 * Catches WebGL/context-creation failures (rare, but real on some older or
 * locked-down devices) and falls back to the static visual instead of
 * showing a blank hero.
 */
export default class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn("Hero 3D scene failed, using fallback visual:", error);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
