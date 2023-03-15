import { SlugModelType } from "model-types";
import { Authorization, AuthorizationModel } from "auth-types";
/**
TODO: change this into a hierarchical kvmd model.

A `Person` is able to be part of one or multiple `Group`s.

A `Device` without `Person` is just part of group `public` and can only access `public` info and features.

`Group`s and individual `Person`s can be given `Authorization`

Groups are the main way to provide authorizations to functions, databases, and files (code, data, and text)

- To apply an authorization on a function, you can use the `.config.authorizations` parameter on the function
- To apply an authorization on a file or folder, you can use the `authorizations` frontmatter
- To apply an authorization on a database model, you can use the `authorizations` parameter on the `Dataset` or in the `TsInterface` frontmatter.

There are some special groups. These groups may have specific functionalities applied to them. Try to use these groups as much as possible, instead of creating your own groups:

- `admin` has 100% access to everything
- `public` is any user, even without signup
- `trusted` is any trusted user. These may be allowed to do additional things

*/
export interface Group extends SlugModelType {
    /**
     * Name of the group (will set slug)
     *
     * NB: this can be used in functions to specify certain access to groups. It should there fore be unique and you should be careful when changing it!
     */
    name: string;
    description?: string;
    /**
     * Any group recursively inherits other groups until it finds itself being in a loop. This way you can have authorizations applied on multiple groups at once, more easily
     *
     * TODO: change this into parent_groupSlugs. it's just a hierarchical categorisation, in a way.
     */
    inherited_groupSlugs?: string[];
    /**
     * DEPRECATED: not needed
     *
     * Optionally, provide custom authorization to a group
     */
    customAuthorizations?: Authorization[];
    indexedAuthorizationCalculated?: AuthorizationModel[];
}
//# sourceMappingURL=Group.d.ts.map