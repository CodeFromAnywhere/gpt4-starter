import { queries } from "api";
import { useQueryPath } from "./useQueryPath";
/**
 * Useful hook to make a site dynamic for people that can have isEdit access
 */
export var useEditor = function () {
    var queryPath = useQueryPath();
    var meQuery = queries.useGetMeWithContext();
    var fileCollectionQuery = queries.useGetFileCollectionWithContext(queryPath);
    var result = {
        isLoading: fileCollectionQuery.isLoading || meQuery.isLoading,
        refetch: function () {
            fileCollectionQuery.refetch();
            meQuery.refetch();
        },
    };
    return result;
};
//# sourceMappingURL=useEditor.js.map