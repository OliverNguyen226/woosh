/* @refresh reload */
import './index.css'
import { hydrate } from 'solid-js/web'
import App from './App'
import { Router } from '@solidjs/router'


hydrate(() => <Router><App /></Router>, document.getElementById('root'))
