<template>
  <div id="app">
<!--    <app-header></app-header>
    <router-view></router-view>-->
    <div class="container">
      <div class="header">
        <span class="center">پیش فاکتورخرید</span>
      </div>
      <div class="border-box">
        <div class="row position-relative">
          <div class="w50 mr-auto text-center p-4">
            <div class="font10">پیش فاکتور خرید</div>
            <div class="font5">شرکت امین برتر اقتصاد میلاد</div>
          </div>
          <div class="float-left position-absolute w25">
              <div class="col-md text-right">
                <span>:کد عامل فروش</span>

              </div>
              <div class="col-md text-right">
                <span>:تاریخ صدور</span>

              </div>
              <div class="clear"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md w25 text-right float-right">
            <span>:فروشنده</span>

          </div>
          <div class="col-md w25 text-right float-right">
            <span>:شناسه ملی</span>

          </div>
          <div class="col-md w50 text-right float-right">
            <span>:آدرس</span>

          </div>
          <div class="clear"></div>
        </div>
        <div class="row">
          <div class="col-md w25 text-right float-right">
            <span>:خریدار</span>

          </div>
          <div class="col-md w25 text-right float-right">
            <span>:شناسه ملی</span>

          </div>
          <div class="col-md w50 text-right float-right">
            <span>:آدرس</span>

          </div>
          <div class="col-md w25 text-right float-right">
            <span>:تلفن همراه</span>

          </div>
          <div class="col-md w50 text-right float-right">
            <span>:کدپستی</span>

          </div>
          <div class="clear"></div>
        </div>
        <div class="row">
          <div class="col-md w40 text-right float-right">
            <span>:کد شناسه پرداخت صادره</span>

          </div>
          <div class="col-md w40 text-right float-right">
            <span>:شماره حساب واریزی(نزد حساب رفاه کارگران)</span>

          </div>
          <div class="clear"></div>
        </div>
        <table>
          <tr>
            <th>ردیف</th>
            <th>نام کالا</th>
            <th>تعداد</th>
            <th>قیمت واحد</th>
            <th>قیمت کل</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>Griffin</td>
            <td>Griffin</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td colspan="3">Griffin</td>
            <td>Griffin</td>
          </tr>
        </table>
        <div class="text-right mt-30">
          .پیش فاکتور صادر شده صرفا جهت ارایه به بانک رفاه کارگران بوده و فاقد هرگونه ارزش دیگری است<br>
          .توجه : مدت اعتبار پیش فاکتور از تاریخ صدور ۷ روز تقویمی اعتبار دارد<br>
          .توجه : تحویل کالا مشروط به ارایه پیش فاکتور تایید شده توسط بانک به نمایندگی صادر کننده فاکتور است<br>
          .توجه : باتوجه به شرایط اقتصادی کشور امکان تاخیر در تحویل کالا وجود داشته که پیشاپیش از صبر و شکیبایی شما سپاسگزاریم<br>
          .شماره ۱۶۹۹ داخلی ۳ آماده رسیدگی مشکلات شما در این خصوص می باشد<br>
        </div>
        <div class="mt-30">
          <div class="col-md w48 text-center float-right">
            <span>مهر و امضاء نماینده فروش</span>

          </div>
          <div class="col-md w48 text-center float-right">
            <span>امضاء خریدار</span>

          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Header from './components/Header.vue';
export default {
  name: 'App',
  /*components :{
    appHeader : Header
  }*/
}
</script>

<style scoped>
html,
body {
  text-align: right;
  direction: rtl;
  font-family: "Shabnam";
  cursor: default;
}

.mt-30{
  margin-top: 30px;
}
.p-4{
  padding: 15px;
}

.container{
  padding:10px
}
.clear{
  clear: both;
}

.text-center{
  text-align: center;
}

.text-right{
  text-align: right;
}

.mr-auto{
  margin:0 auto;
}

.float-left{
  float: left;
}

.float-right{
  float: right;
}

.position-relative{
  position: relative;
}

.font10{
  font-size:30px;
  font-weight: bold;
}

.font5{
  font-size:15px;
  margin:5px 0px
}

.position-absolute{
  position: absolute;
  top:10px
}
.border-box{
  padding:20px;
  border:1px solid #000;
}

.border-box .row{
  border:1px solid #9999995e;
  border-radius: 10px;
  margin-bottom: 15px;
}

.border-box .col-md{
  padding: 10px;
}

.header{
  text-align: center;
  margin-bottom: 10px;
}

.w25{
  width: 22%;
}

.w50{
  width: 50%;
}

.w40{
  width: 40%;
}

.w48{
  width:48%
}

table, td, th {
  border: 1px solid #9999995e;
  padding:10px
}

table {
  width: 100%;
  border-collapse: collapse;
}

</style>
