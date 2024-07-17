# Game Icons icons for deno / Preact

**License** [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)

**Project** [https://game-icons.net/](https://game-icons.net/)

[See available icons here](https://react-icons.deno.dev/gi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.9",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/gi": "jsr:@preact-icons/gi@^1.0.10/mod.ts",
    "react-icons/gi/": "jsr:@preact-icons/gi@^1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib gi

```ts
import { Gi3dGlasses } from "jsr:preact-icons/gi@1.0.10/mod.ts"
```

## import_map import an icon from all icons

```ts
import { Gi3dGlasses } from "react-icons/gi"
```

## import a single icon, downloading just one icon

```ts
import { Gi3dGlasses } from "react-icons/gi/Gi3dGlasses.ts"
```

or using default export

```ts
import Gi3dGlasses from "react-icons/gi/Gi3dGlasses.ts"
```

