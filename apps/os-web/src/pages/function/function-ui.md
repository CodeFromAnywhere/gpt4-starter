---
priority: high
---
# Function UI

✅ Make new operations `function-ui` and `function-web`. Start from copying `markdown-reader-*`

## Layout:

- ✅ `LoginWrapper`
- ✅ Nested menu at the right, page at the left

## Nested menu

✅ Make nested menu `getFunctionNestedMenu(): string[]`

- ❌ bundles + main project as root folders (`["main project", ...bundleNames]`) **do this later, not important**
- ✅ per folder all operations it contains, nested, in the project relative folder where it should be ending up
- ✅ per operation all functions it contains, nested, relative to the src folder. not file, only folders should become menu

✅ Example:

- main
  - modules
  - packages
    - db-ui
      - components
        - `<IndexInstanceContainer>`
        - `<Layout>`
        - `<UpsertForm>`
      - hooks
        - `useGetDbModelQuery`
        - `useReferencableModelDataQuery`
      - pages
        - Page
        - Page
        - Page
      - getPageTitle
    - generated
    - himalayajeep-functions
  - apps
- bundle A
- bundle B

❌ NB: if possible, rename the menu items if the items in a folder are not unique (use file-name to replace item name if this happens) **do later, not that important**

## Function Page

✅ Function page at path `/[function-name]` that gets all info about the function

✅ Provide needed info about the function:

✅ TsFunction
✅ FunctionExecution[]

✅ Description

✅ At the function page, have tabs

✅ Last tab should be stored in global local storage, so it is reminded when switching to another function.

## Tabs

### Tab 1: Function Form (default tab)

✅ Uses `<FunctionForm>` component

### ✅ Tab 4: Examples Tab

✅ `FunctionExecution[].filter(x.isExample)`

✅ Show `x.exampleDescription` too (markdown)

✅ Actions for every item:

✅ - set `isExample` to false
✅ - set `isTest` to true
✅ - fill in in form in tab 1
✅ - execute directly

### ✅ Tab 5: Tests Tab

✅ `FunctionExecution[].filter(x.isTest))`

✅ Actions for every item:

- ✅ set `isTest` to false
- ✅ set `isExample` to true
- ✅ fill in in form in tab 1
- ✅ execute directly

### Tab 6: Recent executions tab

✅ `FunctionExecution[].sort(createdAt).slice(0,100)`

Actions for every item:

- ✅ set `isTest` to true
- ✅ set `isExample` to true
- ✅ fill in in form in tab 1
- ✅ execute directly

# Function page

Add a title!

Function name (ensure frontend components get detected (capitalized functions inside of a tsx file) and rendered as `<ComponentName>` instead of the raw name of the function.)

# Tab 1: Form

Don't show form for JSX Component functions

Add global store for `selectedFunctionExecution`

key of `FunctionForm` needs to be id of `FunctionExecution` so it refreshes with different initialValues.

select initialValues from FunctionExecution query

re-set initialValues of FunctionForm that way

connect API with FunctionForm, showing proper feedback if the output is structured, otherwise feedback in JSON is fine...

Ensure all JS functions are also available through API

### Tab 2: Function Docs

✅ render description and name

extrahere from docs generation lib

Generate on the fly based on the `TsFunction` **very nice**

### Tab 3: Exersize tab

Get the function to generate exersize markdown, do this **on the fly**

Improve that function to use examples too

Render the resulting markdown

# Table

Be able to set `description` for item via a button to edit the value, showing a `WriterInput`

Performance: Don't render the input field until you click on `show` if the amount of data is above x characters

## Search

Make search

- results in a function array, sorted alphabetically
- search on function name through all `TsFunction`s.
- camelCase function name should become searchable in lowercase with spaces, as well as the camelCase variant
- result: array of functions from the main project (not from bundles)
- it should be possible to use search-mode even if you don't have any search-term filled in, because the results are alphabetical

## Tests

Bulk functions that can be integrated in the UI but also as CLI:

- Make it possible to run all tests from a function in the backend
- Make it possible to run all tests for an operation
- Make it possible to run all tests for an operation but also all tests of that operations dependants (recursively?)

Once they work, ensure they can be executed as CLI but also from the main homepage of `function-ui`, every `operation` and every `function` from the test tab

## Ideas

For frontend components examples shouldn't be supported for now, examples can be added into the doc-comment of the component for now... Although it would be super cool if I can figure out how to have live examples that can be tried out. although complex, it's not impossible! research this a little and make a plan for it...

Another idea is to scrape the codebase for places where the component/function is already in use, and select some of those as examples, but it's hard because they're not in a vacuum. Think about it.
