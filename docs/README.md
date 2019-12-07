# Catalog - Documentation
Based on master-details model, this application has the following architecture.

## Generate Docs
the documentation of the application is made with the "[`compodoc`](https://compodoc.app/)" plugin and can be generated as follows

```
cd ../portal
npm i
npm run docs
```

After that, you can serve these HTML files with command:

```bash
cd documentation
# Python 3
python -m http.server
```

Open web browser http://127.0.0.1:8000
