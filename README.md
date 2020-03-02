Simple Ajax Content Loader

Installation :
```
npm install pierreminiggio/binary-url-reader
```

Utilisation : 
```javascript
const BinaryUrlReader = require('@pierreminiggio/binary-url-reader')
BinaryUrlReader.read('[url]', (reader) => {
	console.log(reader.res)
})
```
