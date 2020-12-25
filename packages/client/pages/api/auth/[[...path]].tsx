import SuperTokens from 'supertokens-node';
import { superTokensMiddleware } from 'supertokens-node/nextjs';
import Session from 'supertokens-node/recipe/session';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

const apiPort = process.env.APP_PORT || 3000;
const apiDomain = process.env.APP_URL || `http://localhost:${apiPort}`;
const websitePort = process.env.APP_PORT || 3000;
const websiteDomain = process.env.APP_URL || `http://localhost:${websitePort}`;
const apiBasePath = '/api/auth/';

SuperTokens.init({
  supertokens: {
    connectionURI: process.env.ST_URL || 'https://try.supertokens.io', // Replace with your SuperTokens core instance. See https://supertokens.io/docs/emailpassword/quick-setup/supertokens-core/overview
    apiKey: process.env.ST_KEY,
  },
  appInfo: {
    appName: 'Gimme Cheats',
    apiDomain,
    apiBasePath,
    websiteDomain,
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

const cors = Cors({
  origin: websiteDomain,
  allowedHeaders: ['content-type', ...SuperTokens.getAllCORSHeaders()],
  credentials: true,
});

function runCORSMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, async (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCORSMiddleware(req, res, cors);
  await superTokensMiddleware(req, res);
};
