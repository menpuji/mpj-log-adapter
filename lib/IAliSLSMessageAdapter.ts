
export interface IAliSLSMessageAdapter {
    ParseContent(content: APIContent | TEXTContent);
}

export interface APIContent {
    header: string,
    body: any,
    userAgent: string,
    method: string,
    uri: string
}

export interface TEXTContent {
    message: string
}