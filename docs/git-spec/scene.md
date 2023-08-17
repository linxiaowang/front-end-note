# 场景说明

## 新需求开发

- 从uat中check出feat分支，如开发的功能为客户新增，则可以创建一个名为`feat/customer-add` 的分支(若存在单据，则在后面加上单据的id，如 `feat/customer-add-1220164`)，若为多人开发，可再从`feat/customer-add`中check出新分支如`feat/customer-add-lxw`
- 分支开发完毕后merge到`uat`，发布到测试环境提测
- 测试完毕后，从`uat` merge 到`prod`生产环境进行部署

## 新版本开发

新需求涉及多模块、多需求开发，则分支名以版本号为名，如下
- 从uat中checkout出`feat/sp1.3`
- 各开发人员根据所领取的需求在 `feat/sp1.3` 分支的基础上去checkout出各自的分支
- 各自分支开发自测完后，合并到`feat/sp1.3` ，再由`feat/sp1.3`合并到`uat`， 发布到测试环境提测
- 测试完毕后，从`uat` merge 到`prod`生产环境进行部署

## 生产环境bug修订

- 从 `prod` 中 `check` 出新分支如： `fix/login-404`
- 修复完毕后，合并至 `uat`，并部署测试环境提供给业务人员测试
- 测试完毕后，将 `fix/login-404` 分支合并至 `prod` 分支进行部署
- 若当前以后开发分支，如正在开发 `feat/sp1.3`，则需将`fix/login-404`也合并至 `feat/sp1.3` 中
