import type { Request } from 'express';
import { logger } from '@libs/logs';
import { pick } from 'lodash';

type RequestPayload = Pick<
  Request,
  | 'body'
  | 'cookies'
  | 'method'
  | 'headers'
  | 'params'
  | 'query'
  | 'originalUrl'
  | 'url'
  | 'baseUrl'
>;
export const getRequestPayload = (req: Request): RequestPayload =>
  pick(req, [
    'body',
    'cookies',
    'method',
    'headers',
    'params',
    'query',
    'originalUrl',
    'url',
    'baseUrl',
  ]);

export const logRequest = (req: Request): void => {
  logger.log({ message: 'Request dump', ...getRequestPayload(req) });
};
