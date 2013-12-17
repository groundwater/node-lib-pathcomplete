# Autocomplete file paths

## Install

```
npm install lib-pathcomplete
```

## Usage

```
var pc = require('lib-pathcomplete');

function completionHandler(err, data) {
  // do something cool
}

pc('/'     , completionHandler);
pc('/us'   , completionHandler);
pc('/usr/' , completionHandler);
```
