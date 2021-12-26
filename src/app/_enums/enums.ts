const Environment = {
    DEVELOPMENT     : 'development',
    STAGING         : 'staging',
    PRODUCTION      : 'production'
}

const ReqMethods = {
    GET     : 'get',
    POST    : 'post',
    PUT     : 'put',
    DELETE  : 'delete'
}

const ResponseStatus = {
    SUCCESS         : 200,
    BAD_REQUEST     : 400,
    UNAUTHORIZED    : 401,
    FORBIDDEN       : 403,
    NOT_FOUND       : 404,
    INTERNAL_ERROR  : 500,
}

const Months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Images = {
    LOGO_FILE_SIZE        : 5 * 1024 * 1024,
    LOGO_SUPPORTED_FORMAT : ['image/jpg', 'image/jpeg', 'image/png'],
    ICON_FILE_SIZE        : 2 * 1024 * 1024
}

const TOASTER_DELAY = 3 * 1000

export {
    Environment,
    ReqMethods,
    ResponseStatus,
    Months,
    Images,
    TOASTER_DELAY,
}