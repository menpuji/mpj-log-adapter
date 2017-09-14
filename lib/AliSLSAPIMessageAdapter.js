"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AliSLSAPIMessageAdapter {
    ParseContent(content) {
        if (content.header)
            content.header = JSON.stringify(content.header);
        if (content.body)
            content.body = JSON.stringify(content.body);
        return Object.assign({}, content);
    }
}
exports.AliSLSAPIMessageAdapter = AliSLSAPIMessageAdapter;
//# sourceMappingURL=AliSLSAPIMessageAdapter.js.map