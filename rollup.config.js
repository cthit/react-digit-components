import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import json from "rollup-plugin-json";
import pkg from "./package.json";
import alias from "rollup-plugin-alias";

export default {
    input: "src/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true
        }
    ],
    plugins: [
        alias({
            resolve: [".jsx", ".js"]
        }),
        external(["styled-components"]),
        url(),
        svgr(),
        babel({
            exclude: "node_modules/**",
            plugins: []
        }),
        resolve({
            extensions: [".js", ".jsx", ".json"]
        }),
        commonjs({
            include: "node_modules/**",
            namedExports: {
                react: [
                    "cloneElement",
                    "createFactory",
                    "Component",
                    "PropTypes",
                    "createElement",
                    "createContext",
                    "isValidElement",
                    "Children",
                    "useLayoutEffect",
                    "useEffect",
                    "useState",
                    "useContext",
                    "useMemo",
                    "useReducer",
                    "useRef",
                    "useCallback",
                    "Fragment",
                    "forwardRef",
                    "memo",
                    "useDebugValue",
                    "PureComponent"
                ],
                "prop-types": [
                    "func",
                    "oneOfType",
                    "object",
                    "string",
                    "element",
                    "arrayOf",
                    "bool",
                    "any",
                    "number",
                    "instanceOf",
                    "oneOf",
                    "node",
                    "elementType"
                ],
                "react-dom": [
                    "render",
                    "findDOMNode",
                    "unstable_batchedUpdates",
                    "createPortal"
                ],
                "react-is": [
                    "isElement",
                    "isValidElementType",
                    "ForwardRef",
                    "isContextConsumer",
                    "isFragment"
                ],
                scheduler: ["unstable_runWithPriority", "LowPriority"]
            }
        }),
        json()
    ]
};
