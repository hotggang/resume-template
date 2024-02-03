import { readdirSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const themeEntries = readdirSync(resolve(__dirname, 'src/theme'))
  .filter(entry => !entry.startsWith('.') && !entry.endsWith('.js')) // 숨김 파일 및 JS 파일 제외
  .reduce((entries, entry) => {
    entries[entry] = resolve(__dirname, `src/theme/${entry}/index.html`);
    return entries;
  }, {});

export default defineConfig({
	 build: {
    rollupOptions: {
      input: {
        ...themeEntries,
      },		
    }
  }
});


