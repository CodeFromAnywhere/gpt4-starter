/**
There should be an initial amount of free credit and a weekly email to all users to give them some more free credit.

Weekly CRON to keep things going with the homeserver

It can email everyone that some credits were added to their account. Besides, there is probably always news and events.
 */
export declare const weeklyMail: {
    (isDryrun?: boolean): Promise<void>;
    config: {};
};
//# sourceMappingURL=weeklyMail.d.ts.map