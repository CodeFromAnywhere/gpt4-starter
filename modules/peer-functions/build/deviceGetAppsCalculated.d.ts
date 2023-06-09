import { Device } from "peer-types";
export declare const deviceGetAppsCalculated: (device: Device) => Promise<{
    lastOnlineAt: number;
    appOperationsCalculated: import("peer-types").AppOperation[] | undefined;
    authToken: string;
    userAgentString: string;
    name: string;
    hasPapi?: boolean | undefined;
    isOnlineCalculated?: boolean | undefined;
    isLocalIpCalculated?: boolean | undefined;
    isFavorite?: boolean | undefined;
    isPrivate?: boolean | undefined;
    lastSyncDatabaseAtObject?: {
        [modelName: string]: number;
    } | undefined;
    personIds?: string[] | undefined;
    persons?: import("peer-types").Person[] | undefined;
    currentPersonId?: string | undefined;
    currentPersonCalculated?: import("peer-types").Person | undefined;
    authenticationMethods: import("peer-types").AuthenticationMethod[];
    categoryStack?: import("model-types").CategoryStack | undefined;
    id: string;
    operationName: string | null;
    projectRelativePath: string;
    operationRelativePath?: string | undefined;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    createdFirstAt: number;
    ip: string;
    city?: string | undefined;
    position?: import("geo-types").Position | undefined;
    positionRadiusKm?: number | undefined;
    country?: string | undefined;
    region?: string | undefined;
    timezone?: string | undefined;
}>;
//# sourceMappingURL=deviceGetAppsCalculated.d.ts.map