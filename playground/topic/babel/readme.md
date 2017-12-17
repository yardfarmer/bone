# 学习 babel

## .babelrc 介绍

    {
      "env": {
        "production": {
          "plugins": ["transform-react-constant-elements"]
        }
      }
    }

The **env** key will be taken from `process.env.BABEL_ENV`, when this is not available then it uses process.env.NODE_ENV if even that is not available then it defaults to "development".

可用的配置选项，[清晰介绍](https://babeljs.io/docs/usage/api/#options)

## .babelrc 查找策略
babel will look up `.babelrc` in the 当前被编译的文件目录。如果没有找到，则 **travel up** 直到找到为止。

在配置选项中，使用 `"babelrc": false` 可以 Specify whether or not to use .babelrc and .babelignore files. 