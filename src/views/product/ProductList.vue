<template>
<div>
  <el-table
    :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)"
    align="center"
    border
    v-loading="loading"
  >
    <el-table-column
      align="center"
      label="ProductId"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="Name" >
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="Address">
      <template slot-scope="scope">
        <span>{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="Telephone">
      <template slot-scope="scope">
        <span>{{ scope.row.telephone }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      fixed="right"
      label="Operate"
      width="240">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="handlePre(scope.$index, scope.row)">查看</el-button>
        <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    :page-size=pageSize
    :current-page="currentPage"
    layout="prev, pager, next"
    :total="totalPage"
    @current-change="currentChange"
  >
  </el-pagination>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductList',
  data () {
    return {
      loading: true,
      tableData: [],
      totalPage: 0,
      currentPage: 1,
      pageSize: 10
    }
  },
  watch: {
    // 如果 `tableData` 发生改变，这个函数就会运行
    tableData () {
      this.totalPage = this.tableData.length
    }
  },
  methods: {
    getProductList () {
      this.loading = true
      setTimeout(() => {
        axios.get('https://caochangkui.github.io/element-demo/dist/static/mock/products.json').then((res) => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.tableData = data.products
            this.loading = false
          }
        })
      }, 400)
    },
    currentChange (page) {
      this.currentPage = page
    },
    handlePre (index, row) {
      this.$store.commit('showProductDetail', row)
      this.$router.push({
        path: `/product/product_list/${row.id}`
      })
    },
    handleDelete (index, row) {
      this.$confirm('此操作将删除该行内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
      })
    },
    handleEdit (index, row) {
      console.log(index, row)
      const h = this.$createElement
      this.$msgbox({
        title: '产品编辑',
        message: h('div', null, [
          h('p', null, '内容可以是 '),
          h('p', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    }
  },
  mounted () {
    this.getProductList()
  }
}
</script>
