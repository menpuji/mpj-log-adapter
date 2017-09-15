# Introduction

This is a message adapter of MPJ's ali SLS service.

# Version
## 0.2.0 2017-09-15
### Update
- remove AliSLSMessageGenerator

## 0.2.0 2017-09-14
### New
- APIMessageAdapter
- TEXTMessageAdapter

# Install
```
npm install mpj-log-adapter --save
```

# Usage

```js
import * as AliSLSMessage from 'mpj-log-adapter';

const type = 'api'; // api|text
let content: APIContent | TEXTContent = {};
let adapter: any = null;
for (let k of Object.keys(AliSLSMessage)) {
    let adapterName = AliSLSMessage[k].name.toLowerCase();
    if (adapterName.indexOf(type) > -1) {
        adapter = new AliSLSMessage[k]();
    }
}
if (adapter == null) {
    throw new Error('错误的日志类型');
}
content = adapter.ParseContent(content);


```

# Interface
```js
interface APIContent {
    header: string,
    body: any,
    userAgent: string,
    method: string,
    uri: string
}

interface TEXTContent {
    message: string
}
```