import { IAliSLSMessageAdapter, TEXTContent } from './IAliSLSMessageAdapter';

export class AliSLSTEXTMessageAdapter implements IAliSLSMessageAdapter {
    ParseContent(content: TEXTContent) {
        let message: any = content;
        if (typeof (message) != 'string') {
            message = JSON.stringify(content);
        }
        return Object.assign({}, { message });
    }
}
