# colorsheme-less

LESS color scheme randomizer

## Getting Started
Install the module with: `npm install colorsheme-less -g`

#### Command Line:

```bash
colorscheme-less [generate|shuffle] [path/to/file.less]
```

#### Node:

```javascript
var colorscheme = require('coolors-less');
colorscheme("generate|shuffle", "path/to/file.less");
```

## Usage

Use the generated file in your LESS. Reference colors 1-5 with `@scheme-color-1`, etc.


## License
Copyright (c) 2015 Grant Forrest
Licensed under the MIT license.
