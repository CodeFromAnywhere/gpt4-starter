/**
 calculate groupId/personId this based on the path (/knowledge/users/[email]/*, etc)
 */
export declare const getGroupOrPersonId: (absoluteAudioFilePath: string) => Promise<{
    groupId: string | undefined;
    personId: string | undefined;
}>;
//# sourceMappingURL=getGroupOrPersonId.d.ts.map