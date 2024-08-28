export const createError = (status, messsage) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
};