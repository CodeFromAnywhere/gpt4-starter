import { queries } from "api";
import { destructureOptionalObject } from "js-util";

export const useMe = () => {
  const meQuery = queries.useGetMeWithContext();
  const me = destructureOptionalObject(
    meQuery.data?.result?.device
  )?.currentPersonCalculated;

  return { me, isLoading: meQuery.isLoading };
};
