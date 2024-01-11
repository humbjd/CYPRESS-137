require('cypress-plugin-tab')

import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

// Import commands.js using ES2015 syntax:
import './commands'