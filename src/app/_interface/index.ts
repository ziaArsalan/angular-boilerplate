interface responseType {
    [key: string]: any
}

interface ServiceResponse {
    response? : responseType,
    error?    : responseType
}

export {
    ServiceResponse
}