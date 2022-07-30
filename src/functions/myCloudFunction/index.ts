import type { Request as ExpressRequest, Response } from 'express';

import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { httpErrorHandler } from '@libs/error-handler';
import { logRequest } from '@libs/services/logs/logRequest';

type Request = ExpressRequest<Record<string, string>, void, void>;

export const myCloudFunction: HttpFunction = httpErrorHandler(
  (req: Request, res: Response) => {
    logRequest(req);

    res.send('Hello from GCP Cloud Function');
  },
);
