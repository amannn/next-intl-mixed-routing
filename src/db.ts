import fs from 'fs/promises';

const path = process.cwd() + '/db.json';

async function getState() {
  const content = await fs.readFile(path, 'utf8');
  return JSON.parse(content);
}

export async function getLocale() {
  const state = await getState();
  return state.locale;
}

export async function setLocale(locale: string) {
  const state = await getState();
  state.locale = locale;
  await fs.writeFile(path, JSON.stringify(state, null, 2));
}
