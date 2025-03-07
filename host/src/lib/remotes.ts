
export async function fetchRemotes() {
  return [
    {
      name: 'hello-world',
      type: 'module',
      entry: 'http://localhost:4174/mf-manifest.json',
    }
  ];
}
