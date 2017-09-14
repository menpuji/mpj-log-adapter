"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AliSLSMessageGenerator {
    constructor(parameters) {
        this.appType = parameters.appType;
        this.token = parameters.token;
        this.message = parameters.message;
        this.header = parameters.header;
        this.body = parameters.body;
        this.userAgent = parameters.userAgent;
        this.method = parameters.method;
        this.uri = parameters.uri;
        this.logLevel = parameters.logLevel;
        this.type = parameters.type;
        const storeInfo = parameters.storeInfo;
        this.storeId = storeInfo.storeId;
        this.storeName = storeInfo.storeName;
        const userInfo = parameters.userInfo;
        this.userId = userInfo.userId;
        this.userName = userInfo.userName;
        const terminal = parameters.terminal;
        this.terminalId = terminal.terminalId;
        this.terminalIntranetIp = terminal.terminalIntranetIp;
    }
    GetLogMessage() {
        const logGroup = this.GetLogGroup();
        return {
            projectName: 'ldc-log-service',
            logStoreName: this.appType,
            logGroup: logGroup
        };
    }
    GetLogGroup() {
        const keys = [
            'appType',
            'logLevel',
            'type',
            'token',
            'message',
            'header',
            'body',
            'userAgent',
            'method',
            'uri',
            'storeId',
            'storeName',
            'userId',
            'userName',
            'terminalId',
            'terminalIntranetIp'
        ];
        let contents = [];
        for (let k of keys) {
            if (this[k]) {
                contents.push({
                    key: k,
                    value: this[k]
                });
            }
        }
        var logGroup = {
            logs: [{
                    time: Math.floor(new Date().getTime() / 1000),
                    contents: contents
                }],
            topic: this.type,
            source: this.storeId
        };
        return logGroup;
    }
}
exports.AliSLSMessageGenerator = AliSLSMessageGenerator;
//# sourceMappingURL=AliSLSMessageGenerator.js.map