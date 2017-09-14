"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AliSLSTEXTMessageAdapter {
    ParseContent(content) {
        let message = content;
        if (typeof (message) != 'string') {
            message = JSON.stringify(content);
        }
        return Object.assign({}, { message });
    }
}
exports.AliSLSTEXTMessageAdapter = AliSLSTEXTMessageAdapter;
//# sourceMappingURL=AliSLSTEXTMessageAdapter.js.map