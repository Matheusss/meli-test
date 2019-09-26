/**
 * Import all modules defined in modules folder
 * @returns {string[]} Imported modules paths relative to modules folder
 */
function importAllModules() {
  const context = require.context('../modules', true, /^\.\/.*\/index.js$/)
  const keys = context.keys()

  keys.forEach(key => context(key))
  return keys
}

const modules = importAllModules()

if (process.env.NODE_ENV !== 'production') {
  console.log('[MODULES LOADED]', modules)
}
