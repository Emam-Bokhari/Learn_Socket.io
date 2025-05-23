import { Response } from "express";

type IData<T> = {
    statusCode: number;
    success: boolean;
    message: string;
    data: T;
}

export const sendResponse = <T>(res: Response, data: IData<T>) => {
    const resData = {
        success: data.success,
        message: data.message,
        data: data.data,
    };
    res.status(data.statusCode).json(resData);
};