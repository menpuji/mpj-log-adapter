

export class AliSLSMessageGenerator {
    private appType: string;
    private logLevel: string;
    private type: string;
    private token: string;
    private message: any;
    private header: any;
    private body: any;
    private userAgent: string;
    private method: string;
    private uri: string;
    private storeId: string;
    private storeName?: string;
    private userId?: string;
    private userName?: string;
    private terminalId: string;
    private terminalIntranetIp?: string;

    constructor(parameters) {
        this.appType = parameters.appType;
        // content 相关数据
        this.token = parameters.token;
        this.message = parameters.message;
        this.header = parameters.header;
        this.body = parameters.body;
        this.userAgent = parameters.userAgent;
        this.method = parameters.method;
        this.uri = parameters.uri;

        this.logLevel = parameters.logLevel;
        // 日志类型：api/text
        this.type = parameters.type;
        // 店铺信息，店铺 ID 必填
        const storeInfo = parameters.storeInfo;
        this.storeId = storeInfo.storeId;
        this.storeName = storeInfo.storeName;
        // 用户信息，非必填
        const userInfo = parameters.userInfo;
        this.userId = userInfo.userId;
        this.userName = userInfo.userName;
        // 设备信息，必填
        const terminal = parameters.terminal;
        this.terminalId = terminal.terminalId;
        this.terminalIntranetIp = terminal.terminalIntranetIp;
    }

    public GetLogMessage() {
        const logGroup = this.GetLogGroup();
        return {
            //必选字段
            projectName: 'ldc-log-service',
            logStoreName: this.appType,
            logGroup: logGroup
        }
    }

    private GetLogGroup() {
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
                })
            }
        }
        var logGroup = {
            logs: [{
                time: Math.floor(new Date().getTime() / 1000),
                contents: contents
            }],
            topic: this.type,
            source: this.storeId
        }
        return logGroup;
    }
}