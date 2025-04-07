/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
export default {
  'projects/task-management-app/**/*.{js,ts,html}': ['npm run eslint:task-management-app:fix'],
  'projects/task-management-api/**/*.{js,ts,html}': ['npm run eslint:task-management-api:fix'],
  '*': ['npm run prettier:write'],
};
