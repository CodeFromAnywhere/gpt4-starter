export type PersonaStatistics = {
    name?: string;
    newMessagesTodayAmount?: number;
    activeUsersTodayAmount?: number;
    newUsersTodayAmount?: number;
};
export declare const getPersonaStatistics: () => Promise<{
    totalPersons: number;
    activePersonsAmount: number;
    newPersonsAmount: number;
    returningPersonsAmount: number;
    messagesTodayAmount: number;
    personaStatistics: {
        [x: string]: PersonaStatistics;
    };
}>;
//# sourceMappingURL=getPersonaStatistics.d.ts.map