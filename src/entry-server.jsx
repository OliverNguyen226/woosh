import { renderToString } from 'solid-js/web'
import App from './App'
import { Router } from '@solidjs/router'

export function render() {
  const html = renderToString(() => <Router><App /></Router>)

  return { html }
}
