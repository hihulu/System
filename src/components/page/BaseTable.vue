<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 学生信息
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button
                    type="primary"
                    icon="el-icon-delete"
                    class="handle-del mr10"
                    @click="delAllSelection"
                >批量删除</el-button>
                
                <el-input v-model="queryContent" placeholder="请输入搜索内容" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <!-- 筛选 -->
            <div class="handle-box">
                <div class="handle-box">
                    <!-- 学院 -->
                <el-select v-model="selectedCollege" placeholder="请选择学院"
                    style="width: 21%;">
                    <el-option v-for="item in college" :key="item.id" 
                        :label="item.name" :value="item.id"></el-option>
                </el-select>
                 &#12288;
                <!-- 专业 -->
                <el-select v-model="form.major" placeholder="请选择专业"
                    style="width: 21%;" :disabled="selectedCollege === '' ? true : false">
                    <el-option v-for="item in major" :key="item"
                        :label="item" :value="item"></el-option>
                </el-select>
                &#12288; 
                <!-- 年级 -->
                <el-select v-model="form.grade" placeholder="请选择年级"
                    style="width: 18%">
                    <el-option v-for="item in grade" :key="item.id" 
                        :label="item.name" :value="item.id"></el-option>
                </el-select>
               &#12288;
                <!-- 班级 -->
                <el-select v-model="form.schoolClass" placeholder="请选择班级"
                    style="width: 18%">
                    <el-option v-for="item in schoolClass" :key="item.id" 
                        :label="item.name" :value="item.id"></el-option>
                </el-select>
                &#12288;
                </div>
                <div>
                    <div></div>
                    <!-- 宿舍 -->
                <!-- 宿舍楼 -->    
                <el-select v-model="form.dorm" placeholder="请选择宿舍楼"
                    style="width: 21%;">
                            <el-option v-for="item in dorm" :key="item.id"
                                :label="item.name" :value="item.id"></el-option>
                </el-select>
                 &#12288;
                 
                 <!-- 宿舍楼号 -->    
                <el-select v-model="form.dormNum" placeholder="请选择楼号"
                    style="width: 21%;">
                            <el-option v-for="item in dormNum" :key="item.id"
                                :label="item.name" :value="item.id"></el-option>
                </el-select>
                 &#12288;
                 <!-- 单元号 -->    
                <el-select v-model="form.dormId" placeholder="请选择单元号"
                    style="width: 18%;">
                            <el-option v-for="item in dormId" :key="item.id"
                                :label="item.name" :value="item.id"></el-option>
                </el-select>
                 &#12288;
                 <!-- 楼层 -->    
                <el-select v-model="form.dormFloor" placeholder="请选择楼层"
                    style="width: 18%;">
                            <el-option v-for="item in dormFloor" :key="item.id"
                                :label="item.name" :value="item.id"></el-option>
                </el-select>
                 &#12288;
                 <el-button type="primary"  @click="handleSearch" 
                    style="margin-top: 10px;text-align: center;">筛选</el-button>
                </div>
                
                
            </div>
            <el-table
                :data="easyTableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange">
                    <!-- checkbox -->
                    <el-table-column type="selection" width="55" align="center"></el-table-column>
                    <!-- 学号 -->
                    <el-table-column prop="id" label="学号" align="center"></el-table-column>
                    <!-- 姓名 -->
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <!-- 学院 -->
                    <el-table-column prop="college" label="学院">
                    </el-table-column>
                    <!-- 专业 -->
                    <el-table-column prop="major" label="专业" align="center">
                    </el-table-column>
                    <!-- 宿舍 -->
                    <el-table-column prop="dormitory" label="宿舍"></el-table-column>
                    <!-- 操作 -->
                    <el-table-column label="操作" width="180" align="center">
                        <template slot-scope="scope">
                            <!-- 查看 -->
                            <el-button
                                type="text"
                                icon="el-icon-search"
                                @click="watchEdit(scope.$index, tableData)"
                            >查看</el-button>
                            <!-- 修改 -->
                            <el-button
                                type="text"
                                icon="el-icon-edit"
                                class="yellow"
                                @click="handleEdit(scope.$index, scope.row)"
                            >修改</el-button>
                            <!-- 删除 -->
                            <el-button
                                type="text"
                                icon="el-icon-delete"
                                class="red"
                                @click="handleDelete(scope.$index, scope.row)"
                            >删除</el-button>
                        </template>
                    </el-table-column>
            </el-table>
            <!-- 分页 -->
            <!-- 还有小瑕疵，API太多了还在消化 -->
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="修改" :visible.sync="editVisible" width="70%" >
            <!-- 详情表单 -->
            <el-form ref="form" :model="tableData" label-width="40%" class="my-el-form">
                <div style="float:left;width:30%;">
                    <el-form-item label="学号">
                        <el-input v-model="tableData.stu_num" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="tableData.stu_name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="tableData.gender">
                            <el-radio v-model="tableData.sex" label="male" style="display: table-cell">男</el-radio>
                            <el-radio v-model="tableData.sex" label="female" style="display: table-cell;padding-left:20px">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="姓名拼音">
                        <el-input v-model="tableData.stu_pinyin"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号">
                        <el-input v-model="tableData.stu_id"></el-input>
                    </el-form-item>
                    <el-form-item label="年级">
                        <el-select v-model="tableData.stu_year" :placeholder="tableData.stu_year">
                            <el-option v-for="item in grade" :key="item.id" 
                                :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="学院">
                        <el-select v-model="tableData.stu_department" :placeholder="tableData.stu_department">
                            <el-option v-for="item in college" :key="item.id" 
                                :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="班级">
                        <el-input v-model="tableData.stu_class"></el-input>
                    </el-form-item>
                    <el-form-item label="民族">
                        <el-input v-model="tableData.stu_nationality"></el-input>
                    </el-form-item>
                </div>
                <div style="display: table-cell;width:30%;">
                    <el-form-item label="学历">
                        <el-input v-model="tableData.stu_academic_record"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业院校">
                        <el-input v-model="tableData.graduated_school"></el-input>
                    </el-form-item>
                    <el-form-item label="居住地">
                        <el-input v-model="tableData.address"></el-input>
                    </el-form-item>
                    <el-form-item label="寝室">
                        <el-input v-model="tableData.dormitory"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="tableData.email"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input v-model="tableData.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="获奖情况">
                        <el-input v-model="tableData.awards"></el-input>
                    </el-form-item>
                    <el-form-item label="紧急联系人">
                        <el-input v-model="tableData.emergency_callee"></el-input>
                    </el-form-item>
                    <el-form-item label="紧急电话">
                        <el-input v-model="tableData.emergency_phone"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="经济资助">
                        <el-input v-model="tableData.financial_aid"></el-input>
                    </el-form-item> -->
                    <!-- <el-form-item label="心理等级">
                        <el-input v-model="tableData.dormitory"></el-input>
                    </el-form-item> -->
                    <!-- 辅导员 -->
                    <!-- 辅导员电话 -->
                    <!-- 评价 --> 
                </div>
            </el-form>
            <!-- 确认/取消 -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { fetchData } from '../../api/index';
