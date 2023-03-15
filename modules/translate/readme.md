# Translate

translate (`OperationClassification` undefined)



# Api reference

# Internal

<details><summary>Show internal (2)</summary>
    
  # translate()

Simple function for translations, that inputs a string (coming from your translation object and a variable object `{[key:string]:string}` that can hold other strings to be inserted. Translate tries to match every key to $keyName, and replaces it by its value.

NB: I purposefully dont create a `t` function like many i18n libraries do, because the type safety is useful, as it can, with a proper doc-comment, show which variables need to be inserted.


| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |,| variables (optional) | { [key: string]: string } |  |
| **Output** |    |    |



## 📄 translate (exported const)

Simple function for translations, that inputs a string (coming from your translation object and a variable object `{[key:string]:string}` that can hold other strings to be inserted. Translate tries to match every key to $keyName, and replaces it by its value.

NB: I purposefully dont create a `t` function like many i18n libraries do, because the type safety is useful, as it can, with a proper doc-comment, show which variables need to be inserted.
  </details>

