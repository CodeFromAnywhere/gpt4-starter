# Comment types

comment-types (`OperationClassification` undefined)



# Api reference

## 🔸 TsComment

jsonMultiple model



comments are basically one-or-multi-line human content inside of typescript files, so it's a very important to do something useful with them.


The convention should be that single-line comments should start with that. This then becomes the type of the comment.
You can also put multiple prefixes at the start.

Example:

`// TODO: NB: this is a todo but its also important`

Multiline comments can also have one or multiple types in their text, but they should not be split into multiple comments as the context could be needed some times.



There are also some other things comments can say about statements, but these should be inside the frontmatter, and are much more flexible.
- classified[0-10] indicating level of classification. This way I can share subsets of the codebase, maybe...
- privacy
- ...?

NB: with the current setup we can also parse `.md` files as being a TsComment, keep it that way!

NB: comments are part of the code, so they should always be in English!





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| comment  | string |  |
| parameters  | object |  |
| types  | array |  |
| firstLine  | number |  |
| lastLine  | number |  |
| statementName (optional) | string |  |
| rawStatement (optional) | string |  |



## 🔹 CommentType

special line prefixes:

**Developer related comments**

- TODO: for developer to know what to do
- DISCUSSION: for developer to state that discussion is needed
- IDEA: for developer to state ideas
- LATER: for developer to mark as thing that needs to be done later
- NB: for developer to add a note

**Form related comments**

- TITLE: if available, will be used as title of form input (overwrites humanCase version of the property-name itself in that case)
- SECTION: start a new section in the form from this point, the value behind here can be the title
- DESCRIPTION: if available, will be used as description of the form input








## 🔹 CommentTypeObject

Every `CommentType` can be a key in the `SimplifiedSchema`, if available.





Properties: 

 | Name | Type | Description |
|---|---|---|
| todo (optional) | string |  |
| discussion (optional) | string |  |
| idea (optional) | string |  |
| later (optional) | string |  |
| nb (optional) | string |  |
| title (optional) | string |  |
| section (optional) | string |  |
| description (optional) | string |  |



## 📄 commentTypes (exported const)

# Internal

<details><summary>Show internal (1)</summary>
    
  # 📄 commentTypesConst (exported const)


  </details>