import qs from 'qs';

export default {
    name: 'basetable',
    data() {
        return {
            query: {
                address: '',
                name: '',
                username: '',
                pageIndex: 1,
                pageSize: 10,
            },
            easyTableData: [
                {
                    id: 0,
                    name: '',
                    college: '',
                    grade: '',
                    major: '',
                    dormitory: ''
                }
            ],
            tableData: 
                {
                    stu_num: '03161129',
                    stu_name: 'name',
                    stu_gender:'male',
                    stu_pinyin:'wang yi fan',
                    stu_id:'420381***',
                    stu_year:'2017',
                    stu_department:'计算机科学与技术学院',
                    stu_class:'信安17-4班',
                    stu_nationality:'汉族',
                    stu_academic_record:'本科',
                    graduated_school:"丹江口市第一中学",
                    address:'湖北省十堰市丹江口市',
                    dormitory:'T2B216',
                    email:'406917347@qq.com',
                    phone:'13225237707',
                    awards:'无',
                    emergency_callee:'13117100257',
                    emergency_phone:'13197296515',
                    financial_aid:'否',
                    mental_level:'无',
                    counsellor_name:'孙凌杉',
                    counsellor_nun:'5776',
                    counsellor_phone:'13805202273/83591715',
                    comments:'无'
                },
            multipleSelection: [],
            delList: [],
            editVisible: false,
            form: {},
            idx: -1,
            id: -1,
            grade: [
                {
                    id: 1,
                    name: 2016
                },
                {
                    id: 2,
                    name: 2017
                },
                {
                    id: 3,
                    name: 2018
                },
                {
                    id: 4,
                    name: 2019
                }
            ],
            college: [
                {
                    id:1,
                    name:'安全工程学院'
                },
                {
                    id:2,
                    name:'材料科学与工程学院'
                },
                {
                    id:3,
                    name:'电气与动力工程学院'
                },
                {
                    id:4,
                    name:'公共管理学院'
                },
                {
                    id:5,
                    name:'管理学院'
                },
                {
                    id:6,
                    name:'国际学院'
                },
                {
                    id:7,
                    name:'化工学院'
                },
                {
                    id:8,
                    name:'环境与测绘学院'
                },
                {
                    id:9,
                    name:'机电工程学院'
                },
                {
                    id:10,
                    name:'计算机科学与技术学院'
                },
                {
                    id:11,
                    name:'建筑与设计学院'
                },
                {
                    id:12,
                    name:'矿业工程学院'
                },
                {
                    id:13,
                    name:'力学与土木工程学院'
                },
                {
                    id:14,
                    name:'马克思主义学院'
                },
                {
                    id:15,
                    name:'能源学部'
                },
                {
                    id:16,
                    name:'数学学院'
                },
                {
                    id:17,
                    name:'孙越崎学院'
                },
                {
                    id:18,
                    name:'体育学院'
                },
                {
                    id:19,
                    name:'外国语言文化学院'
                },
                {
                    id:20,
                    name:'物理学院'
                },
                {
                    id:21,
                    name:'信息与控制工程学院'
                },
                {
                    id:22,
                    name:'职业与继续教育部'
                },
                {
                    id:23,
                    name:'资源与地球科学学院'
                },
                {
                    id:24,
                    name:'深部重点实验室'     
                }
            ],
            major: [
            ],
            dorm:[
                {
                    id:1,
                    name:'全部'
                },
                {
                    id:2,
                    name:'竹苑'
                },
                {
                    id:3,
                    name:'梅苑'
                },
                {
                    id:4,
                    name:'兰苑'
                },
                {
                    id:5,
                    name:'桃苑'
                },
                {
                    id:6,
                    name:'松苑'
                },
                {
                    id:7,
                    name:'杏苑'
                }
            ],   
            dormNum:[
                {
                    id:1,
                    name:'全部'
                },
                {
                    id:2,
                    name:'1号楼'
                },
                {
                    id:3,
                    name:'2号楼'
                },
                {
                    id:4,
                    name:'3号楼'
                },
                {
                    id:5,
                    name:'4号楼'
                },
                {
                    id:6,
                    name:'5号楼'
                }
            ],
            dormId:[
                {
                    id:1,
                    name:'全部'
                },
                {
                    id:2,
                    name:'A栋'
                },
                {
                    id:3,
                    name:'B栋'
                },
                {
                    id:4,
                    name:'C栋'
                }
            ],
            dormFloor:[
                {
                    id:1,
                    name:'全部'
                },
                {
                    id:2,
                    name:'1层'
                },
                {
                    id:3,
                    name:'2层'
                },
                {
                    id:4,
                    name:'3层'
                },
                {
                    id:5,
                    name:'4层'
                },
                {
                    id:6,
                    name:'5层'
                },
                {
                    id: 7,
                    name: '6层'
                },
                {
                    id: 8,
                    name: '7层'
                }
            ],
            schoolClass: [
                {
                    id: 1,
                    name: '计算机类17-1班'
                },
                {
                    id: 2,
                    name: '计算机类17-2班'
                },
                {
                    id: 3,
                    name: '计算机类17-3班'
                },
                {
                    id: 4,
                    name: '计算机类17-4班'
                },
                {
                    id: 5,
                    name: '计算机类17-5班'
                },
                {
                    id: 6,
                    name: '计算机类17-6班'
                },
                {
                    id: 7,
                    name: '计算机类17-7班'
                },
                {
                    id: 8,
                    name: '计算机类17-8班'
                },
                {
                    id: 9,
                    name: '计算机类17-9班'
                },
                {
                    id: 10,
                    name: '计算机类17-10班'
                },
                {
                    id: 11,
                    name: '计算机类17-11班'
                },{
                    id: 12,
                    name: '计算机类17-12班'
                },
                {
                    id: 13,
                    name: '计算机类17-13班'
                },
                {
                    id: 14,
                    name: '计算机类17-14班'
                },
                {
                    id: 15,
                    name: '计算机类17-15班'
                },{
                    id: 16,
                    name: '计算机类17-16班'
                },
                {
                    id: 17,
                    name: '计算机类17-17班'
                },
                {
                    id: 18,
                    name: '计算机类17-18班'
                },
                {
                    id: 19,
                    name: '计算机类17-19班'
                },
                {
                    id: 20,
                    name: '计算机类17-20班'
                },

            ],
            systemId: this.$route.params.systemId,
            isMajor: false,
            selectedCollege: '',
            queryContent: '',
        };
    },
    computed: {
        pageTotal () {
            let list = this.tableData
            let temp = list.length
            console.log(temp)
            return temp            
        },
    },
    watch: {
        selectedCollege (newVal, oldVal) {
            if (newVal) {
                // console.log(newVal)
                // 根据id获取学院名
                let college = ''
                this.college.forEach(item => {
                    item.id === newVal ? college=item.name : ''
                })
                console.log(college);
                // 请求专业列表
                this.$http.get("https://xyt-wx.cumt.edu.cn:80/info/majors?department=" + college, {}, {withCredentials: true})
                    .then((response) => {
                        if ( response.code === 0) {
                            // 获取专业列表
                            this.major = response.data.data
                        }
                    })
            }
        }
    },
    mounted () {
        this.$http.get("https://xyt-wx.cumt.edu.cn:80/info/brief-info", {withCredentials: true})
            .then((response) => {
            if ( response.data.code === 0) {
                this.easyTableData = response.data.data
            }
        })
    },
    methods: {
        // 查看操作
        watchEdit (index, rows) {
            console.log(index);
            console.log(rows);
            let num = rows.stu_num
            // alter(rows.stu_num)
            // console.log(id)
            this.$router.push({
                path: 'https://xyt-wx.cumt.edu.cn:80/student', query: { id: num } 
            })
        },
        // 获取 easy-mock 的模拟数据
        getData() {
            fetchData(this.query).then(res => {
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 50;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            // console.log(this.queryContent)
            this.$http.get("https://xyt-wx.cumt.edu.cn:80/info/fuzz-query?query=" + this.queryContent + "&page=" + this.page, {
                withCredentials: true
            })
            .then((response) => {
                if ( response.code === 0) {
                    // 获取简略学生列表
                    this.easyTableData = response.data.data
                }
            })
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            if (this.systemId === 0) {
                alert('学生无法修改学生信息')
            } else {
                this.idx = index;
                this.form = row;
                this.editVisible = true;
            }
        },
        // 保存编辑
        saveEdit() {
            let data = this.tableData
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.tableData, this.idx, this.form);
            this.$http.post('https://xyt-wx.cumt.edu.cn:80/info/update', qs.stringify(data), {withCredentials: true})
                .then((response) => {
                    if (response.data.code === 0) {
                        console.log('修改成功！')
                    } else {
                        alert("ERROR SUBMIT")
                        return false
                    }
                })
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>

<style scoped lang='scss'>
.handle-box {
    margin-bottom: 20px;
}
.el-input__inner {
    width: none;
}
.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.yellow {
    color: #E6A23C;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
label {
    font-size: 10px;
    font-family: 微软雅黑;
    font-weight: bold;
    letter-spacing: 1px;
    color: color
}
.el-form-item {
    margin: 7px 0 0;
}
</style>
