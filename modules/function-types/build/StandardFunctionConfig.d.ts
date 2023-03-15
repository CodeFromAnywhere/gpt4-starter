import { GroupAuthorizationObject } from "authorization-types";
import { RunEveryPeriodEnum } from "./RunEveryPeriodEnum";
export type QueueFunctionConfig = {
    /**
     * If true, function is not used in watcher or cron
     */
    isDisabled?: boolean;
    /**
     * Requires lots of ram/cpu/gpu (e.g. local AI models, file conversions, and data manipulation at scale)
     *
     * Will not be started if computer is busy already
     */
    isHeavy?: boolean;
    /**
     * If true, you state that this function requires internet. Will not be executed if there's no internet connection
     */
    isInternetRequired?: boolean;
    /**
     * Puppeteer stuff
     */
    isBrowserRequired?: boolean;
};
export type StandardFunctionConfig = QueueFunctionConfig & {
    /**
     * Used to determine if there are important changes. Can be added to things that used this function for example, for indexation, for example. This way we know how the index came to be better.
     */
    version?: string;
    /**
     * Provide info for every version. Especially needed if we have a function that produces output that we'll keep using. This way we can trace back the behavior that caused the output
     */
    versionInfo?: {
        [version: string]: string;
    };
    /**
     * If `true`, this function will be publicly available through the API.
     *
     * If you want more custom autorizations, use `authorization` object
     */
    isPublic?: boolean;
    /**
     * Function is only applicable for admins (e.g. it does something on the server, only useful for admins). It can therefore only be executed by admins
     *
     * If you want more custom autorizations, use `authorization` object
     */
    isAdmin?: boolean;
    /**
     * for all exported functions in node operations, true by default
     * false for others
     *
     * can be overwritten using frontmatter
     *
     * DEPRECATED: remove, should be same as `isPublic`
     */
    isApiExposed?: boolean;
    /**
     * If it's a slug without TLD, the function will be on on a landing page without its own domain
     * If it's a slug with TLD, it can get it's own domain
     * If domain is given, function is wrapped into `sdk-public-tools`, wrapped with:
     *
     * - providing email and other required credentials
     * - adding to queue if server is busy
     *
     * Later I can wrap this even more with monetisation and 'tool-owner', so I can let others do the same with a single click (promote after form is filled is like "learn more about how to earn money with the new AI tech revolution (or so)")
     */
    domain?: string;
    /**
     * If true, usage will be counted in `UsageReport`.
     *
     * If you set this...
     *
     * - either `priceCredit` should be set in the config or in the return object
     * - If this is a CRON or Watch function, you need to return `personId` or `groupId` by whom the payment needs to be deducted from. If you won't return that, it will only be deducted for API executions.
     *
     */
    isPaid?: boolean;
    /**
     * Cost per execution in credit
     *
     * e.g. 0.05 means that 1 execution costs 5 credit cent.
     *
     * Instead of defining this here, you can also return `priceCredit` as part of the return statement
     *
     * If you do define it, the user needs to have more credit than this amount, but if it ends up costing more, the `priceCredit` returning from the function will be leading, if it's there.
     */
    priceCredit?: number;
    /**
     * Price is calculated in the function. `price` should be part of the return statement
     */
    priceDescription?: string;
    /**
     * @see GroupAuthorizationObject
     */
    authorizations?: GroupAuthorizationObject;
    /**
     * whether or not the function can be cached (relies on cache invalidation)
     */
    canCache?: boolean;
    /**
      You can specify `runEveryPeriod` in your frontmatter of a function. This will set `runEveryPeriod` for the TsFunction. This is used by `function-server`: it will execute CRON-jobs that run these things on those periods.
   
      Will only work if the function takes no arguments.
      */
    runEveryPeriod?: RunEveryPeriodEnum;
};
//# sourceMappingURL=StandardFunctionConfig.d.ts.map