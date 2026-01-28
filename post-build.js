import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distHtmlPath = join(process.cwd(), 'dist', 'index.html');

try {
  let html = readFileSync(distHtmlPath, 'utf8');
  
  // Replace placeholders with Python template syntax
  html = html.replace(/__SHOW_CHANGELOG__/g, '${show_changelog}');
  html = html.replace(/__CHANGELOG_HTML__/g, '"${changelog_html}"');
  
  writeFileSync(distHtmlPath, html, 'utf8');
  console.log('✓ Post-build: Replaced placeholders with Python template syntax');
} catch (error) {
  console.error('✗ Post-build error:', error.message);
  process.exit(1);
}
