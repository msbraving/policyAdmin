/* 资料管理 */
<template>
  <div class="industry-manage">
    <div class="header-search">
      <div class="header-search-left">
        <el-button type="primary" @click="addIndustry()">添加</el-button>
        <!-- <el-button type="primary">导出</el-button> -->
      </div>
      <div class="header-search-right">
        <el-input
          v-model="listQuery.information_name"
          placeholder="资料名称"
        ></el-input>
        <el-date-picker
          v-model="listQuery.start_time"
          type="date"
          placeholder="添加时间"
        >
        </el-date-picker>
        <el-select v-model="listQuery.industry_id" clearable placeholder="选择行业">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
        <el-cascader
          class="selectArea"
          placeholder="选择地区"
          v-model="listQuery.region_id"
          :options="options_area"
          clearable
          :props="{
            checkStrictly: true,
            value: 'id',
            label: 'short_name',
            children: 'son'
          }"
        ></el-cascader>
        <el-button type="primary" @click="search()">搜索</el-button>
      </div>
    </div>
    <div
      class="table"
      stripe
      fit
      highlight-current-row
      border
      v-loading="listLoading"
    >
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column
          prop="date"
          label="序号"
          width="80"
          type="index"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="pname" label="政策名称" align="center">
        </el-table-column>
        <el-table-column prop="name" label="所属行业" align="center">
        </el-table-column>
        <el-table-column prop="merger_name" label="所属地区" align="center">
        </el-table-column>
        <el-table-column prop="title" label="需提交资料" align="center">
        </el-table-column>
        <el-table-column prop="create_time" label="添加时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center" width="320">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="small"
              round
              plain
              @click="editIndustry(scope.row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="small"
              round
              plain
              @click="deleteIndustry(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      :total="count"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.pagesize"
      @pagination="policyList"
    />
  </div>
</template>

<script>
import {
  dataList,
  addData,
  deleteData,
  editData,
  editDataSubmit
} from "@/api/data-manage";
import { industryList, policyList, departList } from "@/api/area";
import areaList from "../../assets/areaList.js";
import Pagination from "@/components/Pagination";
export default {
  data() {
    return {
      listQuery: {
        page: 1,
        pagesize: 10,
        information_name: "",
        start_time: "",
        end_time: ""
        // industry_id: ""
      },
      listLoading: false,
      count: 0,
      tableData: [],
      textMap: {
        update: "编辑",
        create: "添加"
      },
      dialogStatus: "",
      UserDialogVisible: false,
      dialogForm: {},
      rules: {
        //表单验证
        title: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        region_id: [
          { required: true, message: "请选择行业", trigger: "change" }
        ],
        industry_id: [
          { required: true, message: "请选择行业", trigger: "change" }
        ],
        policy_id: [
          { required: true, message: "请选择行业", trigger: "change" }
        ]
      },
      araeCode: [],
      areaID: [],
      options: [], //行业
      options_area: areaList, //地区
      options_policy: [] //政策
    };
  },
  components: { Pagination },
  watch: {},
  created() {
    // this.areaList();
    this.industryList();
    this.policyList();
    this.dataList();
  },
  mounted() {},
  methods: {
    industryList() {
      //行业列表
      industryList().then(res => {
        this.options = res;
      });
    },
    policyList() {
      //政策列表
      policyList(this.policy).then(res => {
        this.options_policy = res.data;
      });
    },
    dataList() {
      //资料列表
      this.listLoading = true;
      dataList(this.listQuery).then(res => {
        this.tableData = res.data;
        this.count = res.count;
        this.listLoading = false;
      });
    },
    search() {
      //搜索
      if (this.listQuery.start_time == null) {
        this.$set(this.listQuery, "start_time", "");
      }
      //   if (this.listQuery.region_id == undefined) {
      //     this.$set(this.listQuery, "region_id", "");
      //   }
      if (Array.isArray(this.listQuery.region_id)) {
        this.$set(
          this.listQuery,
          "region_id",
          this.listQuery.region_id[this.listQuery.region_id.length - 1]
        );
      }
      this.dataList();
    },
    // 清除弹窗缓存数据
    resetTemp() {
      this.dialogForm = {
        id: "",
        title: "",
        region_id: "",
        policy_id: "",
        industry_id: ""
      };
    },
    addIndustry() {
      //添加
      this.$router.push("/data-manage/add-data");
    },
    editIndustry(formItem) {
      //编辑
      this.$router.push({
        path: "/data-manage/add-data",
        query: {
          id: formItem.id
        }
      });
    },
    deleteIndustry(id) {
      //删除
      this.$confirm("此操作将永久删除该条信息, 是否继续?", "提示", {
        confirmButtonText: "确 定",
        cancelButtonText: "取 消",
        type: "warning"
      })
        .then(() => {
          deleteData(id).then(res => {
            this.dataList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    resetForm() {
      this.UserDialogVisible = false;
      this.areaID = [];
    }
  }
};
</script>

<style scoped lang="scss">
.industry-manage {
  padding: 30px;
  .header-search {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .header-search-right {
      display: flex;
      ::v-deep .el-input {
        width: 180px;
        margin-right: 15px;
      }
      ::v-deep .selectArea .el-input {
        width: 250px;
      }
    }
  }
  .table {
    padding-top: 30px;
  }
  ::v-deep .selectArea .el-input {
    width: 300px;
  }
  ::v-deep .el-select.selectPolicy {
    width: 100%;
  }
  .form-flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>
