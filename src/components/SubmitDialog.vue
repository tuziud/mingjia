<template>
  <div class="toast-page">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <span class="info-name">填写预约人信息</span>
      <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
        <el-input v-model="ruleForm.name" style="width:350px" clearable autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
        <el-input v-model="ruleForm.phone" type="number" style="width:350px" clearable autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code" :label-width="formLabelWidth">
        <el-input v-model="ruleForm.code" type="number" style="width:230px" autocomplete="off"></el-input>
        <el-button class="getcode" @click="getCode" :disabled="isDisabled">{{buttonName}}</el-button>
      </el-form-item>
      <span class="info-name">长者信息</span>
      <div class="info_old">
        <el-form-item label="年龄" prop="age" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.age" type="number" style="width:100px" clearable autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  label="性别" prop="sex" :label-width="formLabelWidth">
          <el-radio-group text-color="#frdser"  v-model="ruleForm.sex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
      <div class="submit">
        <el-form-item class="sub_box">
          <el-button class="sub_btn" @click="submitForm('ruleForm')">立即预约</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name:'',
  components: {},
  props:[''],
  data () {
    return {
      ruleForm: {
        name: null,
        phone:null,
        code:null,
        age:null,
        sex:0
      },
      CountDown: 60,//倒计时
      buttonName: "发送验证码",//按钮初始化文字
      isDisabled: false,//是否
      formLabelWidth: '80px',
      rules:{
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' },
        ],
      }
    };
  },
  watch: {},
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {
    //点击获取验证码倒计时
    getCode(){
      this.isDisabled = true;
      let timerId = setInterval(() => {
        this.CountDown--;
        this.buttonName = this.CountDown + "秒后重试";
        if (this.CountDown <= 0) {
          clearInterval(timerId);
          this.buttonName = "重新发送";
          this.CountDown = 60;
          this.isDisabled = false;
        }
      }, 1000);
    },
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '数据提交成功',
            type: 'success'
          });
          console.log(this.ruleForm)  // 提交的数据，发起网络请求
          this.cancel()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 取消
    cancel(){
      this.$emit("closeDialog")
    }
  },
  computed: {}
}
</script>
<style>
.toast-page{
  text-align: left;
}
.info-name{
  height: 40px;
  line-height: 40px;
  font-weight: bolder;
  font-size: 18px;
  text-align: left;
}
.el-dialog__header{
  border-bottom: 1px solid #eee!important;
}

.info_old {
  display: flex;
}

.sub_box {
  text-align: center;
}
.sub_btn {
  background: #b01f24;
  width: 250px;
  height: 48px;
  color: #fff;
  font-size: 18px;
  margin: 0 auto;
  border-radius: 48px;
}

.getcode {
  background: #b01f24;
  color: #fff;
  margin-left: 10px;
}

.el-radio__input.is-checked + .el-radio__label {
  color: #b01f24 !important;
}
/* 选中后小圆点的颜色 */
.el-radio__input.is-checked .el-radio__inner {
  background: #b01f24 !important;
  border-color: #b01f24 !important;
}
.toast-page input::-webkit-outer-spin-button,
.toast-page input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.toast-page input[type='number'] {
  -moz-appearance: textfield;
}
</style>
