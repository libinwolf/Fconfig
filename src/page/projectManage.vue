<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="SearchTop">
      <div class="SearchInfo">
        <div class="SearchItem">
          <label style="font-size: 16px;color: #708090;" for="项目名称">项目名称：</label>
          <el-input style="width:200px;" v-model="input" placeholder="请输入项目名称" clearable></el-input>
        </div>
        <div class="SearchItem">
          <label style="font-size: 16px;color: #708090;" for="创建起止时间">创建起止日期：</label>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </div>
      <el-button class="Searchbtn" type="primary" icon="el-icon-search">查询</el-button>
    </div>
    <div class="table_container">
      <el-table :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column type="projectid" label="项目编码" width="100"></el-table-column>
        <el-table-column property="projectname" label="项目名称" width="220"></el-table-column>
        <el-table-column property="creationtime" label="创建日期" width="220"></el-table-column>
        <el-table-column property="action" label="操作"></el-table-column>
      </el-table>
      <div class="Pagination" style="text-align: center;margin-top: 10px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="10"
          layout="total, prev, pager, next"
          :total="count"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from "../components/headTop";
import { getUserList, getUserCount } from "@/api/getData";
export default {
  data() {
    return {
      tableData: [
        {
          registe_time: "2016-05-02",
          username: "王小虎"
        }
      ],
      currentRow: null,
      offset: 0,
      limit: 10,
      count: 0,
      currentPage: 1,
	  input: "",
	  value1:null
    };
  },
  components: {
    headTop
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      try {
        const countData = await getUserCount();
        if (countData.status == 1) {
          this.count = countData.count;
        } else {
          throw new Error("获取数据失败");
        }
        this.getUsers();
      } catch (err) {
        console.log("获取数据失败", err);
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.offset = (val - 1) * this.limit;
      this.getUsers();
    },
    // async getUsers() {
    //   const Users = await getUserList({
    //     offset: this.offset,
    //     limit: this.limit
    //   });
    //   this.tableData = [];
    //   Users.forEach(item => {
    //     const tableData = {};
    //     tableData.username = item.username;
    //     tableData.registe_time = item.registe_time;
    //     tableData.city = item.city;
    //     this.tableData.push(tableData);
    //   });
    // }
  }
};
</script>

<style lang="less">
@import "../style/mixin";
.table_container {
  padding: 20px;
}

.SearchTop {
	background-color:gainsboro;
  display: flex;
}

.SearchInfo {
  display: flex;
  width: 100%;
  font-size: 20px;
  margin: 10px;
}

.SearchItem {
  margin-left: 10px;
}

.Searchbtn {
  height: 40px;
  margin: 10px;
}
</style>
