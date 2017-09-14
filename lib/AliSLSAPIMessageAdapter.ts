import { IAliSLSMessageAdapter, APIContent } from './IAliSLSMessageAdapter';

export class AliSLSAPIMessageAdapter implements IAliSLSMessageAdapter {
    ParseContent(content: APIContent) {
        if(content.header)content.header = JSON.stringify(content.header);
        if(content.body)content.body = JSON.stringify(content.body);
        return Object.assign({}, content);
    }
}