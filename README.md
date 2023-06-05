# Game Icons icons for deno / Preact

**License** [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)

**Project** [https://game-icons.net/](https://game-icons.net/)

[See available icons here](https://react-icons.deno.dev/gi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/gi":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-gi@1.0.9/mod.ts",
    "react-icons/gi/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-gi@1.0.9/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib gi

```ts
import { Gi3DGlasses } from "https://deno.land/x/react_icons_gi@1.0.9/mod.ts"
```

## import_map import an icon from all icons

```ts
import { Gi3DGlasses } from "react-icons/gi"
```

## import a single icon, downloading just one icon

```ts
import { Gi3DGlasses } from "react-icons/gi/Gi3DGlasses.ts"
```

or using default export

```ts
import Gi3DGlasses from "react-icons/gi/Gi3DGlasses.ts"
```

