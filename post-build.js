import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distHtmlPath = join(process.cwd(), 'dist', 'index.html');

try {
  let html = readFileSync(distHtmlPath, 'utf8');
  
  // Replace placeholders with Spyder templates
  html = html
    .replace(/__THEME_MODE__/g, '${theme_mode}')
    .replace(/__CSS_VARIABLES__/g, '${css_appeal}')
    .replace(/__SHOW_CHANGELOG__/g, '${show_changelog}')
    .replace(/__REPORT_URL__/g, '${report_url}')
    .replace(/__CHANGELOG_HTML__/g, '${changelog_html}');

  writeFileSync(distHtmlPath, html, 'utf8');
  console.log('✓ Post-build: Replaced placeholders with Spyder templates');
} catch (error) {
  console.error('✗ Post-build error:', error.message);
  process.exit(1);
}
