import { api, queries } from "api";
import { showStandardResponse, warningToast } from "cool-toast";
import { onlyUnique2 } from "js-util";
import moment from "moment";
import { useState } from "react";
import { Table } from "react-with-native-table";

/** 
 
Show all opertaions in a list, showing a link to the github repo, the stars, the collaborators, more metadata, and whether or not we are synced with it, ahead, or behind, or both... With a selectbutton to select it, and also actions to pull/push, etc.
​
Bulk actions on top based on selection or just for all operations
*/
export default () => {
  const [selectedOperationNames, setSelectedOperationNames] = useState<
    string[]
  >([]);

  const [isActionLoading, setIsActionLoading] = useState(false);
  const operationQuery = queries.useGetAllOperations();
  const operations = operationQuery.data?.result;

  const isSomethingLoading = isActionLoading || operationQuery.isLoading;

  // const pushSelected = async () => {
  //   const res = await api.pushMultipleOperations(selectedOperationNames);
  //   if (res.isSuccessful) {
  //     try {
  //       const newList = list.reduce((accumulator, current, idx, array) => {
  //         let found = res.result?.find(
  //           (item: PushOperationResult) =>
  //             item.data?.operationName === array[idx].operationName
  //         );
  //         if (found) {
  //           accumulator.push({ ...array[idx], ...found, selected: false });
  //         }
  //         return accumulator;
  //       }, []);
  //       setList(newList);
  //     } catch (err) {
  //       console.error("Error setting list: " + JSON.stringify(err));
  //     }
  //   } else {
  //     console.error("Something failed in push multiple operations");
  //   }
  //   setLoading(false);

  //   console.log("result from pushMutipleOps: " + JSON.stringify(res));
  // };

  const pullSelected = async () => {
    setIsActionLoading(true);
    const pullResult = await api.pullMultipleOperations(selectedOperationNames);

    showStandardResponse(pullResult);

    pullResult.result?.results?.map((x) => {
      if (!x.isSuccessful) {
        warningToast(x.message);
      }
    });

    await operationQuery.refetch();
    setIsActionLoading(false);
  };

  const pullOperation = async (operationName: string) => {
    setIsActionLoading(true);
    const apiResult = await api.operationGithubPull(operationName);

    showStandardResponse(apiResult);
    await operationQuery.refetch();
    setIsActionLoading(false);
  };

  const pushOperation = async (operationName: string) => {
    setIsActionLoading(true);
    const apiResult = await api.operationGithubPush(operationName);
    showStandardResponse(apiResult);

    await operationQuery.refetch();
    setIsActionLoading(false);
  };

  const toggleOperation = async (operationName: string, newState: boolean) => {
    if (newState === false) {
      setSelectedOperationNames(
        selectedOperationNames.filter((name) => name !== operationName)
      );

      return;
    }

    const newSelectedOperationNames = selectedOperationNames
      .concat(operationName)
      .filter(onlyUnique2());

    setSelectedOperationNames(newSelectedOperationNames);
  };

  const selectAll = () => {
    if (!operations) return;
    const allOperationIds = operations.map((x) => x.name);
    setSelectedOperationNames(allOperationIds);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap">
        <button
          disabled={operationQuery.isLoading}
          className="mt-5 disabled:text-[color:gray]"
          onClick={() => {
            selectAll();
          }}
        >
          Select all
        </button>
        <button
          disabled={operationQuery.isLoading}
          className="mt-5 disabled:text-[color:gray]"
          onClick={() => {
            setSelectedOperationNames([]);
          }}
        >
          Deselect all
        </button>
        <button
          disabled={
            operationQuery.isLoading || selectedOperationNames.length === 0
          }
          className="mt-5 disabled:text-[color:gray]"
          onClick={pullSelected}
        >
          Pull Selected ({selectedOperationNames.length})
        </button>
        <button
          disabled={
            !operationQuery.isLoading && selectedOperationNames.length !== 0
          }
          className="mt-5 disabled:text-[color:gray]"
          // onClick={pushSelected}
        >
          Push Selected ({selectedOperationNames.length})
        </button>
      </div>

      <Table
        extraColumnsAtStart
        renderExtraColumns={(item) => {
          if (!item) {
            return <div />;
          }
          const isSelected = selectedOperationNames.includes(item.name);

          return (
            <td>
              <p>
                {operationQuery.isLoading ? (
                  <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Loading...
                  </button>
                ) : (
                  <button
                    className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      toggleOperation(item.name, !isSelected);
                    }}
                  >
                    {`[ ${isSelected ? "x" : " "} ]`}
                  </button>
                )}
              </p>
            </td>
          );
        }}
        columns={[
          {
            name: "Operation",
            objectParameterKey: "name",
            presentationType: "text",
          },
          {
            name: "Last commit on remote",
            objectParameterKey: "operation",
            customPresentation: (item) => {
              const lastCommittedAt =
                typeof item.repository === "object"
                  ? item.repository?.lastCommitInfo?.committedAt
                  : undefined;

              const lastCommitDateString = lastCommittedAt
                ? moment(lastCommittedAt).format("YYYY-MM-DD @ HH:MM:SS")
                : "Never";

              return (
                <td>
                  <p>{lastCommitDateString}</p>
                  {isSomethingLoading ? (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Loading...
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        pullOperation(item.name);
                      }}
                    >
                      Pull Now
                    </button>
                  )}
                </td>
              );
            },
          },
          {
            name: "Last commit on operation",
            objectParameterKey: "operation",
            customPresentation: (item) => {
              const lastPullTimeAt =
                typeof item.repository === "object"
                  ? item.repository?.lastPullTimeAt
                  : undefined;

              const lastPushDateString = lastPullTimeAt
                ? moment(lastPullTimeAt).format("YYYY-MM-DD @ HH:MM:SS")
                : "Never";

              return (
                <td>
                  <p>{lastPushDateString}</p>

                  {operationQuery.isLoading ? (
                    <button className="ml-5 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Loading...
                    </button>
                  ) : (
                    <button
                      className="ml-5 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        pushOperation(item.name);
                      }}
                    >
                      Push Now
                    </button>
                  )}
                </td>
              );
            },
          },

          {
            name: "Up to date",
            objectParameterKey: "operation",
            customPresentation: (item) => {
              const lastCommittedAt =
                typeof item.repository === "object"
                  ? item.repository?.lastCommitInfo?.committedAt
                  : undefined;
              const lastPullTimeAt =
                typeof item.repository === "object"
                  ? item.repository?.lastPullTimeAt
                  : undefined;

              const isUpToDateString =
                lastPullTimeAt && lastCommittedAt
                  ? lastPullTimeAt > lastCommittedAt
                    ? "✅"
                    : "❌"
                  : "❓";

              return (
                <td>
                  <p>{isUpToDateString}</p>
                </td>
              );
            },
          },

          {
            name: "Circular deps",
            objectParameterKey: "operation",
            customPresentation: (item) => {
              if (!item.operation?.circularDependencies) return <td />;

              return (
                <td>
                  {item.operation.circularDependencies.map((dep) => {
                    const string = dep.join(" -> ");

                    return <p>{string}</p>;
                  })}
                </td>
              );
            },
          },
          {
            name: "Info",
            objectParameterKey: "operation",
            customPresentation: (item) => {
              const repoUrl =
                item.repository === undefined
                  ? undefined
                  : typeof item.repository === "string"
                  ? item.repository
                  : item.repository.url;

              const repositoryInfo =
                typeof item.repository === "object"
                  ? item.repository
                  : undefined;

              return (
                <td>
                  <p>
                    {repoUrl} ({repositoryInfo?.stargazersCount}⭐️)
                  </p>
                </td>
              );
            },
          },
        ]}
        data={operations}
      />
    </div>
  );
};
