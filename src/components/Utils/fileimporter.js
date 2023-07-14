export function importAll(r) {
    const files = [];
    r.keys().forEach((key) => {
      files.push({image: r(key) });
    });
    return files;
  }