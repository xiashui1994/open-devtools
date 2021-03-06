const fs = require("fs")
const path = require("path")
// 获取当前执行命令
exports.getRunPresetExec = (env = 'development', type = 'h5', isMinimize = false) => {
  const watch = env === 'development' ? '--watch' : ''
  const minimize = isMinimize ? '--minimize' : ''
  return `npx cross-env NODE_ENV=${env} UNI_PLATFORM=${type} vue-cli-service uni-build ${watch} ${minimize} --color=always`
}

// 递归创建文件
exports.mkdirsSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (exports.mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}