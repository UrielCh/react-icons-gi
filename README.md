# Game Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/gi)](https://jsr.io/@preact-icons/gi)

**License** [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)

**Project** [https://game-icons.net/](https://game-icons.net/)

[See available icons here](https://react-icons.deno.dev/gi)

## install the module

```bash
deno add @preact-icons/gi
dnpx jsr add @preact-icons/gi
pnpm dlx jsr add @preact-icons/gi
bunx jsr add @preact-icons/gi
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { Gi3dGlasses } from "@preact-icons/gi"
```

## import a single icon, downloading just one icon

```ts
import { Gi3dGlasses } from "react-icons/gi/Gi3dGlasses"
```

or using default export

```ts
import Gi3dGlasses from "react-icons/gi/Gi3dGlasses"
```
