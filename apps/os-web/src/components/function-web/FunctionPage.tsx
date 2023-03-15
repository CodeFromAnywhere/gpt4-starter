import { Div, Li, P, Ul } from "react-with-native";
import { Tabs } from "tabs";
import { api, queries } from "api";
import { ClickableIcon } from "clickable-icon";
import { useRouter } from "react-with-native-router";
import { Test } from "./Flow";
import { getQueryPath } from "markdown-reader-functions-js";
import { FunctionExecutionTable } from "./FunctionExecutionTable";
import { MarkdownCodeblock, MarkdownContent } from "markdown";
import { destructureOptionalObject, makeArray } from "js-util";
import { FancyLoader } from "fancy-loader";
import { FormTab } from "./FormTab";
import { BigButton } from "big-button";
import { errorToast } from "cool-toast";
import { pascalCase } from "convert-case";
export const FunctionPage = () => {
  const router = useRouter();

  const fullPath = router.query.paths ? makeArray(router.query.paths) : [];
  const functionName = fullPath.pop()!;

  const functionMarkdownString =
    queries.useTsFunctionNameToMarkdownString(functionName)?.data?.result;

  const queryPath = getQueryPath(router.query);

  const tsFunctionQuery = queries.useGetTsFunction(functionName);
  // todo : add query to tsFunction
  const { tsFunction } = destructureOptionalObject(
    tsFunctionQuery.data?.result
  );

  const functionExecutions =
    queries.useGetFunctionExecutions(functionName).data?.result || [];

  const renderNavigation = () => {
    return (
      <Div className="flex flex-row justify-between">
        {queryPath.length > 1 ? (
          <ClickableIcon
            emoji="⬅"
            onClick={() => {
              const parts = queryPath.split("/");
              parts.pop();
              const oneFolderUp = parts.join("/");
              router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
            }}
          />
        ) : null}
        <P className="text-3xl">{functionName}</P>
        <Div />
      </Div>
    );
  };

  const renderPage = () => {
    if (!tsFunction) {
      return tsFunctionQuery.isLoading ? (
        <FancyLoader big />
      ) : (
        <P>Select a function to get to work</P>
      );
    }

    /**
  ### Tab 7: Recent executions tab
  
  `FunctionExecution[].sort(createdAt).slice(0,100)`
  
  Actions for every item:
  
  - set `isTest` to true
  - set `isExample` to true
  - fill in in form in tab 1
  - execute directly
  
     */
    const recentTab = {
      title: "Recent",
      emoji: "🕰️",
      renderTab: () => {
        return (
          <FunctionExecutionTable
            tsFunction={tsFunction}
            type={"recent"}
            functionExecutions={functionExecutions}
          />
        );
      },
    };

    const formTab = {
      title: "Form",
      emoji: "📝",
      renderTab: () => <FormTab tsFunction={tsFunction} />,
    };

    /** 
  ### Tab 2: Function Docs

  Generate on the fly based on the `TsFunction` (extrahere from docs generation lib)

  */
    const docsTab = {
      title: "Docs",
      emoji: "ℹ️",
      renderTab: () => {
        // TODO: use `props.functionData.tsFunction.operationRelativeTypescriptFilePath` to deterimne markdown file path and folder

        // Every function should have some realtime docs in the `/function/*` page: how to use as an API using `api` or `queries`? how to use with curl? How to use with Swift? How to use in Python? Take the thing generated for `README` and add this to the function thing.

        // Bruna, Bhagya, rug students, and any other developer needs to know how to use the API and how to set up your own home server

        // Every function needs crystal clear instructions on how to use it as API

        const queryName = `use${pascalCase(tsFunction.name)}`;
        const content = `# ${tsFunction.name}
        
${tsFunction.description || "No description"}

# Footprint

${functionMarkdownString || "Loading..."}

# Usage

You can run this function either using the SDK (see \`sdk-api\`) or by using the api directly. You can also install it into your own monorepo, if you have access to the code.

## Using \`sdk-api\`

\`\`\`tsx

import { api, queries } from "api";

// use either the api, or the query
const { ${tsFunction.name} } = api;
const { ${queryName} } = queries;

const YourComponent = () => {

  const ${tsFunction.name}Query = ${queryName}(/* parameters here */);

  // use your query

  const executeApi = () => {

    // execute this when you like
    ${tsFunction.name}(/*parameters*/)

  }

  return <div>do things</div>
}

\`\`\`

## Using another programming language

You can just call it using the \`homeserver\` setup:

- call the POST endpoint \`https://yourapidomain.com/function/${
          tsFunction.name
        }\`
- in the body, put this JSON: \`{ parameters: [/* array of all parameters going into the function */], authToken: "YOUR_AUTH_TOKEN" }\`

That's it!

## Examples

Examples coming soon! Stay tuned.

[CURL EXAMPLE HERE]

[JAVASCRIPT EXAMPLE HERE]

[PYTHON EXAMPLE HERE]

[SWIFT EXAMPLE HERE]

## Installing in the monorepo

\`\`\`ts

import { ${tsFunction.name} } from "${tsFunction.operationName}";

//execute where you like, without api
${tsFunction.name}(/*parameters*/)

\`\`\`

# More help

- [Settings and API info](/settings)
- [How to build something cool with Clarity AI](/files/knowledge/docs/clarity/readme.md)

TODO:

- There needs to be an easy to find documentation linked from every function to learn more about how to make any app on top of the homeserver. Starter kits are awesome. Instruct bhagya and students for this. "show others how to make money with clarity AI"
- Example: how to build a blog generator with Clarity AI, etc

`;
        return (
          <Div>
            <Div>
              <MarkdownContent content={content} config={{}} />
            </Div>
          </Div>
        );
      },
    };

    /**
     * TAB 3: Code
     *
     * TODO: Can later be replaced with the writer-input for the file of the function, so you can immediately see your coding result in the other tabs...
     */
    const codeTab = {
      title: "Code",
      emoji: "💻",
      renderTab: () => {
        return tsFunction?.rawText ? (
          <Div className="flex flex-col items-center">
            <MarkdownCodeblock
              text={`const ${tsFunction.name} =${tsFunction.rawText}`}
              extension="ts"
              isModeStatic
              minimalMode="full"
            />

            <Div className="flex flex-col items-center pt-8 gap gap-6">
              <P>Wanna start?</P>

              <BigButton
                title="Open in VSCode"
                onClick={async () => {
                  if (!tsFunction.operationName) {
                    errorToast(
                      "Couldn't find which operation this function belongs to, can't open the file"
                    );
                    return;
                  }

                  const result = await api.vscodeOpen({
                    files: [
                      {
                        operationName: tsFunction.operationName,
                        operationRelativeFilePath:
                          tsFunction.operationRelativeTypescriptFilePath,
                      },
                    ],
                  });

                  return;
                }}
                emoji="👨‍💻"
              />
            </Div>
          </Div>
        ) : (
          "Code not found"
        );
      },
    };

    /**
            ### Tab 4: Exersize tab

            Get all examples of this function, write exersize in markdown (ask Wijnand for more details)
            */

    const exersizeTab = {
      title: "Exersizes",
      emoji: "👶",
      renderTab: () => {
        return "ex";
      },
    };

    /**
### Tab 5: Examples Tab

`FunctionExecution[].filter(x.isExample)`

Show `x.exampleDescription` too (markdown)

Actions for every item:

- set `isExample` to false
- set `isTest` to true
- fill in in form in tab 1
- execute directly

*/

    const examplesTab = {
      title: "Examples",
      emoji: "👻",
      renderTab: () => {
        return (
          <FunctionExecutionTable
            tsFunction={tsFunction}
            type={"example"}
            functionExecutions={functionExecutions}
          />
        );
      },
    };

    /**
### Tab 6: Tests Tab

`FunctionExecution[].filter(x.isTest))`

Actions for every item:

- set `isTest` to false
- set `isExample` to true
- fill in in form in tab 1
- execute directly
*/

    const testsTab = {
      title: "Tests",
      emoji: "🔧",
      renderTab: () => {
        return (
          <FunctionExecutionTable
            tsFunction={tsFunction}
            type={"test"}
            functionExecutions={functionExecutions}
          />
        );
      },
    };

    const dataTab = {
      title: "Data",
      emoji: "💿",
      renderTab: () => {
        return "This tab can later show the models that are put under in the doc-comment as being relevant. E.g. if you put 'DATA: JeepType, LocationType' in your function's doc-comment, it would show the CRUD-UI for those models in this tab. Possibly, one tab for every model, or simply one tab for all models and visually make it disabled if there is no data connected to the function...";
      },
    };

    const mediaTab = {
      title: "Media",
      emoji: "👥",
      renderTab: () => {
        return (
          <Div>
            <Ul>
              <Li>Show related postables & media-posts</Li>
              <Li>Create new postable</Li>
              <Li>
                Basically, the social-media-ui but just focussed on this
                function
              </Li>
            </Ul>
          </Div>
        );
      },
    };

    const treeTab = {
      title: "Trees",
      emoji: "🌳",
      renderTab: () => {
        return (
          <Div className="w-max h-80">
            <Ul>
              <Li>
                Show graph with the function in the middle, below all functions
                that are required for the function (dependencies), above all the
                functions that require this function (dependents)
              </Li>
              <Li>
                Being able to see this multiple multiple layers deep would be
                great (configurable).
              </Li>
              <Li>
                Dependencies must be brown (root like) while dependents (up)
                must be green (leave like)
              </Li>
              <Li>
                Other tree: find other functions that take the output type of
                this function as its input. Use the output of your
                FunctionExecutions on "related" functions.
              </Li>
            </Ul>

            <Test />
          </Div>
        );
      },
    };
    return (
      <Div>
        {renderNavigation()}

        <Tabs
          tabKey="function"
          tabs={[
            docsTab,
            codeTab,
            formTab,
            //dataTab,
            recentTab,
            testsTab,
            examplesTab,
            //treeTab,
            //exersizeTab,
            //mediaTab,
          ]}
        />
      </Div>
    );
  };

  return (
    <Div className="pb-4 px-4 w-full" scroll>
      {renderPage()}
    </Div>
  );
};
