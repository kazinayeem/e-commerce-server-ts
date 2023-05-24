
interface CustomError extends Error {
  status?: number;
}

export const error:any = (message: string, status: number) => {
  const e: CustomError = new Error();
  e.message = message;
  e.status = status;
  return e;
};
