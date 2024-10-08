export const createError = (status, message) => {
    const err = new Error();
    err.status = status || 500;
    err.message = message || "An unexpected error occurred";
    return err;
};
