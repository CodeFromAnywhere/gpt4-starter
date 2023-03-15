import dotenv from "dotenv";
import { path } from "fs-util";
import {
  functionGetEndpoints,
  functionPostEndpoints,
} from "function-server-endpoints";
import { getProjectRoot } from "get-path";
import { ports } from "port-conventions";
import server from "server";
import { Context } from "server/typings/common";
import { Options } from "server/typings/options";
import { firstCoreFunction } from "./firstCoreFunction";

dotenv.config();

/**
Runs sdk api server using "server" package.
Server will be exposed on port 42000
*/

export const runFunctionServer = (
  isWatching?: boolean,
  isRestart?: boolean
) => {
  const { header } = server.reply;

  const cors = [
    /* 
     see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
    see https://stackoverflow.com/questions/18642828/origin-origin-is-not-allowed-by-access-control-allow-origin
    NB: cannot set "*" i.c.m. cookies

    a better way to allow multiple origins is probably something like this:

      const allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  */

    () => header("Access-Control-Allow-Origin", "*"),
    () =>
      header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Set-Cookie" // not sure if * can be put here after the others...
      ),
    () => header("Cross-Origin-Resource-Policy", "cross-origin"),
    () =>
      header(
        "Access-Control-Allow-Methods",
        "GET, PUT, PATCH, POST, DELETE, HEAD"
      ),

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
    // NB: important for cookies!
    () => header("Access-Control-Allow-Credentials", "true"),
    (ctx: Context) => (ctx.method.toLowerCase() === "options" ? 200 : false),
  ];

  const port: number = process.env?.port
    ? Number(process.env.port)
    : ports["function-server"];

  const projectRoot = getProjectRoot();

  const projectPublicFolder = projectRoot
    ? path.join(projectRoot, "public")
    : path.join(__dirname, "..", "public");

  const serverOptions: Options = {
    port,
    public: projectPublicFolder,
    security: { csrf: false },
    parser: {
      body: {
        // From the body-parser GitHub: this doubles the RAM usage for every request, but since I need this functionality for stripe, I have no other way.
        verify: (req, res, buf) => {
          //@ts-ignore
          req.rawBody = buf;
        },
      },
      json: {
        verify: (req, res, buf) => {
          //@ts-ignore
          req.rawBody = buf;
        },
      },
      text: {
        verify: (req, res, buf) => {
          //@ts-ignore
          req.rawBody = buf;
        },
      },
      // NB: seems the server.js types are not 100% correct
      data: {
        /**
         * 32 GB (huge, but useful for uploading things like movies)
         */
        maxFileSize: 1024 * 1024 * 1024 * 32,
      } as any,
      cookie: { maxAge: 900000, httpOnly: false },
    },
  };
  // @ts-ignore
  server(
    serverOptions,
    cors,
    functionPostEndpoints,
    functionGetEndpoints,

    server.router.get("/", () => "Hello world, your Typerepo is running!"),
    server.router.get("*", async (ctx) => {
      return {
        success: false,
        message: "Endpoint does not exist, are you sure it's a GET endpoint?",
      };
    })
  ).then(async (context) => {
    const isFirstCore =
      process.env.NODE_APP_INSTANCE === undefined ||
      process.env.NODE_APP_INSTANCE === "0";
    if (isFirstCore) {
      firstCoreFunction(port, isWatching, isRestart);
    }
  });
};
