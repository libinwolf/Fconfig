<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%; background-color: #324057;" >
        <el-menu
          :default-active="defaultActive"
          style="min-height: 100%;background-color: #324057;"
          text-color="#FFFFFF"
          theme="dark"
          router
        >
          <el-menu-item index="manage">
            <i class="el-icon-menu"></i>首页
          </el-menu-item>
          <!-- <el-submenu index="2"> -->
          <el-menu-item index="projectManage">
            <i class="el-icon-document"></i>项目管理
          </el-menu-item>
          <!-- </el-submenu> -->
          <el-menu-item index="moduleManage">
            <i class="el-icon-cpu"></i>元件管理
          </el-menu-item>
          <el-menu-item index="userManage">
            <i class="el-icon-user"></i>用户管理
          </el-menu-item>
          <el-menu-item index="systemSet">
            <i class="el-icon-setting"></i>系统设置
          </el-menu-item>

          <!-- <el-submenu index="6">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item>
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
          </el-submenu>-->
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    
  }
};
</script>


<style lang="less" scoped>
@import "../style/mixin";

</style>
